const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const mockUserData = [
    {name: "Tom"},
    {name: "Jerry"},
];

app.get('/users', (req, res) => {
    console.log(req.params.id);
    res.json({
        success: true,
        message: "received list users",
        users: mockUserData
    });
})

app.get('/users/:id', (req, res) => {
    console.log(req.params.id);
    res.json({
        success: true,
        message: "received user",
        data: req.params.id
    });
})

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const mockUsername = 'tom';
    const mockPassword = 'notjerry';
    if(username === mockUsername && password === mockPassword){
        res.json({
            success: true,
            message: 'login successfully',
            token: 'random token'
        });
    }
    else{
        res.json({
            success: false,
            message: 'login failed'
        })
    }
});

app.listen(8080, () => {
    console.log('server is running');
});

