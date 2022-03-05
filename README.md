# Node-challenge

This application was built using express framework and MongoDB database.


## Before running
### 1 - For API Service
1. This service is using the dotenv library, so will be necessary to create the ".env" file in the service´s root folder
1.1 The ".env" file must contain the following variables:
	* ACCESS_TOKEN_SECRET_KEY = [your secret key]
	* DB_USER  = [your user for the mongoDB string connection]
	* DB_PASSWORD = [your password for MongoDB access]
	* EMAIL_USER = [provide a real email]
	* EMAIL_PASSWORD = [email password]
### 2 - For Stock Service
No steps are necessary.




## How to run
### Running API-Service
~~~~
cd api-service
npm install
node api-service
~~~~

### Running Stock-Service
~~~~
cd stock-service
npm install
node stock-service
~~~~

## After API-Service is running
### API-Documentation (Swagger)
~~~~
http://localhost:3001/v1/doc
~~~~

## Start using the API:
### Seeding Process
You are expected to populate the tables through the seeding process:
~~~~
http://localhost:3001/v1/seeding
~~~~
The seeding files are located in the following folder: `api-service\config\seeding-data`
🧨 Whenever this process is trigged all documents are deleted in the collections.🧨


### Making the login
You must make a login to receive the token to be used on the tests:
~~~~
http://localhost:3001/v1/users/login
~~~~

For that you can use the json below in the body :
~~~~
{
	"email" : "admin@admin.com",
	"password" : "admin"
}
~~~~

You can do any modification as you wish in the user seeding file.

