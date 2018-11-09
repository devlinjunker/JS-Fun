module.exports = function(propA, propB){
  this.a = propA;
  this.b = propB;
  this.func = function(){
    return propA + 2;
  }
}
