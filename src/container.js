import React, { Component } from 'react';
import { observer, inject } from "mobx-react";

@inject("changeData")
@observer
class Container extends Component {

    render() {
        console.log('props', this.props.changeData)
        return (<div></div>)
    }
}

export default Container