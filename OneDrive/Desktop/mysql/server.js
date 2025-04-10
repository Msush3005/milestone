const express = require('express');
const dotenv = require('dotenv');
const mysql = require('mysql2');

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
})
 
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
    }   
);

app.get('/', (req, res) => {
  res.send("Mysql connection is working fine");
}); 

app.listen(port, () => {    
  console.log(`Server is running on http://localhost:${port}`);
}
);