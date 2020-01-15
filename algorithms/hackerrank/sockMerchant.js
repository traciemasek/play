function sockMerchant(n, ar) {
  let hashMap = {}
  let pairs = 0

  if (n < 2) return 0

  //create hash map with total for each color
  ar.forEach(color => {
      hashMap.hasOwnProperty(color) ? hashMap[color] += 1 : hashMap[color] = 1
  })

  //get values of hashMap obj keys and iterate over each of them to see if they are divisible by 2 and Math.floor to round to nearest whole integer. Add that to pairs
  let values = Object.values(hashMap)
  values.forEach(colorTotal =>{
    if(colorTotal >= 2) {
      pairs += Math.floor(colorTotal / 2)
    }
  })

  console.log(pairs)

  return pairs
}

const n = 10
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20, 20]
sockMerchant(n, ar)