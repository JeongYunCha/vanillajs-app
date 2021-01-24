import { createComponent } from "../components/Component";
import Header from "../components/Header";
import { Page } from "./Page";

export default class PhotoPage extends Page {
  private readonly LOCAL_STORAGE = "photos";

  constructor($app: HTMLDivElement) {
    super($app);
    this.state = {
      photos: localStorage.getItem(this.LOCAL_STORAGE) || ["13:51:50"],
    };

    createComponent(Header, {
      $target: this.headerEl,
      goBack: () => {},
    });

    this.render();
  }

  render(): void {
    const children = this.state.photos
      .map((item: string) => {
        return `<li class='flex-container'>
                  <span class='flex-item grow'>${item}</span>
                  <button class='flex-item'>삭제</button>
                </li>`;
      })
      .join("");

    this.mainEl.innerHTML = `
      <header></header>
      <ul class="list-wrapper">${children}</ul>
    `;
  }
}
