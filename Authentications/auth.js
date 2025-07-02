const express=require("express")
// const jwt=require("jsonwebtoken");
// const jwtpassword="123456";
// const mongoose=require("mongoose");

// mongoose.connect("");

// const user=mongoose.model("User",{
//     name:string,
//     username:string,
//     password:string,
// });

const app=express()
app.use(express.json())
// app.use(express.json())

// function userExists(username,password){
  
// }

// app.post("/signin",function(req,res){
//     const username=req.body.username;
//     const password=req.body.password;

//     if(!userExists(username,password)){
//         return res.status(403).json({
//             msg:"user doesnt exist bro"
//         });
//     }

//     var token=jwt.sign({username:username},jwtpassword);
//     return res.json({
//         token,
//     });

// });

// app.get("/users",function(req,res){
//     const token= req.headers.authorization;
    
//         const decoded=jwt.verify(token,jwtpassword);
//         const username=decoded.username;

//         res.json({
//             users:ALL_USERS.filter(function(value){
//                 if(value.username==username){
//                     return false
//                 }
//                 else{
//                     return true
//                 }
//             })
//         })

    
// });

// app.listen(3000)

const mongoose=require("mongoose")

mongoose.connect("")


const User=mongoose.model('Users',{name:String,email:String,password:String});


app.post("/signup",async function(req,res){
    const username=req.body.username;
    const password=req.body.password;
    const name=req.body.name;

    const existinguser=await User.findOne({email:username});
    //CRUD create read update delete
    if(existinguser){
        return res.status(400).send("already exists bro");
    }

    await User.create({name:name,email:username,password:password});
    
    res.json({
        "msg":"user created yess yess"
    })

})


app.listen(3000)
