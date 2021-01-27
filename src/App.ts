import AlarmPage from "./pages/AlarmPage";
import HomePage from "./pages/HomePage";
import MemoPage from "./pages/MemoPage";
import { createPage } from "./pages/Page";
import PhotoPage from "./pages/PhotoPage";
import { getDateTime } from "./util";

interface AppConstructor {
  new ($app: HTMLDivElement): App;
}

export function createApp(cstr: AppConstructor, $app: HTMLDivElement) {
  return new cstr($app);
}

export class App {
  protected rootEl: HTMLDivElement;
  protected alarms: Map<string, string>;

  constructor($app: HTMLDivElement) {
    this.rootEl = $app;
    this.alarms = new Map(JSON.parse(localStorage.getItem("alarms")) || []);
    window.addEventListener("beforeunload", function (event) {
      console.log("I am the 1st one.");
    });
    window.addEventListener("unload", function (event) {
      console.log("I am the 3rd one.");
    });
    setInterval(() => {
      // Header: 날짜와 시간이 표시
      document.querySelector("#clock").innerHTML = getDateTime();
      // Alarm: 시간이 되면 alert 창으로 알람시간을 띄어주고 확인 클릭시 삭제
      const current = `${new Date().toTimeString().slice(0, 6)}00`;
      const message = `${this.alarms.get(current)} \n 알람을 종료하시겠습니까?`;
      if (this.alarms.has(current)) {
        if (confirm(message)) {
          this.alarms.delete(current);
          localStorage.setItem("alarms", JSON.stringify([...this.alarms]));
          this.render();
        }
      }
    }, 1000);
    // hashchange 이벤트로 uri의 hash가 변경하면 발생 감지하여 페이지 라우팅
    window.addEventListener("hashchange", this.render);
    // DOMContentLoaded은 HTML과 script가 로드된 시점에 발생하는 이벤트로 load 이벤트보다 먼저 발생
    window.addEventListener("DOMContentLoaded", this.render);
    // window.addEventListener("resize", this.render);
    this.render();
  }

  render = async () => {
    // 페이지 초기화
    this.rootEl.innerHTML = "";
    // 페이지 라우팅
    const path = location.hash.replace("#", "");
    switch (path) {
      case "alarm":
        createPage(AlarmPage, this.rootEl);
        break;
      case "memo":
        createPage(MemoPage, this.rootEl);
        break;
      case "photo":
        createPage(PhotoPage, this.rootEl);
        break;
      default:
        createPage(HomePage, this.rootEl);
    }
  };
}
