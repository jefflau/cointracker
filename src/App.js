import React from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable'
import Main from './Main';
import './index.css';
import Redax from './lib';

var initialData = {
  coins: ["ETH", "BTC"],
  addresses: [
    {
      addr: "", currency: "ETH"
    }
  ],
  portfolio: [
    {
      addr: '13vHWR3iLsHeYwT42RnuKYNBoVPrKKZgRv',
      currency: 'BTC'
    },
    {
      addr: '0xb20b9468a3368c876fe49def64b64cbdfca1252c',
      currency: 'ETH'
    }
  ]
}

const app = new Redax(
  Immutable.fromJS(initialData),
  () => ReactDOM.render(<Main />, document.getElementById('root'))
)

export default app
