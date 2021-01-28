import { createComponent } from "../components/Component";
import { Page } from "./Page";
import Header from "../components/Header";
import DraggableList from "../components/DraggableLIst";

export default class HomePage extends Page {
  private readonly LOCAL_STORAGE = "home";
  protected appListEl: HTMLUListElement;

  constructor($app: HTMLDivElement) {
    super($app);
    this.state = {
      home: JSON.parse(localStorage.getItem(this.LOCAL_STORAGE)),
    };

    this.appListEl = document.createElement("ul");
    this.appListEl.classList.add("flex-container", "home");
    this.mainEl.appendChild(this.appListEl);

    this.component = {
      header: createComponent(Header, {
        $target: this.headerEl,
      }),
      appList: createComponent(DraggableList, {
        $target: this.appListEl,
        initialState: this.state,
        onChange: (apps: Array<string[]>) => {
          this.setState({ home: apps }, () =>
            localStorage.setItem(
              this.LOCAL_STORAGE,
              JSON.stringify(this.state.home)
            )
          );
        },
      }),
    };
  }

  render(): void {
    this.component.appList.setState(this.state);
  }
}
