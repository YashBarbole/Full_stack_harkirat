// const express=require("express")

// const app=express();
// app.listen(3000);




// app.get("/",function(req,res){
   

// })

const express=require("express")
const app=express()
app.listen(3000)

app.use(express.json())


const users=[
    {
        name:"yash",
        kidneys:[{
            healthy:false
        }]

    }
]

app.get("/",function(req,res){
    const johnkidneys=users[0].kidneys;
    const numberofkidneys=johnkidneys.length;
    let numberOfHealthyKidneys=0;
    for(let i=0;i<johnkidneys.length;i++){
        if(johnkidneys[i].healthy){
            numberOfHealthyKidneys=numberOfHealthyKidneys+1;
        }

    }
    const numberofunhealthykidneys=numberofkidneys-numberOfHealthyKidneys;
    res.json({
        numberofkidneys,
        numberOfHealthyKidneys,
        numberofunhealthykidneys
    
    })
})

app.post("/",function(req,res){
    const isHealthy=req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy

    })
    res.json({
        msg:"done"
    })
})


app.put("/",function(req,res){
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true;
    }
    res.json({});

})

//remove unheatlhy kidneys

app.delete("/",function(req,res){
   
    if (isthereatleastoneunhealthykidney()){
        const newKidneys=[];
    for(let i=0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy:true
            })

        }
    }
    users[0].kidneys=newKidneys;
    res.json({msg:"done"})


    }
    else{
        res.status(411).json({
            msg:"no failed kidney"
        });
    }

    
    
})

function isthereatleastoneunhealthykidney(){
     let atleastoneunhealthykidney=false;
      for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            atleastoneunhealthykidney=true;
        

        }
    }
    return atleastoneunhealthykidney;

}


