import { createComponent } from "../components/Component";
import Header from "../components/Header";
import { Page } from "./Page";

export default class AlarmPage extends Page {
  private readonly LOCAL_STORAGE = "alarms";
  protected registerEl: HTMLDivElement;
  protected resultListEl: HTMLUListElement;

  constructor($app: HTMLDivElement) {
    super($app);
    this.registerEl = document.createElement("div");
    this.resultListEl = document.createElement("ul");
    this.registerEl.classList.add("hidden", "flex-container", "alarm");
    this.resultListEl.classList.add("list-wrapper");
    this.mainEl.appendChild(this.registerEl);
    this.mainEl.appendChild(this.resultListEl);

    this.state = {
      alarms: JSON.parse(localStorage.getItem(this.LOCAL_STORAGE)) || [],
    };

    this.mainEl.addEventListener("click", (e: MouseEvent) => {
      e.stopPropagation();

      if (e.target["innerText"] === "저장") {
        const type = document.getElementById("timeType") as HTMLSelectElement;
        const time = document.getElementById("time") as HTMLSelectElement;
        const minute = document.getElementById("minute") as HTMLSelectElement;
        this.setState(
          {
            alarms: [
              ...this.state.alarms,
              `${type.options[type.selectedIndex].value} ${
                time.options[time.selectedIndex].value
              }시 ${minute.options[minute.selectedIndex].value}분`,
            ],
          },
          () =>
            localStorage.setItem(
              this.LOCAL_STORAGE,
              JSON.stringify(this.state.alarms)
            )
        );
        this.registerEl.classList.add("hidden");
      }

      if (e.target["innerText"] === "삭제") {
        this.setState(
          {
            alarms: this.state.alarms.filter(
              (item: string, idx: number) => idx !== Number(e.target["id"])
            ),
          },
          () =>
            localStorage.setItem(
              this.LOCAL_STORAGE,
              JSON.stringify(this.state.alarms)
            )
        );
      }
    });

    createComponent(Header, {
      $target: this.headerEl,
      goBack: () => {},
      addNew: () => {
        this.registerEl.classList.remove("hidden");
      },
    });

    this.render();
  }

  render(): void {
    this.registerEl.innerHTML = `
      <span class='flex-item grow'>
        <select id="timeType">
          <option value="오전">오전</option>
          <option value="오후">오후</option>
        </select>
        <select id="time">
          <option value="01">01</option>
          <option value="02">02</option>
          <option value="03">03</option>
          <option value="04">04</option>
          <option value="05">05</option>
          <option value="06">06</option>
          <option value="07">07</option>
          <option value="08">08</option>
          <option value="09">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select> 시
        <select id="minute">
          <option value="00">00</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </select> 분
      </span>
      <button class='flex-item'>저장</button>
    `;
    this.resultListEl.innerHTML = this.state.alarms
      .map((item: string, idx: number) => {
        return `<li class='flex-container'>
                  <span class='flex-item grow'>${item}</span>
                  <button id=${idx} class='flex-item'>삭제</button>
                </li>`;
      })
      .join("");
  }
}
