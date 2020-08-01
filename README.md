# Jobly
Indeed, but with better UI.

## Getting Started

Follow the instructions below to get a copy of the project up and running on your machine for development and testing. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

### Installing
1. Clone the repo

2. `cd` into the `backend` directory
```
cd backend
```

3. Install required packages
```
npm install
```

4. Create and seed the *jobly* database in PostgreSQL and load data.
```
createdb jobly
psql jobly < data.sql
```

5. Start the server (NOTE: it will start on port 3001)
```
nodemon server.js 
```

6. Similarly, `cd` into the `frontend` directory, install the required packages, and then start the app:
```
cd frontend
npm install
npm start
```
  Your app can be seen at: http://localhost:3000 

### Running Tests
To run tests, simply type the following in your CLI:
```
createdb jobly-test
cd backend
jest

cd frontend
npm test
```

## Built With

- [React](https://www.reactjs.org/) - framework for frontend
- [Express](https://expressjs.com/) - framework for backend
- [Postgres](https://www.postgresql.org/) - object-relational database system

Made by Paige Godfrey and Sairina Merino Tsui