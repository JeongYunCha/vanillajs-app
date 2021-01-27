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

    this.state = { ...initialState };
    this.onClick = onClick;
    this.children = $target;
    this.children.append(
      ...this.state.photos.map((photo: string, idx: number) => {
        const item = document.createElement("li");
        item.setAttribute("key", String(idx));
        item.setAttribute("class", "thumbnail-wrapper");
        item.innerHTML = `                  
        <img class="thumbnail-img" id="img-${idx}" alt="${photo}" src=${
          require(`../assets/${photo}`).default
        }/>
        `;
        return item;
      })
    );

    this.children.addEventListener("click", (e: MouseEvent) => {
      e.stopPropagation();
      if (e.target["className"] === "thumbnail-img") {
        this.onClick(Number(e.target["id"].split("-")[1]));
      }
    });

    this.render();
  }

  render = () => {
    const selected = this.children.querySelector(".thumbnail-wrapper.selected");
    if (selected) {
      selected.classList.remove("selected");
    }
    const imgElList = this.children.querySelectorAll(".thumbnail-wrapper");
    imgElList[this.state.selected].classList.add("selected");
  };
}
