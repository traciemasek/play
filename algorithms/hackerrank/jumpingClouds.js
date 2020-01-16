//https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

function jumpingOnClouds(c) {

  let jumps = 0

  for (let i = 0; i < c.length-1; i++){
    jumps ++
    if (i + 2 < c.length && c[i + 2] === 0){
      i++
    }
  }

  return jumps

}