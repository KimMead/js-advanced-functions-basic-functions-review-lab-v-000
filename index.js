// Your code here
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = '*'){
    let char = flair
    return function (noun = 'special'){
        return `You are ${char}${noun}${char}!`
    }
}

function actionApplyer(starting_int, function_array){
  let int = starting_int;
  function_array.forEach(func => {
    int = func(int)
  });
  return int
}
