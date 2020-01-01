## For running the application you will have to:

In the project directory, you can run:

### Install node_modules in both `server` and `client`
You will have to have this folder for running the program. Github doesn't allow for such large folders, so just run `npm install` after you have cloned the application. <br />

### Start the backend server

Go into the server folder in your terminal and run the script `npm start`. This uses Nodemon and will start up the server, managing the mySQL-requests for the website. <br />

### Start the website on localHost

Go into the client folder in your terminal and run the script `npm start`. This will start up the server and run it on localhost. If you want to be able to share it locally you can go into `server.js` in the components folder in client, and change the constant "ip-Adresse" to your local ip-address. Now all computers and mobile phones running on the same wifi can access the website by typing in the url: "http://[ip-address]:[port, in which I have used 3000]". The url may look like this: "http://123.123.123.123:3000". <br />

---

Important notice! Make sure to be in the right directory in your terminal by using:
`cd server` for reaching this folder from the root folder or `cd ..` to go back one step
