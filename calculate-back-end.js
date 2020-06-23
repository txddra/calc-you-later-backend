/******************
 * YOUR CODE HERE *
 ******************/
function calculate(num, num2, operator){
  num =Number(num)
  num2=Number(num2)

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
}



/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof calculate === 'undefined') {
  calculate = undefined;
}


module.exports = calculate;