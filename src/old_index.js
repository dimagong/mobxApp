import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';

import { observable, computed, configure, action } from 'mobx'
import { observer } from 'mobx-react'

const nickName = observable({
    ferstName: 'Tom',
    age: 30,
    get nickName() {
        console.log('Generate nickName')
        return `${this.ferstName}${this.age}`
    },
    increment() {
        this.age++
    },
    decrement() {
        this.age--
    },
},
    {
        increment: action('Plus one'),
        decrement: action('Minus one'),
    },
    {
        name: "nickNameObservable"
    });

const todos = observable([
    { text: 'Hello' },
    { text: 'Hello React' },
    { text: 'Hello Mobx' }
])


@observer class Counter extends Component {

    hendleIncrement = () => { this.props.store.increment() }
    hendleDecrement = () => { this.props.store.decrement() }

    render() {
        return (
            <div className="App" >
                <h1>{this.props.store.nickName}</h1>
                <h1>{this.props.store.age}</h1>
                <button onClick={this.hendleIncrement}>+1</button>
                <button onClick={this.hendleDecrement}>-1</button>

                <ul>
                    {todos.map(({ text }) => {
                        return <li key={text}>{text}</li>
                    })}
                </ul>
            </div>
        );
    }
}

ReactDOM.render(
    <React.StrictMode>
        <Counter store={nickName} />
    </React.StrictMode>,
    document.getElementById('root')
);