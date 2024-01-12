# Catsanova

This is an ios mobile web application that allows users to scroll through and view information, like, dislike, and get linked to cats available for adoption on Petfinder.com.
The cats available in the application were originally pulled from the Petfinder.com API for the 94555 zip code in California and are used for demonstration purposes.

## Usage
### 1. Make sure you have Expo CLI installed globally. If not, you can install it using:
```bash
npm install -g expo-cli
```
### 2. Clone the repo
```bash
git clone https://github.com/TarynCovert/Catsanova.git
```
### 3. CD into the file directory
```bash
cd filename/Catsanova
```
### 4. Run npm install to install all necessary dependencies
```bash
npm install
```
### 5. Create a copy of the example.env file and rename it .env
This is where you will be adding in the information about your postgres database

### 6. Start up the postgres database
On linux, this would be done through
```bash
sudo service postgresql start
```
### 7. Navigate the postgres client and then import the database schema
On Linux (if you have a port different from the default, then use -p port number )
```bash
sudo -u postgres psql
```
### 8. (Optional) Import example data into the database 
Example data has been provided in two csv files and can be imported with the postgresql queries 1) 'COPY cats FROM '/filepath/catsanova/catdata.csv' WITH CSV HEADER;' & 2) 'COPY photos FROM '/filepath/catsanova/catphotos.csv' WITH CSV HEADER;'. Update the queries witht the correct filepath in order to execute the queries. 

### 9. Run npm run server to start the server and connect to the database 
```bash
npm run server
```
### 10. Run npm run ios to start the application in the Expo iphone simulator 
```bash
npm run ios
```
## Views
### 
