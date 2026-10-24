// Question 1: JavaScript basics, syntax, comments and output
// Task: Write a JavaScript program that prints your name, age, and city. Add a single-line comment and a multi-line comment.

console.log("ravi");
console.log(22);
console.log("hyderabad");


// Question 2: Variables — let, const, and var
// Task: Create a product price of ₹500 using const, a quantity of 2 using let, and a category using var. Increase the quantity to 3 and calculate the total price.

// Topics: Variables, declaration, reassignment, naming conventions

const productprice = 500;
let  quantity = 2;
var category = "electronic";

quantity = 3;

const total = productprice * quantity;

console.log("category:", category);
console.log("price:", productprice);
console.log("quantity:",quantity );
console.log("total:", total);



// const productPrice = 500;
// let quantity = 2;
// var category = "Electronics";

// quantity = 3;

// const Total = productPrice * quantity;

// console.log("Price:", productPrice);
// console.log("Quantity:", quantity);
// console.log("Total:", Total);


// Question 3: Data types and typeof
// Task: Create variables for a student's name, marks, pass status, an unassigned value, a null value, a BigInt, and a Symbol. Print each variable's type.

// Topics: String, number, boolean, undefined, null, bigint, symbol, typeof

const  name = "ravi";
const marks = 95;
const pass = true;
let result ;
const selected = null;
const bigValue = 12345678901234567890n;
const id = Symbol("student");

console.log(name);
console.log(typeof(name));

console.log(marks);
console.log(typeof(marks));

console.log(pass);
console.log(typeof(pass));

console.log(result);
console.log(typeof(result));

console.log(selected);
console.log(typeof(selected));

console.log(bigValue);
console.log(typeof(bigValue));

console.log(id);
console.log(typeof(id));


// Question 4: Arithmetic and assignment operators
// Task: A customer buys 4 notebooks costing ₹25 each and 2 pens costing ₹10 each. Calculate the subtotal, apply a ₹20 discount, and print the final bill.

// Topics: +, -, *, /, %, **, ++, --, assignment operators

const book = 25;
const book_quantity = 4;
const pen = 10;
const pen_qunatity = 2;

const subtotal = book * book_quantity + pen *pen_qunatity;

let final_bill = subtotal;
final_bill -=20;

console.log("subtotal:", subtotal);
console.log("discount:", 20);
console.log("final_bill:", final_bill);


// Question 5: Comparison and logical operators
// Task: A student can enter an exam if their age is at least 18 and they have an ID card. Check the conditions and compare == with ===.

// Topics: >, <, >=, <=, ==, ===, !=, !==, &&, ||, !


const age = 18;
const id = true;

const eligible = age >= 18 && id;


console.log('age;',age);
console.log("id:",id);
console.log("eligible:", eligible);



// Level 1 mini-project: Student Marks Calculator
// Use the concepts you have learned to calculate a student's total, average, and pass/fail status.

const name = "ravi";
const sub1 = 75;
const sub2 = 85;
const sub3 = 90;

const total = sub1 + sub2 + sub3;

const average = total / 3;

const passed = sub1 >= 35 &&
               sub2 >= 35 &&
               sub3 >= 35;


console.log("name:", name);
console.log("total:", total);
console.log("average:", average);
console.log("passed:", passed ? "pass" : "fail");