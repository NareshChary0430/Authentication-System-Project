const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send("Hello World");
});

app.post("/register-new-user",async (req,res)=>{
    let {name,email,password}=req.body;
    //hash the password
    let hashedPassword=await bcrypt.hash(password,10);
    console.log(name,email,hashedPassword);
    res.json({message:"User registered successfully"});
}); 

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

