import React from 'react';

// 속성값, 상탯값
const actions = {
    init: () => ({ value : 0 }),
    increment: step => (prevState) => ({ value: prevState.value + step }),
    decrement: step => (prevState) => ({ value: prevState.value - step }),
};

class Counter extends React.Component {
    state = actions.init();   // 상탯값

    // constructor(props) {
    //   super(props);
    //   this.state = { value : 0 };
    // }

    // 모든 event, listener는 arrow형태로 써줘야 한다.
    increment = () => this.setState(actions.increment(20));
    decrement = () => this.setState(actions.decrement(20));

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

export default Counter;     // 외부에셔 import 하기 위해 적어줘야 함