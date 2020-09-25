function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair = "*") {
  return function(adj = "special") {
    return `You are ${flair}${adj}${flair}!`
  }
}

const Calculator = {
  let add = function(a, b) {
    return a + b;
  }
 
  let subtract = function(a, b) {
    return a - b;
  }
 
  let multiple = function(a, b) {
    return a * b;
  }
 
  let divide = function(a, b) {
    return a / b;
  }
 
  let add = function(a, b) {
    return a + b;
  }
 