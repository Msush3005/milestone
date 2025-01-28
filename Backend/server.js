const {app}=require("./app")
require("dotenv").config()
const port=process.env.port
app.get("/user",async(req,res)=>{
    res.send("Hello........")
})




app.listen(port,()=>{
    console.log(`not today  on http://localhost:${port}`)


}
)