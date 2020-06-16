const express = require('express');
const app = express();

const mockUserData = [
    {name: "Tom"},
    {name: "Jerry"},
];

app.get('/users/:id', (req, res) => {
    console.log(req.params.id);
    res.json({
        success: true,
        message: "received list users",
        users: mockUserData
    });
})

app.listen(8080, () => {
    console.log('server is running');
});

