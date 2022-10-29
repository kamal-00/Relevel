

const add = function(){
        var x = 10; // when add is called.
        console.log(x); // 10
        return function add2(){
            var y = 20;
            console.log(x+y);
        }
    }
    
    const result = add();
    // x will be destroyed.
    const result2=result();
    console.log(result2);
    
    //result();