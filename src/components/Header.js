export default function Header({ $app }) {
  this.$target = document.createElement("header");
  this.state = {
    time: "time",
  };

  //   this.$target.addEventListener("submit", (e) => {
  //     e.preventDefault();
  //     const $input = this.$target.querySelector(".todo-input");
  //     onSubmit($input.value);

  //     $input.value = "";
  //   });
  $app.innerHTML = this.$target;
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    this.$target.innerHTML = `
    <button class="back-button">BACK</button>
    <span id="clock">${this.state.time}</span>
    <button class="new-button">NEW</button>
    `;
  };

  this.renderClock = () => {
    document.querySelector("#app").innderText = 123; //new Date().toDateString;
  };

  this.render();
  setInterval(this.renderClock, 1000);
}
