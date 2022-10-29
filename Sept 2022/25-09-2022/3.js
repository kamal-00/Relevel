/*let n = parseInt(readline());
	while(n--)
   {
      let arr = [];
	arr = readline().split(" ");
	var a = arr[0];
	var b = arr[1];
	var c = arr[2];
      var l;
   }*/

   function secondLargest(array){
    let sorted = array.sort((a,b)=>a-b);
    result = array[array.length-2]; 
    console.log(result);
   }
   let array = [12,8,6];
   secondLargest(array);
 