const express = require('express');
const router =express.Router();

const users = require("./database/user_model");


// CREATING NEW USER
router.post("/user",async(req,res)=>{
    try {
        const data = await users.create(req.body)
        console.log("user added")
        res.send("user added")
    } catch (error) {
        console.error(error);
        res.send({error: error.message});
    }
})

// GETTING USER BY ID

router.get("/user/:_id",async(req,res)=>{
    try {
        const data = await users.findById({_id: req.params._id})
        console.log(data)
        res.send(data)
    } catch (error) {
        console.error(error);
        res.send({error: error.message});
    }
})

// GETTING ALL THE users
router.get("/user",async(req,res)=>{
    try {
        const data = await users.find()
        console.log(data)
        res.send(data)
    } catch (error) {
        console.error(error);
        res.send({error: error.message});
    }
})


// UPDATING ONE USER BY ID
router.patch("/user/:_id",async(req,res)=>{
    try {
        const data = await users.findByIdAndUpdate({_id: req.params._id},req.body)
        console.log("user updated")
        res.send("user updated")
    } catch (error) {
        console.error(error);
        res.send({error: error.message});
    }
})


// DELETING ONE USER BY ID

router.delete("/user/:_id",async(req,res)=>{
    try {
        const data = await users.findByIdAndDelete({_id: req.params._id})
        console.log("user deleted")
        res.send("user deleted")
    } catch (error) {
        console.error(error);
        res.send({error: error.message});
    }
})

// DELETING ALL THE USERS

router.delete("/user",async(req,res)=>{
    try {
        const data = await users.remove()
        console.log("all users deleted")
        res.send("all users deleted")
    } catch (error) {
        console.error(error);
        res.send({error: error.message});
    }
})


module.exports = router
