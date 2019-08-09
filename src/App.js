import React from 'react';
import Counter from "./components/counter";
import TodoList from "./components/todo_list";

class App extends React.Component {
  render() {
    // const message = this.props.message;
    const { message } = this.props;
    return (
      // render는 하나만 존재해야 되기 때문에 <> 또는  <div>로 감싸준다.
      <>
        <TodoList />
        <h1>Hello, {message}</h1>
        <Counter />
        <Counter />
        <Counter />
      </>
    );
  }
}

// function App() {
//   return (
//       <h1>Hello, React</h1>
//   );
// }

export default App;
