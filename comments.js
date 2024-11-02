// Create web server
let express = require('express');
let app = express();
app.use(express.static('public'));

app.get('/comments', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});