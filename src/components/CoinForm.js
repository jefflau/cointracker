import React, { Component } from 'react';

const monolith = {"coins": ["ETH", "BTC"],
                  "inputs": 1}

const Input = (props) => (
  <li >
  <input type="text" placeholder={props.pairData.addr}/>
  <select>
  {props.coins.map(x => (
    <option value={x}>{x}</option>
  )
  )}
  </select>
  <span>x</span>
  <br/>
  </li>
)

class Inputs extends Component {

  constructor(){
    super()
    this.state = {
      keyId: 0,
      inputs: [{id: 0, addr: "test", currency: "ETH"}]}
  }

  render() {
    let {coins} = this.props.monolith
    return (
      <div>
      <ul>
      {this.state.inputs.map(x => <Input key={x.id}
                                         coins={coins}
                                         pairData={x}
                                         />)}
      </ul>
        <button onClick={() => this.setState({
            keyId: this.state.keyId + 1,
            inputs: [
              ...this.state.inputs, {
                keyId: this.state.keyId + 1,
                addr: "test",
                currency: "ETH"
              }]
          })
        }>
        Add pair
        </button>
        <button onClick={() => this.setState({inputs: this.state.inputs})}>
        Remove pair
        </button>
      </div>
    )
  }
}

class CoinForm extends Component {

  render() {
    return (
      <Inputs monolith={monolith}/>
    );
  }
}

export default CoinForm
