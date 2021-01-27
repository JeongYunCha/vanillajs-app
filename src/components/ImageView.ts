import { Component } from "./Component";

interface IArgs {
  $target: HTMLElement;
  initialState: any;
}
export default class ImageView extends Component {
  protected imageEl: HTMLImageElement;

  constructor({ $target, initialState }: IArgs) {
    super();
    this.imageEl = new Image();
    this.children = $target;
    this.children.appendChild(this.imageEl);

    this.state = { ...initialState };

    this.render();
  }

  render = () => {
    const selected = this.state.photos[this.state.selected];
    this.imageEl.classList.remove("landscape", "portrait");
    this.imageEl.src = require(`../assets/${selected}`).default;
    this.imageEl.alt = selected;
    this.imageEl.onload = () => {
      if (
        this.children.offsetHeight <
        (this.children.offsetHeight / this.children.offsetWidth) *
          this.imageEl.clientWidth
      ) {
        this.imageEl.classList.add("portrait");
      } else {
        this.imageEl.classList.add("landscape");
      }
    };
  };
}
