import React from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';
import refresh from '../index';
import app from '../App';

var address = Immutable.fromJS({addr: "test", currency: "ETH"})


const input = (props, idx) =>
  <li>
     <input type="text"
            placeholder="Enter address here"
            value={props.get('addr')}
            onChange={(e) => {
              app.update(app.db.setIn(['addresses', idx, 'addr'], e.target.value))
            }}/>

     <select value={props.get('currency')}
             onChange={
               (e) => {
                 app.update(app.db.setIn(['addresses', idx, 'currency'], e.target.value))
               }
             }>
           {app.db.get('coins').map(x => <option value={x}>{x}</option>)}
     </select>

     <span onClick={() => {
         app.update(app.db.updateIn(['addresses'], (x) => x.delete(idx)))
       }
     }>X</span>
  </li>

const Coinform = () => (
  <div>
      <ul>
          {app.db.get('addresses').map(input)}
      </ul>
      <button onClick={() => {
        app.update(app.db.updateIn(['addresses'], (x) => x.push(address)));
      }}>Add another address</button>

      <button onClick={() => {
        console.log('sdfdsfsdfdsf', app.db.get('portfolio'))
        //console.log("hi there", app.db.update('portfolio').concat([0, 1]).toJS())
        app.update(
          app.db.updateIn(['portfolio'], (x) => x.concat(app.db.get('addresses')))
                .setIn(['addresses'], Immutable.fromJS([address]))
        );
      }}>Submit Addresses</button>
  </div>
)


export default Coinform
