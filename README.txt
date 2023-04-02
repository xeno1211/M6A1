README
1. Open the M6A1 folder in Visual Studio Code
2. Start the server by typing "nodemon ./server"
3. Go to web.postman.co
4. GET and POST tests can be run against localhost:3000/bank
5. PATCH and DELETE tests can be ran against localhost:3000/bank/<id of item>
6. Inserts or updates need to keep the following in mind:
	- Name, email, branch are required fields
	- Email must be unique and must follow standard email conventions
	- Deposit Amount must be at least $1, but not exceed $5000
	- Branch can only be "Main St", "West St", or "East St"