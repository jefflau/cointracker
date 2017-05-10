import Immutable from 'immutable'
var Redax = {}

Redax.init = function(data, render){
  this.db = Immutable.fromJS(data)
  this.render = render;
  return this;
}

Redax.update = (newData) => {
  this.db = newData
  console.log('redax db', this.db.toJS())
  this.render()
}

export default Redax

export { Redax.update }
