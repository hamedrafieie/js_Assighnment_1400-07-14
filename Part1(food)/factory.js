function foodItem(name , foodType , price , deliveryTime) {
    return {
        name ,
        foodType ,
        price ,
        deliveryTime ,
        rate: 0 ,
        rateCount: 0,
        comments: [] ,
        isReady: false ,
        order : function (isPremiumUser) {
            if (isPremiumUser)
                console.log(this.price*0.8 , this.rate)
            else
                console.log(this.price*0.8 , this.rate)
        },
        setRate : function (rateNum){
            if (this.rate===0)
                this.rate=rateNum;
            else
                this.rate = (this.rate+rateNum)/2;
        },

    }
}


function addComment(author, text) {
    return{
        author,
        date:new Date(),
        totalRate:0,
        text,
        rate : function (newRate) {
            if (this.totalRate === 0)
                this.totalRate = newRate;
            else
                this.totalRate = (this.totalRate + newRate ) / 2;
        }
    }


}
let pizza = foodItem ('margaritta','pizaa',70 , 40);
let breakfast = foodItem('beacon and egg','breakfast',120,30);

console.log(pizza)
console.log(breakfast)

let Rate1 = pizza.setRate(3);
let Rate2 = pizza.setRate(4);
let Rate3 = pizza.setRate(5);
let Rate4 = pizza.setRate(5);

let Rate5 = breakfast.setRate(2);
let Rate6 = breakfast.setRate(1);
let Rate7 = breakfast.setRate(3);

console.log(pizza.rate);
console.log(breakfast.rate);


let newComment1 = addComment('mammad','bade');
let newComment2 = addComment('karim','kam bood');
pizza.comments.push(newComment1.text);
pizza.comments.push(newComment2.text);
console.log(pizza);


