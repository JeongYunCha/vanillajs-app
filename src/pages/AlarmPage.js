import Header from "../components/Header";

export default function AlarmPage({ $app }) {
  const ALARM_LOCAL_STORAGE = "alarms";

  this.state = {
    alarms: localStorage.getItem(ALARM_LOCAL_STORAGE) || [],
  };

  //   const onSelectUser = async (selectedUsername) => {
  //     this.setState({
  //       ...this.state,
  //       selectedUsername,
  //       isLoading: true,
  //     });

  //     const todos = await fetchTodos(this.state.selectedUsername);

  //     this.setState({
  //       ...this.state,
  //       todos,
  //       isLoading: false,
  //     });
  //   };

  // const initialize = async () => {
  //   this.setState({
  //     ...this.state,
  //     isLoading: true,
  //   });
  //   // const users = await fetchUsers();
  //   // const todos = await fetchTodos(this.state.selectedUsername);

  //   // this.setState({
  //   //   ...this.state,
  //   //   todos,
  //   //   users,
  //   //   isLoading: false,
  //   // });
  // };

  //   const users = new Users({
  //     $app,
  //     users: this.state.users,
  //     onClick: (selectedUsername) => {
  //       onSelectUser(selectedUsername);
  //     },
  //   });

  // const $content = document.createElement("div");
  // $content.className = "content";
  // $app.appendChild($content);

  //   const loading = new Loading({
  //     $app: $content,
  //     initialState: { isLoading: false },
  //   });

  const header = new Header({
    $app: $app,
    // onSubmit: async (todoText) => {
    //   if (todoText.length > 0) {
    //     this.setState({
    //       ...this.state,
    //       todos: [
    //         ...this.state.todos,
    //         {
    //           content: todoText,
    //           isCompleted: false,
    //         },
    //       ],
    //       isLoading: true,
    //     });
    //     // 데이터 추가하기
    //     await createTodo(this.state.selectedUsername, todoText);

    //     // 데이터 추가 후 서버에서 목록 다시 불러서 다시 그리기
    //     const updatedTodos = await fetchTodos(this.state.selectedUsername);
    //     this.setState({
    //       ...this.state,
    //       isLoading: false,
    //       todos: updatedTodos,
    //     });
    //   }
    // },
  });

  //   const todoList = new TodoList({
  //     $app: $content,
  //     initialState: {
  //       isLoading: false,
  //       todos: [],
  //     },
  //     onClick: async function (id) {
  //       await toggleTodo(this.state.selectedUsername, id);
  //       await initialize();
  //     },
  //     onRemove: async function (id) {
  //       await removeTodo(this.state.selectedUsername, id);
  //       await initialize();
  //     },
  //   });

  //   this.setState = (nextState) => {
  //     this.state = nextState;

  //     loading.setState({
  //       isLoading: this.state.isLoading,
  //     });

  //     users.setState({
  //       users: this.state.users,
  //     });

  //     todoList.setState({
  //       isLoading: this.state.isLoading,
  //       todos: this.state.todos,
  //       selectedUsername: this.state.selectedUsername,
  //     });

  //     todoInput.setState({ isLoading: this.state.isLoading });
  //   };

  // initialize();
}