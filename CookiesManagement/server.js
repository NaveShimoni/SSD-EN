const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;

app.use(cookieParser());

app.get('/', (req, res) => {
    const cookies = req.cookies;
    let cookiesList = '';
    for (let [name, value] of Object.entries(cookies)) {
        cookiesList += `<li>${name}: ${value}</li>`;
    }

    const form = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Set Cookie</title>
        </head>
        <body>
            <h2>Cookies Received:</h2>
            <ul>${cookiesList}</ul>
            <h2>Set a new cookie</h2>
            <form action="/set-cookie" method="GET">
                <label for="cookie_name">Cookie Name:</label>
                <input type="text" id="cookie_name" name="cookie_name" required><br><br>
                <label for="cookie_value">Cookie Value:</label>
                <input type="text" id="cookie_value" name="cookie_value" required><br><br>
                <input type="submit" value="Set Cookie">
            </form>
        </body>
        </html>
    `;
    res.send(form);
});

app.get('/set-cookie', (req, res) => {
    const { cookie_name, cookie_value } = req.query;
    if (cookie_name && cookie_value) {
        res.cookie(cookie_name, cookie_value, { httpOnly: true });
        res.redirect('/');
    } else {
        res.status(400).send('Cookie name and value are required.');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});