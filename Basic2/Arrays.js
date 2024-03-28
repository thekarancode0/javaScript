/* arrays aren't primitive
resizable 
container a mix of same or different types of data
not associative arrays
*/


// let arr = [1,2,3,4,5]
// console.log(arr)
// console.log(arr[0])
// console.log(arr[4])

// const arr2=['karan']
// arr2.push("kumar","gopalganj")
// console.log(arr2)
// const city =['gpj','nyc','abc','xyz']
// const city2 =['aa','ab','cc','dd','edf','eff','eee']
// console.log(city)
// console.log(city.at(2))
// console.log(city.concat(city2))

// const deeparray =[1,2,3,
// [4,5,6,] , 55,6,[67,4, [7,7]]]
// console.log(deeparray.flat(1))

const city = []
// let newarr= (Array.from('karan'))
// city.push(newarr)
// console.log(city)

const marks = [23,43,554,2,6,1,7,99,0]
// console.log(marks)
// console.log(marks.sort())

console.log("Slice: " ,marks.slice(0,4))
console.log("Original Array: ", marks)
console.log("splice: ", marks.splice(0,4))
console.log("Original array: ", marks)