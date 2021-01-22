import AlarmPage from "./pages/AlarmPage";
import HomePage from "./pages/HomePage";

export default function App({ $app }) {
  this.state = {
    alarms: [],
    memos: [],
  };

  this.setState = (nextState) => {
    this.state = nextState;
  };

  // 평균 시간 업데이트
  document.addEventListener("avgTime", (e) => {
    this.state.score = e.detail.score;
    this.state.spentTime += e.detail.spentTime;
  });
  // 페이지 이동
  document.addEventListener("router", (e) => {
    this.router.navigate(e.detail.path);
  });

  (function () {
    const render = async (path) => {
      $app.innerHTML = "";

      switch (path) {
        case "alarm":
          const alarm = new AlarmPage({
            $app,
            // users: this.state.users,
            // onClick: (selectedUsername) => {
            //   onSelectUser(selectedUsername);
            // },
          });
          alarm.setState({
            // users: this.state.users,
          });
          break;
        case "memo":
          const memo = new HomePage({
            $app,
          });
          memo.setState({});
          break;
        case "photo":
          const photo = new HomePage({
            $app,
          });
          photo.setState({});
          break;
        default:
          const home = new HomePage({
            $app,
          });
        // home.setState({});
      }
    };

    // popstate 이벤트는 history entry가 변경되면 발생한다.
    // PJAX 방식은 hash를 사용하지 않으므로 hashchange 이벤트를 사용할 수 없다.
    // popstate 이벤트는 pushState에 의해 발생하지 않는다.
    // 이전페이지 / 다음페이지 button 또는 history.back() / history.go(n)에 의해 발생한다.
    window.addEventListener("popstate", (e) => {
      // e.state는 pushState 메서드의 첫번째 인수
      console.log("[popstate]", e.state);
      // 이전페이지 / 다음페이지 button이 클릭되면 render를 호출
      render(e.state.path);
    });
    // 웹페이지가 처음 로딩되었을 때
    render("/");

    /**
    // 네비게이션을 클릭하면 주소창의 url이 변경되므로 HTTP 요청이 서버로 전송된다.
    // preventDefault를 사용하여 이를 방지하고 history 관리를 위한 처리를 실시한다.
    navigation.addEventListener("click", (e) => {
      if (!e.target.matches("#navigation > li > a")) return;
      e.preventDefault();
      // 이동 페이지
      const path = e.target.getAttribute("href");

      // 주소창의 url은 변경되지만 HTTP 요청이 서버로 전송되지는 않는다.
      history.pushState({ path }, null, path);
      // path에 의한 AJAX 요청
      render(path);
    });
 */
  })();
}
