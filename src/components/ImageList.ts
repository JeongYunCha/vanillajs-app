import { Component } from "./Component";

interface IArgs {
  $target: HTMLElement;
  initialState: any;
  onClick?: Function;
}
export default class ImageList extends Component {
  private onClick: Function;
  constructor({ $target, initialState, onClick }: IArgs) {
    super();
    this.children = $target;
    this.state = initialState;
    this.onClick = onClick;

    this.children.addEventListener("click", (e: MouseEvent) => {
      e.stopPropagation();
      if (e.target["className"] === "thumbnail-img") {
        this.onClick(Number(e.target["id"]));
      }
    });

    this.render();
  }

  render(): void {
    this.children.innerHTML = this.state.photos
      .map((photo: string, idx: number) => {
        const imageSrc = require(`../assets/${photo}`).default;
        return `
        <li key=${idx} class="thumbnail-wrapper ${
          this.state.selected === idx ? "selected" : ""
        }" > 
          <div class="thumbnail"> 
            <div class="thumbnail-centered"> 
              <img id="${idx}" src=${imageSrc} alt="${photo}" class="thumbnail-img"/>
            </div> 
          </div> 
        </li>
      `;
      })
      .join("");
  }
}
