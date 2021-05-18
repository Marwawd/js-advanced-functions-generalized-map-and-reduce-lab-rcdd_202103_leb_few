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




function sayHello(name="") {
  console.log(`Hello${name}`)
}
 
let sayHola = function(name="") {
  console.log(`Hola${name}`)
}
 
functionUsingCallback(sayHello, sayHola, function(name="") {
  console.log(`Ni Hao${name}`)
}, " Gary")
 
function functionUsingCallback(en, es, zh, name){
  en(name)
  es(name)
  zh(name)
}
