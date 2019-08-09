import React from 'react';

// 속성값, 상탯값
const actions = {
  init: () => ({ value : 0 }),
  increment: (prevState) => ({ value: prevState.value + 1 }),
  decrement: (prevState) => ({ value: prevState.value - 1 }),
};


class Counter extends React.Component {
  state = actions.init();   // 상탯값

  // constructor(props) {
  //   super(props);
  //   this.state = { value : 0 };
  // }

  // 모든 event, listener는 arrow형태로 써줘야 한다.
  increment = () => this.setState(actions.increment);
  decrement = () => this.setState(actions.decrement);

  render() {
    const { value } = this.state;
    return (
        <div>
          Counter: {value}
          <button onClick={this.increment}>증가</button>
          <button onClick={this.decrement}>감소</button>
        </div>
    );
  }
}

class App extends React.Component {
  render() {
    // const message = this.props.message;
    const { message } = this.props;
    return (
      // render는 하나만 존재해야 되기 때문에 <> 또는  <div>로 감싸준다.
      <>
        <h1>Hello, {message}</h1>
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
