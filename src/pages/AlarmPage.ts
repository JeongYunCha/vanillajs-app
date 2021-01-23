import Header from "../components/Header";

export default function AlarmPage({ $app }) {
  this.headerEl = document.createElement("header") as HTMLHeadElement;
  this.mainEl = document.createElement("main") as HTMLElement;
  $app.appendChild(this.headerEl);
  $app.appendChild(this.mainEl);

  const ALARM_LOCAL_STORAGE = "alarms";
  this.state = {
    alarms: localStorage.getItem(ALARM_LOCAL_STORAGE) || ["13:51:50"],
  };

  this.components = {
    header: new Header({
      $target: this.headerEl,
      goBack: () => {},
      addNew: (e: Event) => {
        console.log(e);
      },
    }),
  };

  this.render = () => {
    const children = this.state.alarms
      .map((item) => {
        return `<li class='flex-container'>
                  <span class='flex-item grow'>${item}</span>
                  <button class='flex-item'>삭제</button>
                </li>`;
      })
      .join("");

    this.mainEl.innerHTML = `
      <header></header>
      <ul class="alarm">${children}</ul>
    `;
  };

  this.render();
}
