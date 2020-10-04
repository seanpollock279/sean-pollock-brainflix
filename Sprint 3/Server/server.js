const express = require('express');
const app = express();
const port = process.env.PORT || process.argv[2] || 8080
const bodyParser = require('body-parser');
const data = require('./data.json');
const cors = require('cors');

require('dotenv').config();

app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({ extended: true}));

console.log(data);

app.get('/video', (req, res) => {
    res.send(data);
})

app.get('/video/:id', (_req, res) => {
    res.json(data.videos.map(video => video))
});

app.post('/video', (req, res) => {
    const { title, description, image, likes, views, duration, channel, id, comments, timestamp } = req.body 
    const newVideo = {
        title,
        description,
        image,
        likes,
        views,
        timestamp,
        duration, 
        channel,
        id,
        comments
    }
    res.json([
        data.videos,
        newVideo
    ])
    data.videos.push(newVideo);
    console.log(req.body)
})

app.listen(port, () => console.log(`Listening on ${port}`))