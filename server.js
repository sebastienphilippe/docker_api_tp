const express = require('express');
const mongoose = require('mongoose');

const mongo_url = "mongodb+srv://WillouDelWillou:Uyo3N4UBgqsl35du@cluster0-lmgxh.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(mongo_url, {
    dbName: "hetic_db",
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDb connecté")
}).catch((error) => {
    console.error(error)
});

// Le serveur HTTP
const app = express();

// Un middleware nous permettant de travailler avec du json
app.use(express.json());
app.use('/api/users', require('./routes/users'))
app.use('/api/events', require('./routes/event'))

const port = 5000;

// Mise en écoute du port
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});

console.log(`http://localhost:${port}`);