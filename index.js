// code your solution here
function saturdayFun(activity='roller-skate'){
    return `This Saturday, I want to ${activity}!`
}
saturdayFun();

function mondayWork(mondayActivity='go to the office'){
    return `This Monday, I will ${mondayActivity}.`
}
mondayWork();

function wrapAdjective(result = '*'){
    return function(emphatic='a hard worker'){
       let message = `You are`;
       return `${message} ${result}${emphatic}${result}!`
    }
}