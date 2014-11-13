
// [node, 02-baby-steps, 45, 56, 67]

var sum = 0

for (var i = 2; i < process.argv.length; i++) {
  sum = sum + parseInt(process.argv[i])
}

console.log(sum)

// Official solution :
// var result = 0
//
// for (var i = 2; i < process.argv.length; i++)
//   result += Number(process.argv[i])
//
// console.log(result)
