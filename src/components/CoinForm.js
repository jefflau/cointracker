import React, { Component } from 'react';

const monolith = {"coins": ["ETH", "BTC"]}

class Input extends Component {
    constructor(props){
      super(props);
      this.state = {value: 'coconut',
                    text: ''};

      this.handleChange = this.handleChange.bind(this);
      this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
    this.setState({value: event.target.value});
    this.props.currencyChoose(this.props.uid, event.target.value)
  }

  handleTextChange(event){
    this.setState({text: event.target.value})
    this.props.addrChoose(this.props.uid, event.target.value)
    console.log(event.target.value)
  }

  handleSubmit(event) {
   alert('Your favorite flavor is: ' + this.state.value);
   event.preventDefault();
 }

  render () {
    return (
      <li >
      <input type="text" placeholder={this.props.pairData.addr}
             value={this.state.text} onChange={this.handleTextChange}/>
      <select value={this.state.value} onChange={this.handleChange}>
      {this.props.coins.map(x => (
        <option value={x}>{x}</option>
      ))}
      </select>
      <span onClick={x => this.props.delete(this.props.pairData.id)}>x</span>
      <br/>
      </li>
    )
  }
}


class Inputs extends Component {

  constructor(){
    super()
    this.state = {
      keyId: 0,
      inputs: [{id: 0, addr: "test", currency: "ETH"}]}
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("hi", prevState);
  }

  updateCurrency(uid, currency){
  return x => {
      if (uid == x.id) {
      x.currency = currency
      return x;
    }
    else{
      return x
    }}}

  currencyChoose(uid, curr){
    this.setState({inputs: this.state.inputs.map(this.updateCurrency(uid, curr))})
  }

  updateAddr(uid, addr){
  return x => {
      if (uid == x.id) {
      x.addr = addr
      return x;
    }
    else{
      return x
    }}}

  addrChoose(uid, addr){
    this.setState({inputs: this.state.inputs.map(this.updateAddr(uid, addr))})
  }

  render() {
    let {coins} = this.props.monolith
    return (
      <div>
      <ul>
      {this.state.inputs.map(x => <Input key={x.id}
                                         uid={x.id}
                                         coins={coins}
                                         pairData={x}
                                         delete={id => this.setState({inputs:
                                           this.state.inputs.filter(x => x.id != id)})}
                                           currencyChoose={this.currencyChoose.bind(this)}
                                           addrChoose={this.addrChoose.bind(this)}
                                         />)}
      </ul>
        <button onClick={() => this.setState({
            keyId: this.state.keyId + 1,
            inputs: [
              ...this.state.inputs, {
                id: this.state.keyId + 1,
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
