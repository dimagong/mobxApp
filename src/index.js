import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';

import { observable, computed, configure, action } from 'mobx'
import { observer } from 'mobx-react'

configure({ enforceActions: 'observed' });


const changeData = observable({
  data: [
    { name: 'JACK', sp: 12 },
    { name: 'MAX', sp: 10 },
    { name: 'LEO', sp: 8 }
  ],
  clearData() {
    this.data = [{ name: 'NONE', sp: 0 }]
  },
  addData() {
    let new_name = prompt('Please, enter name', 'NAME');
    let new_sp = prompt('Please, enter sp', 'SP');
    this.data.push({ name: new_name, sp: +new_sp })
  },
},
  {
    clearData: action('Clear'),
    addData: action('addData')
  },
)

ReactDOM.render(
  <React.StrictMode>
    <App changeData={changeData} />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
