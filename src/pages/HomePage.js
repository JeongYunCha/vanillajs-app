export default function HomePage({ $app }) {
  this.countEl = document.createElement("div");
  this.countEl.id = "count";
  this.contentEl = document.createElement("div");
  this.contentEl.id = "content";
  $app.appendChild(this.countEl);
  $app.appendChild(this.contentEl);

  this.state = {};

  this.components = {
    // timeCount: new TimeCount({
    //   target: this.countEl,
    //   countdown: () => {},
    // }),
    // scoreCount: new ScoreCount({
    //   target: this.countEl,
    // }),
    // gameView: new GameView({
    //   target: this.contentEl,
    // }),
    // gameInput: new GameInput({
    //   target: this.contentEl,
    //   onEnterKeyPress: (text) => {
    //     // 입력된 단어 확인
    //     document.dispatchEvent(
    //       new CustomEvent("checkWord", {
    //         detail: { isPassed: text === this.state.currentWord.text },
    //       })
    //     );
    //     // 남은 문제 없으면, 게임종료
    //     this.gotoResultPage();
    //   },
    // }),
    // gameButton: new GameButton({
    //   target: this.contentEl,
    //   onClick: async () => this.startGame(),
    // }),
  };

  //   this.setState = (nextData) => {
  //     if (Array.isArray(nextData) && nextData.length > 0) {
  //       // 대기 단어 리스트 저장
  //       this.state.words = nextData;
  //       // 현재 문제 단어 저장
  //       this.state.currentWord = this.state.words.pop();
  //       // 컴포넌트에 현재 문제 단어 전달
  //       this.components.gameView.setState(this.state.currentWord.text);
  //       this.components.timeCount.setState(this.state.currentWord.second);
  //     }
  //   };

  //   this.startGame = async () => {
  //     // 문제 단어 리스트 api 호출 후, 저장
  //     const words = await fetchWords();
  //     this.setState(words);
  //     // 인풋박스 포커스 처리
  //     const inputEl = document.getElementsByClassName("GameInput")[0];
  //     inputEl.disabled = false;
  //     inputEl.focus();
  //     // 버튼명 변경
  //     this.components.gameButton.setState("초기화");
  //     // 점수 초기화
  //     this.components.scoreCount.setState(null);
  //   };
  //   this.gotoResultPage = () => {
  //     if (this.state.words.length < 1) {
  //       document.dispatchEvent(
  //         new CustomEvent("router", {
  //           detail: { path: "result" },
  //         })
  //       );
  //     }
  //   };

  //   document.addEventListener("checkWord", (e) => {
  //     if (e.detail.isPassed) {
  //       // score 값 업데이트
  //       this.components.scoreCount.setState(e.detail.isPassed);
  //       // 평균 답변 시간 업데이트
  //       document.dispatchEvent(
  //         new CustomEvent("avgTime", {
  //           detail: {
  //             spentTime:
  //               this.state.currentWord.second -
  //               this.components.timeCount.getTime(),
  //             score: this.components.scoreCount.getScore(),
  //           },
  //         })
  //       );
  //       // 문제 업데이트
  //       this.setState(this.state.words);
  //     }
  //   });

  //   document.addEventListener("timeout", (e) => {
  //     // 문제 업데이트
  //     this.setState(this.state.words);
  //     // 남은 문제 없으면, 게임종료
  //     this.gotoResultPage();
  //   });
}
