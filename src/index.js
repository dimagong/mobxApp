import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { observable } from 'mobx'
import { observer } from 'mobx-react'

@observer class Counter extends Component {

  @observable count = 0;
  hendleIncrement = () => { this.count++ }

  render() {
    return (
      <div className="App" >
        <h1>{this.count}</h1>
        <button>+1</button>
        <button>-1</button>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
