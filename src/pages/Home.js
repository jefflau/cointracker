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

  componentDidUpdate(prevProps, prevState) {
    console.log("Home Component", this.state);
  }

  updatePortfolio(data){
      this.setState({portfolio: [...this.state.portfolio, ...data] })
      }

  render() {
    return (
      <div>
        <Portfolio portfolio={this.state.portfolio}/>
        <CoinForm
        data={this.state.portfolio}
        updatePortfolio={this.updatePortfolio.bind(this)}
        />
      </div>
    );
  }
}

export default Home
