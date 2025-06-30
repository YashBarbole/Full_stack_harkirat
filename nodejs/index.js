const express=require('express')
const app=express()
const port=3000



app.get('/',(req,res)=>{
    res.send("<b>yashh<b>")
})

app.post('/conversations',(req,res)=>{
    console.log(req.headers)
    res.send({
        msg:"2+2=4"
    })
})

app.listen(port,()=>{
    console.log(`all fine on port${port}`)

})