//🟢BASIC LEVEL
//problem:01
//declare a variable "age" and assign your age.print
//👉adult if age=18 otherwise minor.

let age=18;

if (age>=18){
    console.log("adult");
}else{
    console.log("minor");
};

//problem:02
//👉write a number to check if a number is even or odd.

let num=3;
if(num%2===0){
    console.log("even")
}else{
    console.log("odd")
}

//problem:03
//👉declare two numbers and print the greater one.

let num1=23;
let num2=33;
if (num1>num2){
    console.log(num1)
}else{
    console.log(num2)
};

//problem:04
//👉check if a number positive,negative and zero.

let a=-6;
if(a>0){
    console.log("positive")
}else if(a=0){
    console.log("zero")
}else{
    console.log("negative")
};

//problem:05
//👉take a number and check if it is devisible by 5.

let x=555;
if(x/5){
    console.log("divisivle","by",x/5)
}else{
    console.log("not divisible")
};

//🟡INTERMIDIATE LEVEL
//PROBLEM:06
//👉WRITE A PROGRAM TO FIND THE LARGEST OF THREE NUMBERS

let A=10;
let B=11;
let C=12;
if(A>B && A>C){
    console.log("A")
}else if(B>A && B>C){
    console.log("B")
}else{
    console.log("C")
};

//problem:07
//👉check if a year is a leap year: 1.divisible by 4.  2.but not divisible by 100 unless also divisible by 400.

let year=2020;
if(year%4===0 && year%100!==0 || year%400===0){
    console.log("leap year")
}else{
    console.log("normal year")
};

//problem:08
//👉create a simple calculator using "if-else": input two numbers+operators(+,-,*,/) 

let m=122;
let n=33;
operator="-";
if(operator==="-"){
    console.log(m-n)
}else if(operator==="+"){
    console.log(m+n)
}else if(operator==="*"){
    console.log(m*n)
}else if(operator==="/"){
    console.log(m/n)
}else{
    console.log("invaild-operator")
};

//problem:09
//👉check a character is a vowel or consonant.

let char=A;
if (char===A || char===E || char===I || char===O ||char===U){
    console.log("vowel")
}else{
    console.log("consonant")
};

//problem:10
//👉convert a number(1-7) into a day of the week using if-else.

let Day=7;
if(Day===1)console.log("monday");
else if(Day===1)console.log("monday");
else if(Day===2)console.log("tuesday");
else if(Day===3)console.log("wednesday");
else if(Day===4)console.log("thrusday");
else if(Day===5)console.log("friday");
else if(Day===6)console.log("saturday");
else if(Day===7)console.log("sunday")
else console.log("invalid");

//🔵CHALLENGING PROBLEMS
//problem:11
//👉check if a number is a multiple of both 3 and 5.

let num3=15;
if(num3%3===0,num3%5===0){
    console.log("fizzbuzz");
}else if(num3%3===0){
    console.log("fizz");
}else if(num3%5===0){
    console.log("buzz");
}else{
    console.log(num);
}

//problem:12
//👉create a grading system: 90+ --> A. 80-90 --> B. 70-79 --> C. below 70 --> fail.

let marks=90;
if(marks>=90){
    console.log("A");
}else if(marks<=90 || marks>=80){
    console.log("B");
}else if(marks<=79 || marks>=70){
    console.log("C");
}else{
    console.log("fail");
};

//problem:13
//👉check if a number is a 3-digit number.

let digit=222;
if(digit>99 && digit<=999){
    console.log("three digit");
}else{
    console.log("not a three digit number");
};

//problem:14
//👉write a program to find absolute value of a number.[without using math.abs()]

let value=-10;
if(value<0){
    console.log("-value");
}else{
    console.log("value");
};

//problem:15
//👉take three sides of triangle and check:valid triangle or not.

let p=3,b=4,h=5;
if(p+b>h && b+h>p && p+h>b){
    console.log("triangle");
}else{
    console.log("not a triangle");
};

//🌝🔴 important for interview
//problem:16
//👉write a login system:username->"admin" and password->"1234" , print "login suuccesful" or "invalid credentials"

let username="admin";
let password=1234;
if(username==="admin" && password===1234){
    console.log("login successful");
}else{
    console.log("invalid credentials");
};

//problem:17
//👉check if a number is within a range (10-50).

let number=33;
if(number>=10 && number<=50){
    console.log("valid number");
}else{
    console.log("invalid number");
};

//problem:18
//👉compare two numbers and print: 1. equal or 2. which one is bigger.

let number1=33;
let number2=34;
if(number1===number2){
    console.log("equal");
}else if(number1>number2){
    console.log("number1 is bigger");
}else{
    console.log("number2 is bigger");
};

//🌝QUESTIONS OF LOOPS AND STRING.
//🟢BASIC LEVEL
//PROBLEM:01
//👉PRINT NUMBERS FROM 1 TO 10 USING LOOP.

for(let i=0;i<=10;i++){
    console.log(i);
}

//PROBLEM:02
//👉PRINT ALL EVEN NUMBERS FROM 1 TO 50.

for(let even=0;even<=50;even++){
    if(even%2===0){
        console.log(even);
    }
}

//PROBLEM:03
//👉REVERSE AS STRING: INPUT->"HELLO" , OUTPUT->"OLLEH"

let str="hello";
let reversed="";
for(let i=str.length - 1;i>=0;i--){
    reversed += str[i];
}
console.log(reversed);