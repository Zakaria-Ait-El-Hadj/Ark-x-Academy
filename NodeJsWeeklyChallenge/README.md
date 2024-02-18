This project is a simplified ATM management system implemented in Node.js. It allows users to perform basic banking operations such as checking balance, depositing money, withdrawing money, and viewing transaction history. The application utilizes Node.js's filesystem module (fs) for data persistence and the events module for handling different operations.

*Setup and Initialization
To set up the project, follow these steps:

Clone the repository to your local machine.
Navigate to the project directory in the terminal.
Install dependencies by running npm install.
Ensure you have Node.js installed on your machine.

*Usage
Once the project is set up, you can run the application by executing node app.js in the terminal. This will start the ATM system, and you'll be prompted with options to perform various banking operations.

*Features
User Authentication: New users can be added to the system with a unique account ID and PIN. The system validates user credentials against the data stored in users.json.
ATM Operations: Users can check their balance, deposit money, withdraw money, and view transaction history.
Reading and Writing to Files: Data persistence is achieved using the fs module to read from and write to JSON files (users.json).
Error Handling: The application implements error handling for scenarios like failed login attempts, insufficient funds, and invalid input values.