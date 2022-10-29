function ContinueAndBreak(){
    let n = 9;
    for(let i=0;i<=n;i++){
        if(i==5){
            //skip all remaining iterations
            break;
        }
        console.log(i);
    }
    for(let i=0;i<=n;i++){
        if(i==5){
            // skip this iteration
            continue; 
        }
        console.log(i);
    }
}
ContinueAndBreak()