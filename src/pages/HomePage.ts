import Header from "../components/Header";

export default function HomePage({ $app }) {
  this.headerEl = document.createElement("header") as HTMLHeadElement;
  this.mainEl = document.createElement("main") as HTMLElement;
  $app.appendChild(this.headerEl);
  $app.appendChild(this.mainEl);

  this.state = {};

  this.components = {
    header: new Header({
      $target: this.headerEl,
    }),
  };

  this.render = () => {
    this.mainEl.innerHTML = `
      <ul class='flex-container home'>
        <li class='flex-item'><a href="#alarm">알람</a></li>
        <li class='flex-item'><a href="#alarm">메모</a></li>
        <li class='flex-item'><a href="#alarm">사진</a></li>
      </ul>
    `;
  };

  this.render();
}
