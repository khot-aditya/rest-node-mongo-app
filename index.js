const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());

// Imports Routes
const postsRoute = require('./routes/posts')
app.use('/posts', postsRoute);


app.get('/', (req, res) => {
    res.send('Home Page');
})


// connect to mongo db
mongoose.connect(process.env.DB_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => {
        console.log("connected")
    }
)





app.listen(3000);



















// code with harry tutorial code sample

// mongoose.connect('mongodb://localhost/blog', { useNewUrlParser: true, useUnifiedTopology: true });

// var db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
//     console.log("connected");
// });

// const kittySchema = new mongoose.Schema({
//     name: String
// });

// kittySchema.methods.speak = function speak() {
//     const greeting = this.name
//         ? "Meow name is " + this.name
//         : "I don't have a name";
//     // console.log(greeting);
// };

// const Kitten = mongoose.model('Kitten', kittySchema);

// const silence = new Kitten({ name: 'Hello World!' });
// // console.log(silence.name); // 'Silence'

// // silence.save(function (err, silence) {
// //     if (err) return console.error(err)

// //     // silence.speak()
// // });

// // get specific row
// // Kitten.find({ name: "Silence" }, (err, kittens) => {

// //     console.log(kittens);
// // })

// Kitten.find((err, kittens) => {

//     console.log(kittens);
// })


