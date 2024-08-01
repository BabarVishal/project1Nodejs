const express = require("express");
const users = require("./MOCK_DATA .json");
const mongoose = require("mongoose");
const e = require("express");
const app = express();
const PORT = 3000;

//Middleware
app.use(express.urlencoded({extended: false}))

app.use((res, req, next) =>{
     console.log("This is Middleware 1");
     next();
})

//ConnectionOfDB
mongoose.connect("mongodb://127.0.0.1:27017/YouTube-app-1")
.then(() => console.log("MongoDb Conected"))
.catch((err) => console.log("Mongo Err", err))

//Model
const userSchema = new mongoose.Schema({
    fistName:{
        type:String,
        require: true
    },
    lastName:{
        type:String,
        require: true
    },
    email:{
        type:String,
        require: true,
        unique: true
    }
},{
    timestamps: true
})

const User = mongoose.model("User", userSchema);

//Routes
app.get("/api/users", (req, res) =>{
    return res.json(users);
})

app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
})

app.post("/api/users", async (req, res) =>{
    const body = req.body;
    if(!(body || body.fistName || body.lastName || body.email)){
        return res.status(400).json({msg: "All Fields are req..."});
    }

   const result = await User.create({
    fistName: body.fistName,
    lastName: body.lastName,
    email: body.lastName
   })
console.log(result);
   return res.status(201).json({msg: "Success"});
    
})

app.patch("/api/users/:id", (req, res) =>{   
    return res.json({status: "pending"});
})

app.delete("/api/users/:id", (req, res) =>{   
    return res.json({status: "pending"});
})


app.listen(PORT, () => console.log(`server has stated in PORT : ${PORT}`))