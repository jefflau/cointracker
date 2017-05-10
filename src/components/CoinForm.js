import React from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';
import refresh from '../index';
import app from '../app';
import { update } from '../lib'

var address = Immutable.fromJS({addr: "test", currency: "ETH"})


const input = (props, idx) =>
    <li>
       <input type="text"
              placeholder="Enter address here"
              value={props.get('addr')}
              onChange={(e) => {
                update(app.db.setIn(['addresses', idx, 'addr'], e.target.value))
              }}/>

       <select value={props.get('currency')}
               onChange={
                 (e) => {
                   update(app.db.setIn(['addresses', idx, 'currency'], e.target.value))
                 }
               }>
             {app.db.get('coins').map(x => <option value={x}>{x}</option>)}
       </select>

       <span onClick={() => {
           update(app.db.updateIn(['addresses'], (x) => x.delete(idx)))
         }
       }>X</span>
    </li>

const Coinform = () =>{
  console.log('COINFORM', app.db.toJS())
  return <div>
      <ul>
          {app.db.get('addresses').map(input)}
      </ul>
      <button onClick={() => {
        update(app.db.updateIn(['addresses'], (x) => x.push(address)));
      }}>Grow a pair</button>
  </div>
}


export default Coinform
