function countingValleys(n, s) {

  //if currentLevel < 0 we are in a valley. if it hits 0 again after, we're out of the valley
  let currentLevel = 0
  let inValley = false
  let valleys = 0
  
  //iterate over every char in string
  for(let i = 0; i<s.length; i++){
    //increase current level if index of string is U or decrease if D
    s[i] === "U" ? currentLevel += 1 : currentLevel -= 1;
   
    //if current level is less than zero, and inValley is false, we have entered a valley
    //setting inValley to true will stop the number of valleys from increasing with each D
    if (currentLevel < 0 && !inValley){
      valleys += 1
      inValley = true
    }
    
    //reset inValley when we reach sea level
    if (currentLevel === 0) {
      inValley = false 
    }
    
    // console.log("s[i] =", i, "current level =", currentLevel, "inValley =", inValley, "valleys =", valleys)
  
  }
  // console.log(valleys)
  return valleys
}



let steps = 12
let string = "UDDDUDUUDDUU"
countingValleys(steps, string)


