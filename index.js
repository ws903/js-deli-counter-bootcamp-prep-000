function takeANumber(list){
  if (list.length > 0){
    num = list[-1]
    list.push(num+1)
  }
  else{
    list.push(1)
  }
  
 return `Welcome! You are number ${list[-1]} in line.`
}

function currentLine(list){
  if (list.length > 0){
    var state = "The line is currently:"
    
    for (var i=0; i < list.length; i++){
      state += ` ${i+1}. ${list[i]}`
    
      if (i < list.length-1){
        state += ","
      }
    }
  }
  
  else{
    state = "The line is currently empty."
  }
  
  return state
}

function nowServing(list){
  if (list.length > 0){
    num = list[0]
    list.shift()
  
    return `Currently serving ${num}.`
  }
  else{
    return "There is nobody waiting to be served!"
  }
  
}