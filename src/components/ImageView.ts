import { Component } from "./Component";

interface IArgs {
  $target: HTMLElement;
  initialState: any;
}
export default class ImageView extends Component {
  constructor({ $target, initialState }: IArgs) {
    super();
    while ($target.hasChildNodes()) {
      $target.removeChild($target.firstChild);
    }
    this.children = $target;
    this.state = { ...initialState };

    this.render();
  }

  render = async () => {
    let width = await this.loadImage(
      this.children,
      this.state.photos[this.state.selected]
    );
    if (width > 0) {
      console.log(
        this.children.offsetHeight,
        (this.children.offsetHeight / this.children.offsetWidth) * width
      );
      if (
        this.children.offsetHeight <
        (this.children.offsetHeight / this.children.offsetWidth) * width
      ) {
        console.log("넚이에 맞추기");
        this.children.getElementsByTagName("img")[0].classList.add("portrait");
      } else {
        console.log("높이에 맞추기");
        this.children.getElementsByTagName("img")[0].classList.add("landscape");
      }
    }
    width = null;
  };

  loadImage($target: HTMLElement, name: string): Promise<any> {
    return new Promise(function (resolve, reject) {
      let img = new Image();
      img.src = require(`../assets/${name}`).default;
      img.alt = name;

      $target.append(img);
      img.onload = () => resolve(img.offsetWidth);
      img.onerror = () => reject(new Error("image load error"));
    });
  }
}
