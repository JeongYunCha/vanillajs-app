import { Component } from "./Component";

interface IArgs {
  $target: HTMLElement;
  onSubmit?: Function;
}
export default class InputTimeBox extends Component {
  protected selectTypeEl: HTMLSelectElement;
  protected selectTimeEl: HTMLSelectElement;
  protected selectMinuteEl: HTMLSelectElement;
  protected buttonEl: HTMLButtonElement;
  protected onSubmit: Function;

  constructor({ $target, onSubmit }: IArgs) {
    super();
    this.onSubmit = onSubmit;
    this.children = document.createElement("span");
    this.children.classList.add("flex-item", "grow");
    this.buttonEl = document.createElement("button");
    this.buttonEl.classList.add("flex-item");
    this.buttonEl.innerText = "저장";

    this.selectTypeEl = document.createElement("select");
    this.selectTimeEl = document.createElement("select");
    this.selectMinuteEl = document.createElement("select");
    this.selectTypeEl.id = "timeType";
    this.selectTimeEl.id = "time";
    this.selectMinuteEl.id = "minute";

    this.children.append(
      this.selectTypeEl,
      this.selectTimeEl,
      "시",
      this.selectMinuteEl,
      "분"
    );
    $target.append(this.children, this.buttonEl);

    this.buttonEl.addEventListener("click", (e: MouseEvent) => {
      e.stopPropagation();
      this.onSubmit(
        this.selectTypeEl.options[this.selectTypeEl.selectedIndex].value,
        this.selectTimeEl.options[this.selectTimeEl.selectedIndex].value,
        this.selectMinuteEl.options[this.selectMinuteEl.selectedIndex].value
      );
    });

    this.render();
  }

  render(): void {
    this.selectTypeEl.innerHTML = `
        <option value="오전">오전</option>
        <option value="오후">오후</option>`;
    this.selectTimeEl.innerHTML = `
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
        <option value="12">12</option>`;
    this.selectMinuteEl.innerHTML = `
        <option value="00">00</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="50">50</option>`;
  }
}
