const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// sends all posts from database to page
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.json(error);
    }
});

// gets post from client page and saves to database
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })

    try {
        const result = await post.save();
        res.json(result);
    } catch (err) {
        res.json(err);
    }
})

//send a specific post tp client page
router.get('/:postId', async (req, res) => {
    // console.log(req.params.postId);

    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (error) {
        res.json(error);
    }

});

//delete a specific post
router.delete('/:postId', async (req, res) => {
    try {
        const result = await Post.remove({ _id: req.params.postId });
        res.send('success');
    } catch (error) {
        res.json(error);
    }

})


//update a post 
router.patch('/:postId', async (req, res) => {
    try {
        const result = await Post.updateOne({ _id: req.params.postId },
            {
                $set: { description: req.body.description }
            });
            
        res.send('success');
    } catch (error) {
        res.json(error);
    }

})

router.get('/specific', (req, res) => {
    res.send("specific Posts ")
});


module.exports = router;