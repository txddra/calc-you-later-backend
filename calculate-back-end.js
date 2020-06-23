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

if (operator === '+'){
  return num + num2;
}
else if(operator ==="-"){
  return num - num2;
}
else if(operator==="x") {
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