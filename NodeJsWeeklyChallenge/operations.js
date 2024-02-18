const fs = require('fs');

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Month is zero-based, so add 1
const day = String(currentDate.getDate()).padStart(2, '0');
const date = `${year}-${month}-${day}`;


let data;
const rawData = fs.readFile("users.json" ,(err , rawData) =>{
    if(err){
      console.log("Error: ",err);
    }
    else{
      data = JSON.parse(rawData);
    }
  });

function checkBalance(accId , callback){
   let useracc = data.find( x => x.accountID == accId);
   console.log(useracc.balance);
   callback();
}
function deposit(accId , amount , callback){
    let useracc = data.find( x => x.accountID == accId);
    let transaction = {
        type : "deposit",
        amount : parseInt(amount),
        date : date
    }

    useracc.balance += parseInt(amount);
    useracc.transactions.push(transaction);

    const jsonData = JSON.stringify(data, null, 2);

    fs.writeFile('users.json', jsonData, (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log(`Deposit of ${amount} successful. Your current balance is: ${useracc.balance}`);
            callback();
        }
    });

}

function withdraw(accId , amount , callback){
    let useracc = data.find( x => x.accountID == accId);
    let transaction = {
        type : "deposit",
        amount : parseInt(amount),
        date : date
    }
    
    if(useracc.balance >= amount){
        useracc.balance -= parseInt(amount);
        useracc.transactions.push(transaction);
    }
    else{
        console.log("Not enough balance you only have" , useracc.balance);
        callback();
    }


    const jsonData = JSON.stringify(data, null, 2);

    fs.writeFile('users.json', jsonData, (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log(`withdraw of ${amount} was successful. Your current balance is: ${useracc.balance}`);
            callback();
        }
    });

}

function viewTransactions(accId , callback){
   const user = data.find(x => x.accountID == accId);
   console.log(user.transactions);
   callback();
}

function operationsMenu(rl , accId){
   rl.question("Type 1 to check balance\nType 2 to deposit money\nType 3 to withdraw money\nType 4 to view transaction history\nType 5 to exit \nType your choice : ",(choice) =>{
    switch (choice) {
        case '1':
            checkBalance(accId , () =>{
                operationsMenu(rl ,accId);
            });
            break; 
        case '2':
            rl.question("Enter the amount you wish to deposit : ", (input) =>{
                if (/^\d+$/.test(input)){
                    deposit(accId , input , ()=>{
                        operationsMenu(rl , accId);
                    });
                }
                else{
                    console.log("Please enter numbers only!");
                    operationsMenu(rl , accId);
                }
                
            })        
            break;   
        case '3':      
            rl.question("Enter the amount you wish to withdraw : ", (input) =>{
                if (/^\d+$/.test(input)){
                withdraw(accId , input , ()=>{
                    operationsMenu(rl , accId);
                });
               }
                else{
                    console.log("Please enter numbers only!");
                    operationsMenu(rl , accId);
               }
            })
            break; 
        case '4':
            viewTransactions(accId , ()=>{
                operationsMenu(rl,accId);
            });
            break;  
        case '5':
            rl.close();
            break;  
        default:
            console.log('Invalid choice');
            break;
    }
   });
}

module.exports = operationsMenu;