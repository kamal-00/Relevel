//Array Methods:
//let array = [1,2,3,4,5]
//console.log('Initial Array: ', array)
// operations
// 1. add
// 2. access
// 3. delete
// 4. update


// 1. add
// let array = [1,2,3,4,5];
// add an element at the end of the array
// let newEle = 10
// array.push(newEle)
// array[array.length] = newEle
// array.splice(array.length, 0, newEle)

// let array = [1,2,3,4,5];
// add an element in the beginning of the array
// array.splice(0, 0, 10, 40)
// array.unshift(20, 30)
// array[100] = 5
// console.log(array[50])
// console.log('Final Array: ',array)


// 2. access
// let array = [1,2,3,4,5]
// console.log(array[3])
// console.log(array[array.length - 1])


// 3. delete
// let array = [1,2,3,4,5];
// delete the element at the end of the array
// let res = array.pop()
// console.log('Popped element: ', res)
// array.splice(array.length - 1, 1)
// delete an element in the beginning of an array
// array.shift()


// 4. update
// let index = array.length - 1
// array[index] = 10
// array.splice(index, 1, 10)
// array.splice(2, 2, 'hi', 'hey')
// console.log('Final Array: ',array)
for (let i=0; i<array.length; i++){
  if (array[i] == 2){
    console.log('Go to School!')
  }else{
    console.log('We ll see about it !')
  }
}