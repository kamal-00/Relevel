function bubbleSort(arr,l){
    for(let i=0; i<l; i++){
        let isSwapped = false;
        for(let j=0; j<arr.length-1-i; j++){
            if(arr[j].salary>arr[j+1].salary){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                isSwapped = true;
            }
        }
        if(isSwapped == false) break;
    }
    console.log(arr[arr.length-l]);
}
let arr = [{'name':"ram",'salary':100000},{'name':"ramesh",'salary':10000},{'name':"rakesh",'salary':500000},{'name':"riya",'salary':650000},{'name':"rithik",'salary':45000}];
bubbleSort(arr,2);