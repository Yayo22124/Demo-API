const express = require('express')
const morgan = require('morgan')
require("./database")
const Student = require('./Student');

const app = express()


app.use(express.json())

app.use(morgan("dev"))

// Routes
app.get('/getAll', async (req, res) => {
    // Aqui van las instrucciones para traer todos los datos de los estudiantes, desde mongodb atlas y enviarlos al cliente
    const students = await Student.find();

    res.json(students)
})

app.use('/getOne/:id', async (req, res) => {
    const student = await Student.findOne({controlnumber:req.params.id});
    if (student!=null) {
        res.json(student);
    } else {
        res.json({
            "status":"Not found"
        })
    }
})

app.post('/insertOne', async (req, res) => {
    const studentSaved = new Student(req.body);
    await studentSaved.save();

    res.json({
        "status": "student saved"
    })
})


app.listen(3000, () => {
    console.log('Server on port 3000')
})

// Middlewares
//Configuraciones pequeñas para el servidor

// app.use(express.json())
// app.use(morgan('dev'))

// app.get('/:matricula', (req, res) => {
//     console.log(req.params.matricula)
//     res.json ( {
//         status:"Peticion por get recibida..."
//     })
// })

// app.post('/insert', (req, res) => {
//     console.log(req.body)
//     res.json ( {
//         status:"Peticion por post recibida... Hola"
//     })
// }) 

// app.listen(3500, ()=> {
//     console.log('Server on port 3500')
// })