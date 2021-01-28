import { createComponent } from "../components/Component";
import Header from "../components/Header";
import { Page } from "./Page";

export default class HomePage extends Page {
  private readonly LOCAL_STORAGE = "home";
  protected appListEl: HTMLUListElement;
  protected apps: Map<string, string>;
  protected isMoved: boolean;
  protected isSwaped: boolean;
  protected clientX: number;
  protected clientY: number;

  constructor($app: HTMLDivElement) {
    super($app);
    this.state = {
      home: JSON.parse(localStorage.getItem(this.LOCAL_STORAGE)),
    };

    this.appListEl = document.createElement("ul");
    this.appListEl.classList.add("flex-container", "home");
    this.mainEl.appendChild(this.appListEl);
    this.mainEl.addEventListener("touchstart", this.onTouchStart, false);

    this.isMoved = false;

    createComponent(Header, {
      $target: this.headerEl,
    });

    this.render();
  }

  render(): void {
    this.apps = new Map(this.state.home);
    this.appListEl.innerHTML = Array.from(this.apps.keys())
      .map((key: string, idx: number) => {
        return `<li key=${idx} class="flex-item" draggable=false>
                <a id="${key}" href="#${key}" >${this.apps.get(key)}</a>
              </li>`;
      })
      .join("");
  }

  handleEvent = (e: any) => {
    switch (e.type) {
      case "touchstart":
        this.onTouchStart(e);
        break;
      case "touchmove":
        this.onTouchMove(e);
        break;
      case "touchend":
        this.onTouchEnd(e);
        break;
    }
  };

  onTouchStart = (e: TouchEvent) => {
    e.preventDefault();
    this.isMoved = false;
    this.mainEl.addEventListener("touchmove", this.onTouchMove, false);
    this.mainEl.addEventListener("touchend", this.onTouchEnd, false);
    this.clientX = e.target["offsetLeft"];
    this.clientY = e.target["offsetTop"];
  };

  onTouchMove = (e: TouchEvent) => {
    e.preventDefault();
    this.isMoved = true;
    this.isSwaped = false;
    const touchLocation = e.targetTouches[0];
    const target = document.getElementById(e.target["id"]);

    target.style.left = `${touchLocation.pageX}px`;
    target.style.top = `${touchLocation.pageY}px`;
    target.style.opacity = "0.5";
  };

  onTouchEnd = (e: TouchEvent) => {
    e.preventDefault();
    this.mainEl.removeEventListener("touchmove", this.onTouchMove, false);
    this.mainEl.removeEventListener("touchend", this.onTouchEnd, false);

    const target = document.getElementById(e.target["id"]);
    const targetRect = target.getBoundingClientRect();
    const appList = document.querySelectorAll(".home li a");

    document
      .querySelectorAll(".home li")
      .forEach((el: HTMLElement, idx: number) => {
        const rect = el.getBoundingClientRect();
        if (
          rect.x < targetRect.x &&
          rect.x + rect.width > targetRect.x &&
          rect.y < targetRect.y &&
          rect.y + rect.height > targetRect.y
        ) {
          this.isSwaped = true;
          appList[`${idx}`].style.left = `${this.clientX}px`;
          appList[`${idx}`].style.top = `${this.clientY}px`;
          target.style.left = `${rect.x}px`;
          target.style.top = `${rect.y}px`;
          target.style.opacity = "1";

          const newState = [...this.apps];
          const originalIdx = e["path"][1].getAttribute("key");
          newState[idx] = [...this.apps][originalIdx];
          newState[originalIdx] = [...this.apps][idx];
          console.log(newState);
          this.setState({ home: newState }, () =>
            localStorage.setItem(
              this.LOCAL_STORAGE,
              JSON.stringify(this.state.home)
            )
          );
        }
      });

    if (!this.isSwaped) {
      target.style.left = `${this.clientX}px`;
      target.style.top = `${this.clientY}px`;
      target.style.opacity = "1";
    }

    if (!this.isMoved) {
      const theTarget = document.elementFromPoint(
        e.changedTouches[0].clientX,
        e.changedTouches[0].clientY
      );
      const theEvent = document.createEvent("MouseEvents");
      theEvent.initEvent("click", true, true);
      theTarget.dispatchEvent(theEvent);
    }
  };
}
