import React, { Component } from 'react'
import * as API from '../api/api.js'
import app from '../App'


class Portfolio extends Component {
  constructor(){
    super()
    this.state = {
      portfolioList: []
    }
  }

  updatePrices(){
    const db = app.db
    let promises1 = db.get('portfolio').map((item) => {
      //console.log(item.currency, item.addr)
      return API[`get${item.get('currency')}Balance`](item.get('addr'))
    })
    let promises2 = db.get('portfolio').map((item) => {
      return API[`getPrice`](item.get('currency'))
    })

    Promise.all(promises1)
      .then(results => {
        return results.map((e, i) => ({...db.getIn(['portfolio', i]), balance: e}))
      })
      .then(portfolio => {
        Promise.all(promises2).then(results => {
          this.setState({
            portfolioList: results.map((e, i) => ({...db.getIn(['portfolio', i]), price: e}))
          })
        })
      })
  }
  componentDidMount(){
    this.updatePrices()
  }
  componentDidUpdate(){
    this.updatePrices()
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
