let arr=[0,1,2,3,1,2,3,4,5,6,7,8]

//some -> Determines whether the specified callback function returns true for any element of an array. 
//const someValue = arr.some((value,index)=>{return value<4})
//console.log(someValue);

//every -> Determines whether all the members of an array satisfy the specified test.
//const everyValue = arr.every((value,index)=>{ return value<9})
//console.log(everyValue);

//find -> Returns the value of the first element in the array where certain condition is true
//const findValue=arr.find((value,index) =>  {if (value<4) {return value}})
//console.log(findValue)

//filter -> Returns the elements of an array that meet the condition specified in a callback function.
//const filterValue=arr.filter((value,index) =>  {if (value<4) {return value}})
//console.log(filterValue)

//find -> Returns the value of the first element in the array where certain condition is true

//forEach -> It is a for loop but in Array version
//arr.forEach(element => console.log(element));

//map -> Calls a defined callback function on each element of an array and returns an array that contain the results
//console.log(arr.map(arr1=>(arr1>6)))

//join -> used to join string at the end of each element in the array
//let arr1=[]
//arr1=arr.join("@ ")
//console.log(arr1);
//console.log(arr)

//Push-> Add element in last index
//arr.push(4)

//unshift-> Add element in first index
//arr.unshift(0)

//Pop -> Remove element from last index
//arr.pop()

//shift-> Remove the first element from array
//arr.shift()

//splice-> Remove element from first parameter number index to second parameter number index
//console.log(arr.splice(1,3))
//console.log(arr);

//slice-> it works same as splice but the only it does is ,it return new array and it didn't remove element
//console.log(arr.slice(1,3))
//console.log(arr);

//reverse-> Reverse the array