// Add your functions here
/*
function mapToNegativize(array){return array.map(x => x * (-1));}
function mapToNoChange(array){return array.map(x => x );}
function mapToDouble(array){return array.map(x => x * 2);}
function mapToSquare(array){return array.map(x => x*x);}
function functionUsingCallback(en,array){
  en(array)
  }
*/
//functionUsingCallback(mapToNegativize,[1, 2, 3, -9]);

function map(a,f){
 function(a){ return a * (-1) },
 function(a){ return a  },
 function(a){ return a * 2 },
 function(a){ return a * a }
 }
map([1, 2, 3, -9], function(a){ return a * a });
