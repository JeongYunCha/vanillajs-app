import { Component } from "./Component";

interface IArgs {
  $target: HTMLElement;
  initialState: any;
  onDelete?: Function;
}
export default class EditableList extends Component {
  protected onDelete: Function;

  constructor({ $target, initialState, onDelete }: IArgs) {
    super();
    this.state = { ...initialState };
    this.children = $target;
    this.onDelete = onDelete;

    this.children.addEventListener("click", (e: MouseEvent) => {
      e.stopPropagation();
      if (e.target["innerText"] === "삭제") {
        this.onDelete(e.target["id"]);
      }
    });

    this.render();
  }

  render(): void {
    this.children.innerHTML = this.state.alarms
      .map((item: string, idx: number) => {
        return `<li class='flex-container'>
                  <span class='flex-item grow'>${item[1]}</span>
                  <button id=${idx} class='flex-item'>삭제</button>
                </li>`;
      })
      .join("");
  }
}
