function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(work = 'go to the office') {
    return `This Monday, I will ${work}.`
}

function wrapAdjective(adjective = "*") {
    return function (param = "special") {
        return `You are ${adjective}${param}${adjective}!`
    }
}