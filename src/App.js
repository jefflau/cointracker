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
      addr: "test", currency: "ETH"
    },
    {
      addr: "testing", currency: "BTC"
    }
  ]
}

const app = Redax.init(
  initialData,
  () => ReactDOM.render(<Main />, document.getElementById('root'))
)

export default app
