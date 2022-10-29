const add = function(a,b){
    console.log(a+b);
}

function addandprintmessage(add,message){
    add(10,20);
    console.log(message);
}
addandprintmessage(add,"Hello There");
