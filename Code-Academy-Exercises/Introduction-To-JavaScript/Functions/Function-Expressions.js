const plantNeedsWater = function(day){
  if (day === 'Wednesday'){
    return true;
  } else
    {
      return false;
    }
};

console.log(plantNeedsWater('Tuesday'));

/* 
In function expression, we use the function keyword but omit the name. 
It will be stored in a variable in order to refer to it. 
*/