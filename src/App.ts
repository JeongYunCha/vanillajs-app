import AlarmPage from "./pages/AlarmPage";
import HomePage from "./pages/HomePage";
import MemoPage from "./pages/MemoPage";
import { createPage } from "./pages/Page";
import PhotoPage from "./pages/PhotoPage";
interface IProps {
  $app: HTMLDivElement;
}

export default function App({ $app }: IProps) {
  this.state = {};

  this.setState = (nextState) => {
    this.state = nextState;
  };

  const render = async () => {
    // 페이지 초기화
    $app.innerHTML = "";
    // url의 hash를 취득
    const path = location.hash.replace("#", "");

    switch (path) {
      case "alarm":
        createPage(AlarmPage, $app);
        break;
      case "memo":
        createPage(MemoPage, $app);
        break;
      case "photo":
        createPage(PhotoPage, $app);
        break;
      default:
        createPage(HomePage, $app);
    }
  };

  // 네비게이션을 클릭하면 uri의 hash가 변경된다. 주소창의 uri가 변경되므로 history 관리가 가능하다.
  // 이때 uri의 hash만 변경되면 서버로 요청을 수행하지 않는다.
  // 따라서 uri의 hash가 변경하면 발생하는 이벤트인 hashchange 이벤트를 사용하여 hash의 변경을 감지하여 필요한 AJAX 요청을 수행한다.
  // hash 방식의 단점은 uri에 불필요한 #이 들어간다는 것이다.
  window.addEventListener("hashchange", render);

  // DOMContentLoaded은 HTML과 script가 로드된 시점에 발생하는 이벤트로 load 이벤트보다 먼저 발생한다. (IE 9 이상 지원)
  // 새로고침이 클릭되었을 때, 웹페이지가 처음 로딩되었을 때, 현 페이지(예를 들어 loclahost:5003/#service)를 요청하므로
  // index.html이 다시 로드되고 DOMContentLoaded 이벤트가 발생하여 render가 호출된다.
  window.addEventListener("DOMContentLoaded", render);
}
