import { createComponent } from "../components/Component";
import { Page } from "./Page";
import Header from "../components/Header";
import InputBox from "../components/InputBox";
import AccordionList from "../components/AccordionList";

export default class MemoPage extends Page {
  private readonly LOCAL_STORAGE = "memos";
  protected inputBoxEl: HTMLDivElement;
  protected memoListEl: HTMLUListElement;

  constructor($app: HTMLDivElement) {
    super($app);
    this.inputBoxEl = document.createElement("div");
    this.memoListEl = document.createElement("ul");
    this.inputBoxEl.classList.add("hidden", "flex-container");
    this.memoListEl.classList.add("list-wrapper");
    this.mainEl.appendChild(this.inputBoxEl);
    this.mainEl.appendChild(this.memoListEl);

    this.state = {
      memos: JSON.parse(localStorage.getItem(this.LOCAL_STORAGE)),
    };

    this.component = {
      header: createComponent(Header, {
        $target: this.headerEl,
        goBack: () => {},
        addNew: () => {
          this.inputBoxEl.classList.remove("hidden");
          document.getElementById("memo-input").focus();
        },
      }),
      inputBox: createComponent(InputBox, {
        $target: this.inputBoxEl,
        onEnterKeyUp: (value: string) => {
          this.setState({ memos: [...this.state.memos, value] }, () =>
            localStorage.setItem(
              this.LOCAL_STORAGE,
              JSON.stringify(this.state.memos)
            )
          );
          this.inputBoxEl.classList.add("hidden");
        },
      }),
      memoList: createComponent(AccordionList, {
        $target: this.memoListEl,
        initialState: this.state,
        onClick: (id: string) => {
          document.getElementById(id).classList.toggle("accordion");
        },
      }),
    };
  }

  render(): void {
    this.component.memoList.setState(this.state);
  }
}
