function scope(a,b){
    var c = a++;
    let d = b--;
    return c
    return d
}
console.log(scope(10,20));  //result= 10(var c) only not (let d) because scope of let is under bracket.

/*function scope(a,b){
    var c = a++;
    let d = b--;
    console.log(c);
    console.log(d);
}
scope(10,20);*/  //here we get results for both var c and let d because console.log for let is in bracket.
