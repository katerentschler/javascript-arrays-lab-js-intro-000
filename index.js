// Add your functions and code here
var kittens = [
  'Milo',
  'Otis',
  'Garfield'
];

/*var Arrays = [
  'Milo',
  'Otis',
  'Garfield'
];*/

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}

function appendKitten(name){
  //there is a testing here...ot fibal correct answer
  //var kits = [...kittens, name];
  function kittah (){}
  kittens.splice(3, 0, name);
}
kittah();
  return kittens;
}

/*
function removeLastKitten(){
  var thisKitten = kittens.slice(0, kittens.length-1);
  return kittens;
}

function removeFirstKitten(){
  kitten=kittens.slice(0);
  return kittens;
}*/
