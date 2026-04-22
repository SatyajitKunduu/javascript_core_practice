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

