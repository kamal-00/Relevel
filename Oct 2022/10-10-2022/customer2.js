class customer{

    name = "";
    id = "";
    mobile = "";
    address = "";
    email = "";

    constructor(_name, _id, _mobile, _address, _email){
        this.name = _name;
        this.id = _id;
        this.mobile = _mobile;
        this.address = _address;
        this.email = _email;
    }

    addToCart(){
        console.log("Item has been added for "+this.name);
    }

    payment(){
        console.log("Payment is received for "+this.name);
    }
    
    order(){
        console.log(this); // gives complete detail i.e.- name:'Kamal', id: 1254, ....
        console.log("order confirmed for "+this.name);
    }

    track(){
        console.log("Order reach to your nearest hub for "+this.name);
    }
}

let customer1 = new customer("Kamal", 1254, 7992219424, "Kankarbagh", "kamal.ame19@gmail.com");
customer1.order();
customer1.payment();
customer1.track();
console.log(customer1.name);