import { App, createApp } from "./App";
import { parserAlarm } from "./util";
import "./App.css";

createApp(App, document.querySelector("#app"));

// 앱 최초 실행시 로컬스토리지에 샘플 데이터 넣기
if (!localStorage.getItem("home")) {
  localStorage.setItem(
    "home",
    JSON.stringify([
      ["alarm", "알람"],
      ["memo", "메모"],
      ["photo", "앨범"],
    ])
  );

  const current = new Date().toLocaleString().split(" ");
  localStorage.setItem(
    "alarms",
    JSON.stringify([
      parserAlarm(
        current[3],
        current[4].split(":")[0],
        Math.ceil(Number(current[4].split(":")[1])) > 50
          ? String(Math.floor(Number(current[4].split(":")[1]) * 0.1) * 10)
          : String(Math.ceil(Number(current[4].split(":")[1]) * 0.1) * 10)
      ),
    ])
  );

  const text =
    "샘플 메모입니다. 샘플 메모입니다. 샘플 메모입니다. 샘플 메모입니다. 샘플 메모입니다.";
  localStorage.setItem(
    "memos",
    JSON.stringify([text, `${text}${text}${text}${text}${text}`])
  );

  localStorage.setItem(
    "photos",
    JSON.stringify([
      "01.jpg",
      "02.jpeg",
      "03.jpg",
      "04.jpeg",
      "05.jpg",
      "06.jpg",
      "07.jpg",
      "08.jpg",
      "09.jpg",
      "10.jpg",
    ])
  );
}
