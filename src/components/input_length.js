import React, { Component } from 'react';

class InputLength extends Component {
    state = {
        current: ''
    };

    onChange = (e) => {
        const current = e.target.value;
        this.setState( { current });
    };

    render() {
        const { current } = this.state;
        return (
            <div>
                <input type="text"
                        onChange={this.onChange} /><br />
                현재 글자수 : { current.length }
            </div>
        )
    }
}

export const input_length = () => {
    return <div>함수형 컴포넌트</div>
}

export default InputLength;