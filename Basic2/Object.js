const mysymbol = Symbol("karan")

const user = {
    name: "karan",
    age: 23,
    city: "gopalganj",
    marks: 99,
    State:"Bihar",
    [mysymbol]:"key1"

}

console.log(user)
// console.log(user.name)
// console.log(user["marks"])
console.log(typeof user.mysymbol)

//free stop all the operation on the object
Object.freeze(user);
user.name="kumar"
console.log(user)