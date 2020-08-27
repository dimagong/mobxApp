import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "mobx-react";
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import Container from './container'

import { observable, computed, configure, action, decorate } from 'mobx'
import { observer } from 'mobx-react'

configure({ enforceActions: 'observed' });

// const item = { name: 'JACK', sp: 12 }

const changeData = observable({
  data: [
    { name: 'JACK', sp: 12 },
    { name: 'MAX', sp: 10 },
    { name: 'LEO', sp: 8 }
  ],
  dataInputSearch: '',
  clearData() {
    this.data = []
  },
  addData() {
    let new_name = prompt('Please, enter name', 'NAME');
    let new_sp = prompt('Please, enter sp', 'SP');
    this.data.push({ name: new_name, sp: +new_sp })
  },
  searchData(el) {
    this.dataInputSearch = el
  },
  upData(el) {
    this.data = [el]
  },
},

  {
    clearData: action('Clear'),
    addData: action('addData'),
    searchData: action('searchData'),
    upData: action('upData'),
  },
)

ReactDOM.render(
  <React.StrictMode>
    <Provider changeData={changeData}>
      <App />
      <Container />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
