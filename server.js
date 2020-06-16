const express = require('express');
const app = express();

app.listen(8080, () => {
    console.log('server is running');
});

const mockUserData = [
    {name: "Tom"},
    {name: "Jerry"},
];

app.get('/users', (req, res) => {
    res.json({
        success: true,
        message: "received list users",
        users: mockUserData
    });
})