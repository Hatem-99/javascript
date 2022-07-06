/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/
console.log("\n------------------EXERCISE 1------------------");
let positiveNumbers = [1, 2, 3, 4, 5] 
console.log(positiveNumbers)
/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/
console.log("\n------------------EXERCISE 2------------------");
let myInfo = {
    name: "Hatem",
    surname: "Mahmoud",
    emailAddress: "hatemhindawi1999@gmail.com",
    age: "22",
}
console.log(myInfo)
/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/
console.log("\n------------------EXERCISE 3------------------");
myInfo.drivingLecense = false 
console.log(myInfo)
/* EXERCISE 4
 Remove from the previously created object the age property.
*/
console.log("\n------------------EXERCISE 4------------------");
delete myInfo.age
console.log(myInfo)

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/
console.log("\n------------------EXERCISE 5------------------");
let info = { 
    name:   "Ragnar",
    surname: "Lothbrok",
    emailAddress: "ragnarlothbrok@gmail.com",
}
console.log(info)

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/
console.log("\n------------------EXERCISE 6------------------");
let totalShoppingCart = 80;

let shippingStatus = (totalShoppingCart >= 50) ? "you got free shipping" : "it will cost you 10$ for shipping";
 
console.log(shippingStatus)
/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/
    console.log("\n------------------EXERCISE 7------------------");
    let precntige = 0.2;
    let shippingCost = 10;
    let afterDiscountTotal =  totalShoppingCart - (totalShoppingCart * precntige);
    if(afterDiscountTotal >= 50) 
    {
    console.log("The Total is " + afterDiscountTotal + " you are eligible for free shipping") 
}   else {
    console.log("The Total is "+ (afterDiscountTotal + shippingCost) + " it will cost you 10 for shipping");
    }
/* EXERCISE 8
 Create a variable and assign to it an object representing a car, 
 with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate
  for each cloned car without affecting the original one.
*/
console.log("\n------------------EXERCISE 8------------------");
let car = {
    brand: "BMW",
    model: 2009,
    licensePlate: "LA 23945"
}
console.log(car)
let car1 = {}; 
let car2 = {};
let car3 = {}; 
let car4 = {};
let car5 = {};
Object.assign( car1, car);
Object.assign( car2, car);
Object.assign( car3, car);
Object.assign( car4, car);
Object.assign( car5, car);
car1.licensePlate =  "LA 86436";
car2.licensePlate =  "LA 79357";
car3.licensePlate =  "LA 43424";
car4.licensePlate =  "LA 36255";
car5.licensePlate =  "LA 39385";
console.log(car1,)
/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array
  containing all the cars from the previous exercise.
*/

console.log("\n------------------EXERCISE 9------------------");

let carsForRent = [
    car,car1,car2,car3,car4,car5
]

console.log(carsForRent)

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/
console.log("\n------------------EXERCISE 10------------------");
carsForRent.pop(0);
carsForRent.pop(-1);

console.log(carsForRent)

/* EXERCISE 11
 Print to the console the type of the car variable you created before,
  as well as the types of its licensePlate and brand properties.
*/

console.log("\n------------------EXERCISE 11------------------");

console.log(typeof car)
console.log(typeof car.brand)
console.log(typeof car.licensePlate)

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array,
  and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars
  present in the carsForSale and carsForRent arrays.
*/

console.log("\n------------------EXERCISE 12------------------");

let carsForSale = []
carsForSale.push(car,car1,car2)

let totalCars = (carsForRent.length + carsForSale.length)

console.log(totalCars)

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

console.log("\n------------------EXERCISE 13------------------");
let cars = []
for (let i = 0; i < carsForSale.length; i++) {
console.log(carsForSale[i])
    
}