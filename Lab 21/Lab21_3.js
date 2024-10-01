
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Faculty = require('./faculties')

const connectionString = "mongodb+srv://jay:%23jay%40345@jay.aj2ou.mongodb.net/faculties";
mongoose.connect(connectionString).then(()=>{
    console.log("Connected with CloudDB");

    const app = express();
    app.use(bodyParser.urlencoded());
    
    app.get('/home',(req,res)=>{
        res.send("Welcome");
    });

    app.get('/faculties',async (req,res)=>{
        const ans = await Faculty.find();
        res.send(ans);
    })

    //GetAll
    app.get('/faculties',async (req,res)=>{
        const ans = await Faculty.find();
        res.send(ans);
    });

    //GetByID
    app.get('/faculties/:id',async (req,res)=>{
        const ans = await Faculty.findOne({FacultyID:req.params.id});
        res.send(ans);
    });

    //Create
    app.post('/faculties',async (req,res)=>{
        stu = new Faculty({...req.body});
        const ans = await stu.save();
        res.send(ans);
    });

    //Delete
    app.delete('/faculties/:id',async (req,res)=>{
        const ans = await Faculty.deleteOne({FacultyID:req.params.id});
        res.send(ans);
    });

    //Update
    app.patch('/faculties/:id',async (req,res)=>{
        const stu = await Faculty.findOne({FacultyID:req.params.id});
        stu.FacultyName = req.body.FacultyName;
        const ans = await stu.save();
        res.send(ans);

    })
    
    //Search
    app.get('/faculties/search/:name',async (req,res)=>{
        const ans = await Faculty.find({FacultyName:{$regex: req.params.name, $options: 'i'}});
        res.send(ans);
    });



    app.listen(3000,()=>{
        console.log("server started @ 3000");
    })
});
