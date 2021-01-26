import { getDateTime } from "../util";
import { Component } from "./Component";

interface IArgs {
  $target: HTMLElement;
  goBack?: Function;
  addNew?: Function;
}
export default class Header extends Component {
  private goBack: Function;
  private addNew: Function;

  constructor({ $target, goBack, addNew }: IArgs) {
    super();
    this.state = {};
    this.goBack = goBack;
    this.addNew = addNew;
    this.children = document.createElement("ul");
    this.children.classList.add("flex-container");
    $target.appendChild(this.children);
    $target.addEventListener("click", (e: MouseEvent) => {
      e.stopPropagation();
      if (e.target["innerHTML"] === "NEW") this.addNew();
      if (e.target["innerHTML"] === "BACK") this.goBack();
    });

    this.render();
  }

  render(): void {
    this.children.innerHTML = `
      ${
        this.goBack
          ? `<li class='flex-item btn'><a href='/'>BACK</a></li>`
          : `<li class='flex-item btn hidden'></li>`
      }
      <li id="clock" class='flex-item grow'>${getDateTime()}</li>
      ${
        this.addNew
          ? `<li class='flex-item btn'>NEW</li>`
          : `<li class='flex-item btn hidden'></li>`
      }
    `;
  }
}
