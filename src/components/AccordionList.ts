import { Component } from "./Component";

interface IArgs {
  $target: HTMLElement;
  initialState: any;
  onClick?: Function;
}
export default class AccordionList extends Component {
  protected onClick: Function;

  constructor({ $target, initialState, onClick }: IArgs) {
    super();
    this.state = { ...initialState };
    this.children = $target;
    this.onClick = onClick;

    this.children.addEventListener("click", (e: MouseEvent) => {
      e.stopPropagation();
      this.onClick(e.target["id"]);
    });

    this.render();
  }

  render(): void {
    this.children.innerHTML = this.state.memos
      .map((item: string, idx: number) => {
        return `<li id="${idx}" class="memo-list accordion">${item}</li>`;
      })
      .join("");
  }
}
