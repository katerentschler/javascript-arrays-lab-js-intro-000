// Add your functions and code here
var kittens = [
  'Milo',
  'Otis',
  'Garfield'
];

var Arrays = [
  'Milo',
  'Otis',
  'Garfield'
];

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
  kittens=kittens.splice(3, 0, name);
  return kittens;
}

function prependKitten(name){
  kittens=[name, ...kittens];
  return kittens;
}

function removeLastKitten(){
  kittens = kittens.slice(0, kittens.length-1);
  return kittens;
}

function removeFirstKitten(){
  kittens=kittens.slice(0);
  return kittens;
}
