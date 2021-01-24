import { createComponent } from "../components/Component";
import Header from "../components/Header";
import { Page } from "./Page";

export default class AlarmPage extends Page {
  private readonly LOCAL_STORAGE = "alarms";

  constructor($app: HTMLDivElement) {
    super($app);
    this.state = {
      alarms: localStorage.getItem(this.LOCAL_STORAGE) || ["13:51:50"],
    };

    createComponent(Header, {
      $target: this.headerEl,
      goBack: () => {},
      addNew: (e: Event) => {
        this.setState({ alarms: [...this.state.alarms, "13:51:50"] });
      },
    });

    this.render();
  }

  render(): void {
    const children = this.state.alarms
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
