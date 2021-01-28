import { Component } from "./Component";

interface IArgs {
  $target: HTMLElement;
  initialState: any;
  onChange?: Function;
}
export default class DraggableList extends Component {
  protected onChange: Function;
  protected targetX: number;
  protected targetY: number;
  protected isMoved: boolean;
  protected isSwaped: boolean;

  constructor({ $target, initialState, onChange }: IArgs) {
    super();
    this.state = { ...initialState };
    this.children = $target;
    this.onChange = onChange;
    this.children.addEventListener("touchstart", this.onTouchStart, false);

    this.render();
  }

  render(): void {
    this.children.innerHTML = this.state.home
      .map((item: string[], idx: number) => {
        return `<li key=${idx} class="flex-item" draggable=false>
                    <a id="${item[0]}" href="#${item[0]}" >${item[1]}</a>
                </li>`;
      })
      .join("");
  }

  onTouchStart = (e: TouchEvent) => {
    e.preventDefault();
    this.children.addEventListener("touchmove", this.onTouchMove, false);
    this.children.addEventListener("touchend", this.onTouchEnd, false);
    this.targetX = e.target["offsetLeft"];
    this.targetY = e.target["offsetTop"];
    this.isMoved = false;
    this.isSwaped = false;
  };

  onTouchMove = (e: TouchEvent) => {
    e.preventDefault();
    const target = document.getElementById(e.target["id"]);
    target.style.left = `${e.targetTouches[0].pageX}px`;
    target.style.top = `${e.targetTouches[0].pageY}px`;
    target.style.opacity = "0.5";
    this.isMoved = true;
  };

  onTouchEnd = (e: TouchEvent) => {
    e.preventDefault();
    this.children.removeEventListener("touchmove", this.onTouchMove, false);
    this.children.removeEventListener("touchend", this.onTouchEnd, false);

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
          appList[`${idx}`].style.left = `${this.state.targetX}px`;
          appList[`${idx}`].style.top = `${this.state.targetY}px`;
          target.style.left = `${rect.x}px`;
          target.style.top = `${rect.y}px`;
          target.style.opacity = "1";

          const newState = [...this.state.home];
          const originalIdx = e["path"][1].getAttribute("key");
          newState[idx] = [...this.state.home][originalIdx];
          newState[originalIdx] = [...this.state.home][idx];
          this.onChange(newState);
        }
      });

    if (!this.isSwaped) {
      target.style.left = `${this.targetX}px`;
      target.style.top = `${this.targetY}px`;
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
