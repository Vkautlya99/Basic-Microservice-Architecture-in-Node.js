const express = require("express")
const app = express();
app.use(express.json())


// const path = require("path");
// app.use(express.urlencoded({ extended: true }))

// app.use(express.static(path.join(__dirname, "public")));
// app.set("view engine", "ejs");

const UserModel = require("./models/usermodel")
const SalesModel = require("./models/salesmodel");



app.get("/", function (req, res) {
    res.send("hello world ! we will do practice")
})


app.get("/create", async function (req, res) {
    let createdUser = await UserModel.create({
        name: "laxita",
        age: 20,
        username: "Laxu2230",
        email : "laxita@gmail.com"
    })
    // console.log(createdUser)
    res.send(createdUser)
})

// Read data of database
app.get("/read", async (req, res) => {
    const UserData = await UserModel.find()
    res.send(UserData);
})

// Read one data
// app.get("/readone", async (req, res) => {
//     // find will always return an array and if there will be no usr than it will return a blank array, we can use findOne()
//     const UserData = await UserModel.find({ username: "Vrk99" })
//     res.send(UserData);
// })

// Update Using The Arrow function
app.get("/updatemail", async (req, res) => {
    const emailUpdate = await UserModel.findOneAndUpdate({ name: "Vikram Kumar" }, { email: "vrkbvpcoe2020@gmail.com" }, { new: true });
    res.send(emailUpdate)
})


// Update using Callback Function
app.get("/update", async function (req, res) {
    const updateduser = await UserModel.findOneAndUpdate({ username: "Vrk99" }, { name: "Vikram Kumar" }, { new: true })
    res.send(updateduser)
    
})

// Update Using The Arrow function
app.get("/updatemail", async (req, res) => {
    const emailUpdate = await UserModel.findOneAndUpdate({ name : "Vikram Kumar" }, { email: "vrkbvpcoe2020@gmail.com" }, { new: true });
    res.send(emailUpdate)
})

// Delete Operation 

app.get("/delete", async (req, res) => {
    const deletedUser =  await UserModel.findOneAndDelete({username : "Ro45"})
    console.log(deletedUser)
    res.send(`Hey deleted user is ${deletedUser}`)
})



app.get("/sales", async (req, res) => {
    const SalesData = await SalesModel.create({
        day: "Monday",
        price: 1000000,
        sailer: "amazon",
        profit : 250000
    })
    console.log(SalesData)
    console.log("Running Sales data")
    res.send(SalesData)
})


app.listen(3000, function () {
    console.log("App is running")
})

