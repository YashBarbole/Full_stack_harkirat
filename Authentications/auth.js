const express=require("express")
const jwt=require("jsonwebtoken");
const jwtpassword="123456"

const app=express()
app.use(express.json())
const ALL_USERS=[//in memory database
    {
        username:"yasha@gmail.com",
        password:"123",
        name:"yasha",
    },
       {
        username:"yashd@gmail.com",
        password:"123",
        name:"yashd",
    },
       {
        username:"yashs@gmail.com",
        password:"123",
        name:"yashs",
    },
];

function userExists(username,password){
    let userExists=false;
    for(let i=0;i<ALL_USERS.length;i++){
        if(ALL_USERS[i].username==username && ALL_USERS[i].password==password){
            userExists=true;
        }
    }
    return userExists;
}

app.post("/signin",function(req,res){
    const username=req.body.username;
    const password=req.body.password;

    if(!userExists(username,password)){
        return res.status(403).json({
            msg:"user doesnt exist bro"
        });
    }

    var token=jwt.sign({username:username},jwtpassword);
    return res.json({
        token,
    });

});

app.get("/users",function(req,res){
    const token= req.headers.authorization;
    
        const decoded=jwt.verify(token,jwtpassword);
        const username=decoded.username;

        res.json({
            users:ALL_USERS.filter(function(value){
                if(value.username==username){
                    return false
                }
                else{
                    return true
                }
            })
        })

    
});

app.listen(3000)