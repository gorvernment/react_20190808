import React from 'react';

// 속성값, 상탯값
const actions = {
  init: () => ({ value : 0 }),
  increment: (prevState) => ({ value: prevState.value + 1 }),
  decrement: (prevState) => ({ value: prevState.value - 1 }),
}


class Counter extends React.Component {
  state = { value: 0 }; // 상탯값

  // constructor(props) {
  //   super(props);
  //   this.state = { value : 0 };
  // }

  // 모든 event, listener는 arrow형태로 써줘야 한다.
  increment = () => {
    // console.log("clicked");
    // this.state.value += 1; // 불변객체가 아니기 때문에 이렇게 하면 안된다.
    // const { value } = this.state;

    // 아래 코드는 1씩 증가
    // this.setState({ value: this.state.value + 1 })
    // this.setState({ value: this.state.value + 1 })

    // 아래 코든 2씩 증가
    this.setState(preState => ({
      value: preState.value + 1
    }));
    this.setState(preState => ({
      value: preState.value + 1
    }));
  };

  decrement = () => {
    this.setState( preState => ({
          value: preState.value - 1
        })
    );
  }

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
