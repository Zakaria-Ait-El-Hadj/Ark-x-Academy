
const fs = require('fs');
const operations = require('./operations');

let data;
let uniqueId;

const rawData = fs.readFile("users.json" ,(err , rawData) =>{
  if(err){
    console.log("Error: ",err);
  }
  else{
    data = JSON.parse(rawData);
    uniqueId = "ACC" + (1001 + data.length);
  }
});


const randomPin = Math.floor((Math.random() * 1000).toString().padStart(4,0)).toString() ;


function checkLogin(id , pin , menuCallback ,operationsCallback , rl){
    let loggedIn = false;
    for(let i = 0; i < data.length ; i++){
       if(data[i].pin == pin || data[i].accountID == id){
        console.log("Loged in successfully");
        loggedIn = true;
        operationsCallback(rl , id);
        break;
       }
       
    }
    if(!loggedIn){
        console.log("AccountId or Pin is incorrect");
        console.log(data.length);
        menuCallback();
       }
}

function signUp(fullName , callback){
   const user = {
      accountID: uniqueId,
      name: fullName,
      pin: randomPin,
      balance: 0,
      transactions: []
   }
   data.push(user);
   const jsonData = JSON.stringify(data , null ,2);
   fs.writeFile("users.json" , jsonData , (err) =>{
    if(err){
        console.log("Error :" ,err);
        callback();
    }
    else{
        console.log("User account created successfully");
        callback();
    }
   })
}

const createAccount = (rl , callback) =>{
   rl.question('Enter your full name :' , (fullName) =>{
      signUp(fullName , callback);
   })
};

const logIn = (rl , callback) =>{
   rl.question("Enter your account Id :" , (idInput) =>{
    rl.question("Enter your Pin code :" , (pinInput) =>{
       checkLogin(idInput,pinInput,callback, operations , rl);      
    })
   })
};

module.exports = {logIn , createAccount};