const express = require("express");
const userRoutes = require("./routes/user.routes")
const { connectMongoDb } = require("./db/db.conection");
const app = express();
const PORT = 3003;

//Middleware
app.use(express.urlencoded({extended: false}))

app.use((res, req, next) =>{
     console.log("This is Middleware 1");
     next();
})

//ConnectionOfDB
connectMongoDb()
.then(() => console.log("Its Conected!"))
.catch((err) => console.log("Its not Conected", err));

//routes
app.use("/user", userRoutes);




app.listen(PORT, () => console.log(`server has stated in PORT : ${PORT}`))