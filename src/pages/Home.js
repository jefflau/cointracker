import React, { Component } from 'react';
import CoinForm from '../components/CoinForm'
import Portfolio from '../components/Portfolio'

var mockData = [
  {
    addr: '13vHWR3iLsHeYwT42RnuKYNBoVPrKKZgRv',
    currency: 'BTC'
  },
  {
    addr: '0xb20b9468a3368c876fe49def64b64cbdfca1252c',
    currency: 'ETH'
  }
]

class Home extends Component {

  constructor(){
    super()
    this.state = {
      portfolio: mockData
    }
  }

  render() {
    return (
      <div>
        <Portfolio portfolio={this.state.portfolio}/>
        <CoinForm />
      </div>
    );
  }
}

export default Home
