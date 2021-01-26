import { createComponent } from "../components/Component";
import Header from "../components/Header";
import { Page } from "./Page";

export default class PhotoPage extends Page {
  protected photoListEl: HTMLUListElement;
  protected photoViewEl: HTMLDivElement;

  constructor($app: HTMLDivElement) {
    super($app);
    this.photoListEl = document.createElement("ul");
    this.photoListEl.classList.add("photo-list");
    this.mainEl.appendChild(this.photoListEl);
    this.photoViewEl = document.createElement("div");
    this.photoViewEl.classList.add("photo-view");
    this.mainEl.appendChild(this.photoViewEl);
    this.state = {
      photos: [
        "01.jpg",
        "02.gif",
        "03.jpg",
        "04.gif",
        "05.jpg",
        "06.gif",
        "07.gif",
      ],
      selected: 0,
    };

    this.photoListEl.addEventListener("click", (e: MouseEvent) => {
      e.stopPropagation();
      if (e.target["className"] === "thumbnail-img") {
        this.setState({ ...this.state, selected: Number(e.target["id"]) });
      }
    });

    createComponent(Header, {
      $target: this.headerEl,
      goBack: () => {},
    });

    this.render();
  }

  render(): void {
    this.photoListEl.innerHTML = this.state.photos
      .map((photo: string, idx: number) => {
        const imageSrc = require(`../assets/${photo}`).default;
        return `
          <li key=${idx} class="thumbnail-wrapper ${
          this.state.selected === idx ? "selected" : ""
        }" > 
            <div class="thumbnail"> 
              <div class="thumbnail-centered"> 
                <img id="${idx}" src=${String(
          imageSrc
        )} alt="${photo}" class="thumbnail-img"/>
              </div> 
            </div> 
          </li>
        `;
      })
      .join("");
    const selected = this.state.photos[this.state.selected];
    const selectedSrc = require(`../assets/${selected}`).default;

    this.photoViewEl.innerHTML = `
      <img src=${String(selectedSrc)} alt="${selected}"/>
    `;
  }
}
