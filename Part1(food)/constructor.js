function FoodItem(name , foodType , price , deliveryTime ) {
    this.name = name;
    this.foodType = foodType;
    this.price = price;
    this.deliveryTime  = deliveryTime ;
    this.rate = 0;
    this.comments = [];
    this.isReady = false;
    this.order = function (isPremiumUser){
        if(isPremiumUser)
            console.log(0.8*this.price,this.rate);
        else
            console.log(this.price,this.rate);
    };
    this.setRate = function (rateNum){
        if (this.rate===0)
            this.rate=rateNum;
        else
            this.rate = (this.rate+rateNum)/2;
    }
}


function Comment (author , comment) {
    this.author = author;
    this.comment = comment;
    this.allRate = 0;
    this.date = new Date();
    this.rate = function (rating) {
        if (this.allRate === 0)
            this.allRate = rating;
        else
            this.allRate = (this.allRate + rating ) / 2;
    }
}


let pizza = new FoodItem("margaritta" , "piza" , 70000 , 30);
let breakfast = new FoodItem("beacon and egg" , "breakfast" , 55000 , 20);
let pasta = new FoodItem("lasagna" , "pasta" , 75000 , 55);
let persian = new FoodItem("ghorme sabzi" , "persian" , 35000 , 45);

// console.log(pizza)
// console.log(breakfast)
// console.log(pasta)
// console.log(persian)



const rating1 = pizza.setRate(3);
const rating2 = pizza.setRate(4);
const rating3 = pizza.setRate(5);
const rating4 = pizza.setRate(5);
const rating5 = breakfast.setRate(2);
const rating6 = breakfast.setRate(1);
const rating7 = breakfast.setRate(3);

// console.log(pizza.rate);
// console.log(breakfast.rate);


let newComment1 = new Comment('mammad','bade');
let newComment2 = new Comment('karim','kam bood');
pizza.comments.push(newComment1.comment);
pizza.comments.push(newComment2.comment);
// console.log(pizza);


