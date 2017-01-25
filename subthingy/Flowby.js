var _         = require("lodash");

var Flowby = function(horsepower){
  this.horsepower = horsepower || 100;
};

Flowby.prototype.activate = function(){
  console.log("activated!");
}

Flowby.prototype.toString = function(){
  return "flowby " + this.horsepower + "hp";
}

module.exports = Flowby;