import { createComponent } from "../components/Component";
import Header from "../components/Header";
import { Page } from "./Page";
import ImageList from "../components/ImageList";
import ImageView from "../components/ImageView";

export default class PhotoPage extends Page {
  protected photoListEl: HTMLUListElement;
  protected photoViewEl: HTMLDivElement;

  constructor($app: HTMLDivElement) {
    super($app);
    this.photoListEl = document.createElement("ul");
    this.photoViewEl = document.createElement("div");
    this.mainEl.appendChild(this.photoListEl);
    this.mainEl.appendChild(this.photoViewEl);
    this.photoListEl.classList.add("photo-list");
    this.photoViewEl.classList.add("photo-view");
    this.photoViewEl.style.height = `${window.innerHeight - 110}px`;

    https: this.state = {
      photos: [
        "01.jpg",
        "02.jpeg",
        "03.jpg",
        "04.jpeg",
        "05.jpg",
        "06.jpg",
        "07.jpg",
        "08.jpg",
        "09.jpg",
        "10.jpg",
      ],
      selected: 0,
    };

    createComponent(Header, {
      $target: this.headerEl,
      goBack: () => {},
    });
    this.render();
  }

  render(): void {
    createComponent(ImageList, {
      $target: this.photoListEl,
      initialState: this.state,
      onClick: (id: number) => {
        this.setState({ ...this.state, selected: id }, () => {
          this.render();
        });
      },
    });
    createComponent(ImageView, {
      $target: this.photoViewEl,
      initialState: this.state,
    });
  }
}
