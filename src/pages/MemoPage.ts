import { createComponent } from "../components/Component";
import Header from "../components/Header";
import { Page } from "./Page";

export default class MemoPage extends Page {
  private readonly LOCAL_STORAGE = "memos";

  constructor($app: HTMLDivElement) {
    super($app);
    this.state = {
      memos: localStorage.getItem(this.LOCAL_STORAGE) || [
        "Memo Memo Memo Memo Memo Memo Memo Memo Memo Memo Memo Memo Memo Memo Memo",
      ],
    };

    createComponent(Header, {
      $target: this.headerEl,
      goBack: () => {},
      addNew: (e: Event) => {
        this.setState({
          memos: [...this.state.memos, "Memo Memo Memo Memo Memo Memo Memo"],
        });
      },
    });

    this.render();
  }

  render(): void {
    const children = this.state.memos
      .map((item: string) => {
        return `<li>${item}</li>`;
      })
      .join("");

    this.mainEl.innerHTML = `
      <header></header>
      <ul class="list-wrapper">${children}</ul>
    `;
  }
}
