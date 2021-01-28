import { Component } from "./Component";

interface IArgs {
  $target: HTMLElement;
  onEnterKeyUp?: Function;
}
export default class InputBox extends Component {
  protected onEnterKeyUp: Function;

  constructor({ $target, onEnterKeyUp }: IArgs) {
    super();
    this.children = $target;
    this.children.innerHTML = `
      <input id="memo-input" placeholder="메모를 입력하세요"/>
    `;

    this.onEnterKeyUp = onEnterKeyUp;

    this.children.addEventListener("keyup", (e: KeyboardEvent) => {
      e.stopPropagation();
      if (e.key === "Enter") {
        this.onEnterKeyUp(e.target["value"]);
      }
    });
  }

  render(): void {}
}
