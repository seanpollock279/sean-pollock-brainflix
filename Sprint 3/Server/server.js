const express = require('express');
const app = express();
const port = process.env.PORT || process.argv[2] || 8080
const bodyParser = require('body-parser');
const data = require('./data.json');

require('dotenv').config();


app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true}));

console.log(data);

app.get('/data', (req, res) => {
    // res.json(data);
    res.send(data);
})

app.get('/data/:id', (_req, res) => {
    res.json(data.videos.map(video => video))
});

// for posting video event
// app.post('', (req, res) => {
    
// })

app.listen(port, () => console.log(`Listening on ${port}`))