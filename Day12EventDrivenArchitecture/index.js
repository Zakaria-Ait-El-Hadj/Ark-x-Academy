const readline = require('readline');

let contact = [];

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
})

const question = () => {

    rl.question("Enter your choice:\n 1 To add a contact\n 2 To view all contacts \n 3 To search for a contact \n 4 to Exit the application \n" , (value) => {
        switch (value) {
            case "1":
                rl.question('Enter a name: ', (name) =>{
                    rl.question('Enter phone number: ', (number) =>{
                        
                        contact.push({name , number});
                        question();
                    })
                });
                break;
            case "2":
                    if(contact[0]){    
                    console.log("All contacts: \n");
                    contact.forEach(item => {
                    console.log(`name: ${item.name} , phone number: ${item.number}`);
                    })
                    }
                    else{
                        console.log("List of contact is empty");
                    }
                question();
                break;
            case "3":
                rl.question('Enter a name: ', (userInput) =>{
                    const foundContact = contact.find(contact => contact.name === userInput);
                    if (foundContact){
                        console.log(`Contact found: Name: ${foundContact.name}, Phone: ${foundContact.number}`);
                    }else{
                        console.log(`Contact with the name ${userInput} not found`);
                    }
                    question();
                });
                
                break;
            case "4":
                rl.close();
                break;
        
            default:
                console.log("Invalid option");
                question();
                break;
        }
    })

}

question();

