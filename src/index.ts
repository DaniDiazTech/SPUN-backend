import express from 'express';
// Stores all the routes of the app


const app = express();

app.use(express.json()); // middleware that converts req.body to json

const PORT = 3000;


// First route
app.get('/ping', (_req, res) => {
    console.log('someone pinged here');
    res.send('pong');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});