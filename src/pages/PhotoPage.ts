import { createComponent } from "../components/Component";
import Header from "../components/Header";
import { Page } from "./Page";
import ImageList from "../components/ImageList";
import ImageView from "../components/ImageView";

export default class PhotoPage extends Page {
  private readonly LOCAL_STORAGE = "photos";
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

    this.state = {
      photos: JSON.parse(localStorage.getItem(this.LOCAL_STORAGE)),
      selected: 0,
    };

    this.component = {
      header: createComponent(Header, {
        $target: this.headerEl,
        goBack: () => {},
      }),
      imageList: createComponent(ImageList, {
        $target: this.photoListEl,
        initialState: this.state,
        onClick: (id: number) => {
          this.setState({ ...this.state, selected: id }, () => {
            this.render();
          });
        },
      }),
      imageView: createComponent(ImageView, {
        $target: this.photoViewEl,
        initialState: this.state,
      }),
    };
  }

  render(): void {
    this.component.imageList.setState(this.state);
    this.component.imageView.setState(this.state);
  }
}
