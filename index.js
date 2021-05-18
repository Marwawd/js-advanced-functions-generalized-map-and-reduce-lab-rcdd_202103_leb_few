// Add your functions here

function mapToNegativize(array){return array.map(x => x * (-1));}
function mapToNoChange(array){return array.map(x => x );}
function mapToDouble(array){return array.map(x => x * 2);}
function mapToSquare(array){return array.map(x => x*x);}
function map( mapToNegativize,
mapToNoChange,
mapToDouble,
mapToSquare,array){
mapToNegativize(array)
mapToNoChange(array)
mapToDouble(array)
mapToSquare(array)
  }
// function map(src, cb) {
//   let r = []
//
//   for (let i = 0; i < src.length; i++) {
//     let theElement = src[i]
//     r.push(cb(theElement))
//   }
//
//   return r;
// }
//
// function reduce(src, cb, starting){
//   let r = (!!starting) ? starting : src[0]
//   let i = (!!starting) ? 0 : 1
//
//   for (; i < src.length; i++) {
//     r = cb(src[i], r)
//   }
//
//   return r;
// }
//functionUsingCallback(mapToNegativize,[1, 2, 3, -9]);




// function sayHello(name="") {
//   console.log(`Hello${name}`)
// }
//
// let sayHola = function(name="") {
//   console.log(`Hola${name}`)
// }
//
// functionUsingCallback(sayHello, sayHola, function(name="") {
//   console.log(`Ni Hao${name}`)
// }, " Gary")
//
// function functionUsingCallback(en, es, zh, name){
//   en(name)
//   es(name)
//   zh(name)
// }
