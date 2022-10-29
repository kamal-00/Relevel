let num = 0;
    switch(true){
        case (num<0):
            text = "Negative";
            break;
        case (num==0):
            text = "Zero";
            break;
        case (num>0):
            text = "Positive";
            break;
        default:
            text = "No Value";
        }
console.log(text);
//po_ne_zero(25);
//po_ne_zero(-12);
//po_ne_zero(0);