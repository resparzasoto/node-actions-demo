import express from "express";

const app: express.Application = express();

app.use(express.json());

app.get('/', function (req, res) {
    res.send('Hello world');
});

app.listen(3000, function () {
    console.log('App listening on http://localhost:3000');
});
