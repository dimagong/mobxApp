import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { observable, computed, extendObservable } from 'mobx'
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
  }
})

const todos = observable([
  { text: 'Hello' },
  { text: 'Hello React' },
  { text: 'Hello Mobx' }
])
// class UserNickName {

//   constructor() {
//     extendObservable(this, {
//       ferstName: 'Tom',
//       age: 30
//     })
//   }
//   // @observable ferstName = 'Tom';
//   // @observable age = 30;

//   @computed get nickName() {
//     console.log('Generate nickName')
//     return `${this.ferstName}${this.age}`;
//   }
// }

// nickName.increment = function () {
//   this.age++
// }

// nickName.decrement = function () {
//   this.age--
// }

@observer class Counter extends Component {

  // @observable count = 0;
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

// todos.push({ text: 'React Super' })

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
