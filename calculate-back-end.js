/******************
 * YOUR CODE HERE *
 ******************/


function calculate(num, num2, operator){
  num =Number(num);
  num2 =Number(num2);

// // let notAdd = operator !=="+";
// let notSub = operator !=="-";
// let notMul = operator !=="x";
let notDiv = operator !=="/";
let notMod = operator !=="%";
let add = operator === "+" || operator === "plus" || operator === "added to";
let sub = operator === "-" || operator === "minus" || operator === "subtracted from";
let mul = operator === "x" || operator ==="X" || operator === "times" || operator === "multiplied by"

if (add){
  return num + num2;
}
else if(sub){
  return num - num2;
}
else if(mul) {
  return num * num2;

}
else if(operator === "/"){
  return num / num2;
}
else if(operator === "%"){
  return num % num2 ;

}
else if( operator !=="+"|| operator !=="-"|| operator !=="x"||notDiv||notMod){
    return "Sorry, that's not a mathematical operation!"
}

}



/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof calculate === 'undefined') {
  calculate = undefined;
}


module.exports = calculate;