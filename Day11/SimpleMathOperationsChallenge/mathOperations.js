const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

function addNumbers(num1,num2){
    return parseInt(num1) + parseInt(num2);
}
function subNumbers(num1,num2){
    return parseInt(num1) - parseInt(num2);
}
function multiplyNumbers(num1,num2){
    return parseInt(num1) * parseInt(num2);
}
function devideNumbers(num1,num2){
    return parseInt(num1) / parseInt(num2);
}

function main(){
rl.question('Enter your first number: ', (num1) => {
    rl.question('Enter your second number: ', (num2) =>{
        console.log(addNumbers(num1,num2));
        console.log(subNumbers(num1,num2));
        console.log(multiplyNumbers(num1,num2));
        console.log(devideNumbers(num1,num2));
        rl.close();
    })
})}

main();