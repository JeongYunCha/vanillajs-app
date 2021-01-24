import { createComponent } from "../components/Component";
import Header from "../components/Header";
import { Page } from "./Page";

export default class HomePage extends Page {
  private readonly LOCAL_STORAGE = "home";
  private readonly appList = {
    alarm: "알람",
    memo: "메모",
    photo: "사진",
  };

  constructor($app: HTMLDivElement) {
    super($app);
    this.state = {
      home: localStorage.getItem(this.LOCAL_STORAGE) || [
        "alarm",
        "memo",
        "photo",
      ],
    };

    createComponent(Header, {
      $target: this.headerEl,
    });

    this.render();
  }

  render(): void {
    const children = this.state.home
      .map((item: string) => {
        return `<li class='flex-item'><a href="#${item}">${this.appList[item]}</a></li>`;
      })
      .join("");

    this.mainEl.innerHTML = `<ul class="flex-container home">${children}</ul>`;
  }
}
