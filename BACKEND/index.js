const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const app = express();
const PORT = 5000;
const pool = require('./db.js');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send("Hello World");
});

app.post("/register-new-user",async (req,res)=>{
    let {name,email,password}=req.body;
    //hash the password
    let passwordHash=await bcrypt.hash(password,10);
    const newUser = await pool.query(`insert into users(name,email,passwordHash) values ('${name}','${email}','${passwordHash}')`);
    // console.log(newUser);
    res.status(201).json({message:"User registered successfully"});
}); 
  
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

