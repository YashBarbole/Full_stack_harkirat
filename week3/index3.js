const express=require("express")
const zod=require("zod")
const app=express();

// app.get( "/health",function(req,res){
//     const username=req.query.username;
//     const password=req.query.password;
//     const kidneyid=req.query.kidneyid;

//     if(username!= "yash" || password!= "pass"){
//           res.status(400).json({msg:"wrong input USER OR PASS"})
//          return

//     }

//     if(kidneyid !=1&&kidneyid!=2){
//         res.status(400).json({msg:"wrong kidney count"})
//         return }

//     res.json({msg:"good kidney"})

//     });
app.use(express.json())
const schema=zod.array(zod.number());
// 
// 
// 
// 
// 
const schema2=zod.object({
    email:zod.string(),
    password:zod.string(),
    
})


app.post("/checkup",function(req,res){
    const kidneys=req.body.kidneys;
    const response=schema.safeParse(kidneys)
    if(!response.success){
        res.status(411).json({
            msg:"input is invalid my bro"
        })
    }
    res.send({
        response
    })
})
app.listen(3000);

