
const readline = require('readline');
const auth = require('./authentification');

const rl = readline.createInterface({
   input : process.stdin,
   output : process.stdout
});

function main(){
    rl.question('Type 1 to Create an Account\nType 2 to log in \ntype 3 to exit \nEnter your choice: ' ,(choice) =>{
        switch (choice) {
            case '1':
                auth.createAccount(rl , main);
                break;        
            case '2':
                auth.logIn(rl , main);
                break;       
            case '3':
                rl.close();
                break;       
            default:
                console.log("Invalid choice");
                break;
        }
    })
}

main();