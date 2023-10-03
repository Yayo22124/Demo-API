const { default: mongoose } = require('mongoose')

mongoose.connect('mongodb+srv://hazielortiz04:022124Haziel@cluster0.ewjuf1n.mongodb.net/dsmdb?retryWrites=true&w=majority')
.then(db=> console.log("MondoDB Atlas Connected"));