const mongoose = require('mongoose');



//. one way to define schema
// const PostSchema = mongoose.Schema({
//     title: String,
//     description: String,
//     date: Date.now
// });


//. we are using this method to define schema
const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model(
    'Posts'     /* Collection Name */,
    PostSchema  /* Collection Schema to use */
);



