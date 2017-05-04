import React, { Component } from 'react';
import CoinForm from '../components/CoinForm'


class Home extends Component {

  constructor(){
    super()
    this.state = {data: []}}

  render() {
    return (
      <div>
        <CoinForm data={this.state.data}/>
      </div>
    );
  }
}

export default Home
