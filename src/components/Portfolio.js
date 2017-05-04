import React, { Component } from 'react';
import * as API from '../api/api.js'


class Portfolio extends Component {
  constructor(){
    super()
    this.state = {
      portfolioList: []
    }
  }
  componentDidMount(){
    let promises1 = this.props.portfolio.map((item) => {
      console.log(item.currency, item.addr)
      return API[`get${item.currency}Balance`](item.addr)
    })
    let promises2 = this.props.portfolio.map((item) => {
      return API[`getPrice`](item.currency)
    })

    Promise.all(promises1)
      .then(results => {
        return results.map((e, i) => ({...this.props.portfolio[i], balance: e}))
      })
      .then(portfolio => {
        Promise.all(promises2).then(results => {
          this.setState({
            portfolioList: results.map((e, i) => ({...portfolio[i], price: e}))
          })
        })
      })
  }
  render() {
    let { portfolio } = this.props;

    return (
      <div>
        <ul>
          {this.state.portfolioList.map((item)=>
            (
              <li>
                <span>{item.addr}</span>&nbsp;<span>{item.currency}</span>&nbsp;<span>{item.balance ? item.balance : ''}</span>&nbsp;<span>{item.price ? item.price : ''}</span>
              </li>
            )
          )}
        </ul>
        Portfolio
      </div>
    );
  }
}

export default Portfolio
