const express = require("express");
const users = require("./MOCK_DATA .json");
const app = express();
const PORT = 3000;

//Routes
app.get("/api/users", (req, res) =>{
    return res.json(users);
})

app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
})

app.post("/api/users", (req, res) =>{
    return res.json({status: "pending"});
})

app.patch("/api/users/:id", (req, res) =>{   
    return res.json({status: "pending"});
})

app.delete("/api/users/:id", (req, res) =>{   
    return res.json({status: "pending"});
})

// app.route("/api/users/:id")
// .get((req, res) => {
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id === id);
//     return res.json(user);
// })
// .patch((req, res) => {
//     return res.json({status: "pending"});
// })
// .delete((req, res) => {
//     return res.json({status: "pending"});
// })

app.listen(PORT, () => console.log(`server has stated in PORT : ${PORT}`))