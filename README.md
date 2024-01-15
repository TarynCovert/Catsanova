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
### Homepage View
The homepage view allows users to see photos of a cat and see simple information on the cat including the age and name of the cat. Features on the homepage include the ability to like, dislike, and skip the cat which will all provide a new cat to view upon clicking. Liking a cat will result in a "message" from the cat which can be seen from an integer above above the envelope icon at the bottom of the homescreen view. Clicking on the right side of the photo will allow you to click forward through multiple images of the cat. Clicking on the left side of the photo will go back through the previous images. The number of photos is indicated by the number of pawprints at the top of the photo, of which none will be shown if there is only one photo. Additional features include the "up arrow icon" and the envelope icon. Clicking the "down arrow" icon will redirect you to the additional information view. Clicking the envelope icon will redirect you to the messages view.

### Additional Information View
The addtional information view provides additional valuable information to a potential adopter to ensure the cat is a right fit for their home. The view is scrollable. An "Adopt Me!" button exists in this information which will, when clicked, redirect the user to petfinder.com to get in touch with an adoption agency for more information on the cat. The same features that allow users to click forward and backward through images of the cat (clicking on the right side or left side of the photo) exists in this view. Additionally, the same features of liking, disliking, or skipping a cat that exist in the homepage are included in this view. However, upon clicking these buttons, the user will be redirected to the home page. Lastly, a "down arrow" icon exists that upon clicking will redirect the user to the homepage view.

![MoreInfo](https://github.com/TarynCovert/Catsanova/blob/main/assets/MoreInfo.png)

### Messages View
The messages view allows users to see which cats they have "liked" to consider for adoption. The messages are scrollable. A hyperlinked "Adopt Me!" button exists on each cat which will, when clicked, redirect the user to petfinder.com to get in touch with an adoption agency for more information on the cat. Additionally, a trash/garbage can icon exists on each message will allows the user to delete the message if they are no longer interested in adopting the cat. Lastly, at the bottom of the view, there exists a cat icon which will redirect the user to the home page when clicked.

![Messages](https://github.com/TarynCovert/Catsanova/blob/main/assets/Messages.png)

