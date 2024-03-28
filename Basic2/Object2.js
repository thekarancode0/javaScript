  //Object.assign() -------> copes all enumerable own properties from one or more source objects ot  target object;

  const obj1 ={1:'karan', 2:'ankit'}
  const obj2 = { 3:'adarsh', 4:'ayan'}
  const obj3 = Object.assign(obj1,obj2)
  console.log(obj3)


  //to access the keys only or values only
  console.log(Object.keys(obj3))
  console.log(Object.values(obj3))


  //Creating an array object

//   const myarray =[
//     "userdetail"={
//         firstname:'karan',
//         lastname:'kumar'
//     }
//   ]