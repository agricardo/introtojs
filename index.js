var oper1 = 12 + 12;
var oper2 = 25 - 1;
var oper3 = 48 / 2;
var oper4 = 12 * 2;

var op1 = 6 % 3
var op2 = 10 % 2
var op3 = 5 % 2

console.log(
    op1 == op2
)
console.log(
    op1 < op3
)

var str1 = "Test Grade as follows:"
var str2 = "\n \tStudent 1: 96"
var str3 = "\n \tComment: \"None\""

console.log(
    str1 + str2 + str3
)

var numbers = [0,10,20,30,40,50,60,70,80,90]
console.log(
    numbers[2] + numbers[4]
)

var student = {
    fullname: " Ricardo Aranda",
    age: "21",
    city: "Miami",
    hobby:"play video games",
}
console.log(
    `Hi! My name is ${student.fullname} , and I am ${student.age} I live in ${student.city} , and I like ${student.hobby}.`
)
var x = 1
while(x < 10){
    if(x % 2 == 0){
        console.log(x)
    }
    x++
}

for (var i = 0; i <=10; i+=2) {
    console.log('The number is '+ i);
}