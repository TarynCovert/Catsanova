# Catsanova

This is a mobile web application that allows users to scroll through and view information, like, dislike, and get linked to cats available for adoption on Petfinder.com. 
The application was built in 3 days and does not currently communicate with the Petfinder API. The cats available in the application were originally pulled from Petfinder 

This application 

the backend API for an e-commerce application. This component is responsible for supplying the front-end with information about the products currently stored in the database.

## Usage
### 1. Clone the repo
```bash
git clone https://github.com/TarynCovert/Catsanova.git
```
### 2. CD into the file directory
```bash
cd 
```
### 3. Run npm install to install all necessary dependencies
```bash
npm install
```
### 4. Create a copy of the example.env file and rename it .env
This is where you will be adding in the information about your postgres database

### 5. Start up the postgres database
On linux, this would be done through
```bash
sudo service postgresql start
```
### 6. Navigate the postgres client and then import the database schema
On Linux (if you have a port different from the default, then use -p port number )
```bash
sudo -u postgres psql
```
In the postgres shell, use \i filePathToFile

### 7. Run npm start to start the application
```bash
npm start
```
## Views
