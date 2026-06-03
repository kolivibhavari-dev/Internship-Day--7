let num = 10;

if (num > 0) console.log("Positive");


let number = 10;

number > 0 ? console.log("Positive") : console.log("Negative");



let marks = 75;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}


let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    default:
        console.log("Invalid day");
}


let age = 18;

let message = (age >= 18) ? "Eligible to vote" : "Not eligible to vote";

console.log(message);

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}




let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
    console.log(fruit);
}


let student = {
    name: "Tejas Pawar",
    age: 20
};

for (let key in student) {
    console.log(key + ": " + student[key]);
}

