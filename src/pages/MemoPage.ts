import { createComponent } from "../components/Component";
import Header from "../components/Header";
import { Page } from "./Page";

export default class MemoPage extends Page {
  private readonly LOCAL_STORAGE = "memos";
  protected registerEl: HTMLDivElement;
  protected resultListEl: HTMLUListElement;

  constructor($app: HTMLDivElement) {
    super($app);
    this.registerEl = document.createElement("div");
    this.resultListEl = document.createElement("ul");
    this.registerEl.classList.add("hidden", "flex-container");
    this.resultListEl.classList.add("list-wrapper");
    this.mainEl.appendChild(this.registerEl);
    this.mainEl.appendChild(this.resultListEl);

    this.state = {
      memos: JSON.parse(localStorage.getItem(this.LOCAL_STORAGE)) || [],
    };

    this.registerEl.addEventListener("keyup", (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        const inputEl = document.getElementById("memo") as HTMLSelectElement;
        this.setState({ memos: [...this.state.memos, inputEl.value] }, () =>
          localStorage.setItem(
            this.LOCAL_STORAGE,
            JSON.stringify(this.state.memos)
          )
        );
        this.registerEl.classList.add("hidden");
      }
    });

    this.resultListEl.addEventListener("click", (e: MouseEvent) => {
      e.stopPropagation();
      document.getElementById(e.target["id"]).classList.toggle("accordion");
    });

    createComponent(Header, {
      $target: this.headerEl,
      goBack: () => {},
      addNew: () => {
        this.registerEl.classList.remove("hidden");
        document.getElementById("memo").focus();
      },
    });

    this.render();
  }

  render(): void {
    this.registerEl.innerHTML = `
      <input id="memo" placeholder="메모를 입력하세요"/>
    `;
    this.resultListEl.innerHTML = this.state.memos
      .map((item: string, idx: number) => {
        return `<li id="${idx}" class="memo-list accordion">${item}</li>`;
      })
      .join("");
  }
}
