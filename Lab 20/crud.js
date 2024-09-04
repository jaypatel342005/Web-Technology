const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const a =[
    {   
        id:'1',
        name:'John',
        age:25
    },
    {
        id:'2',
        name:'Jane',
        age:30
    },
    {
        id:'3',
        name:'David',
        age:28
    }
]

app.use(bodyParser.urlencoded({extended:false}))


//getAllX
app.get('/student', (req, res) => {
    res.json(a)
})

//getXByID
app.get('/student/:id', (req, res) => {
    const student = a.find(s => s.id === req.params.id)
    if (student) {
        res.json(student)
    } else {
        res.status(404).send('Student not found')
    }
})


//Create
app.post('/students',(req,res)=>{
    students.push(req.body);
    res.send("Student added");
    res.json(req.boy)
});

// app.post('/student/:id', (req, res) => {
//     const newStudent = {
//         id:a.length+1,
//         name: req.body.name,
//         age: req.body.age
//     }
//     a.push(newStudent)
//     res.json(newStudent)
// })

app.put('/student/:id', (req, res) => {
    const student = a.find(s => s.id === req.params.id)
    if (student) {
        student.name = req.body.name
        student.age = req.body.age
        res.json(student)
    } else {
        res.status(404).send('Student not found')
    }
})

// app.put('/student/:id', (req, res) => {

//     a[req.params.id]={
//         id:req.params.id,
//         name: req.body.name,
//         age: req.body.age
//     }
//     res.json(a)
// })

app.patch('/students/:id',(req,res)=>{
    const idToEdit = students.findIndex((stu)=>{
        if(stu.id==req.params.id){
            return true;
        }
    });
    students[idToEdit] = req.body;
    res.send("student updated");
});


app.delete('/student/:id', (req, res) => {
    const index = a.findIndex(s => s.id === req.params.id)
    if (index !== -1) {
        a.splice(index, 1)
        res.send('Student deleted')
    } else {
        res.status(404).send('Student not found')
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
    