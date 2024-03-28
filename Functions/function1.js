// function

function sumoftwo (num1,num2){
    // console.log(num1+num2)
    return num1+num2
}
// console.log(sumoftwo(55,5))
const result = sumoftwo(55,5)
// console.log(result)

//--------------------------------------------------

function  loginmssg(username){
    if(username === undefined){
        console.log("invalid")
        return
    }
    return `${username} just logged in:`
}

// console.log(loginmssg())

//--------------------------------------------------
function sumcard(...num1){
    return num1
}

console.log(sumcard(12,34,56))

//----------------------------------------------

const object={
    username:'karan',
    age:34
}

function functionObject(anyobject){
    console.log(`user is ${anyobject.username} and age is ${anyobject.age}`)
}

functionObject(object)