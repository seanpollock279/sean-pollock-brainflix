const express = require('express');
const app = express();
const port = process.env.PORT || process.argv[2] || 8080
const bodyParser = require('body-parser');
const data = require('./data.json');

require('dotenv').config();


app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true}));

console.log(data);

app.get('/video', (req, res) => {
    res.send(data);
})

app.get('/video/:id', (_req, res) => {
    res.json(data.videos.map(video => video))
});

app.post('/video', (_req, res) => {
    const { title, description, video, likes, views, duration, channel, id } = req.body 
    res.json([
        ...data,
        {
            title,
            description,
            video,
            likes,
            views,
            duration,
            channel,
            id
        }
    ])
})

app.listen(port, () => console.log(`Listening on ${port}`))