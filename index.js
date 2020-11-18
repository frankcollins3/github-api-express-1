// Modules
const express = require('express');
const axios = require('axios');

// Create the app
const app = express();

// Create a PORT
const PORT = process.env.PORT || 3000;

// Create a HOME route
app.get('/', (req, res) => {
    // Access API endpoint from Github
    axios.get('https://api.github.com/users/romebell')
    .then(response => {
        // Print inside of terminal
        // console.log(response.data); 
        const romeObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
        };
        console.log(romeObject);

        res.send(romeObject);
    });
});

// Create a Nitish route
app.get('/nitish', (req, res) => { 
    // Access API endpoint from Github
    axios.get('https://api.github.com/users/nitishdayal')
    .then(githubResponse => {
        // Print inside of terminal
        // console.log(response.data); 
        const nitishObject = {
            login: githubResponse.data.login,
            url: githubResponse.data.html_url,
            name: githubResponse.data.name
        };
        console.log(nitishObject);

        res.send(nitishObject);
    });
});

// Create a Ashton route
app.get('/ashton', (req, res) => { 
    // Access API endpoint from Github
    axios.get('https://api.github.com/users/swolepenguin')
    .then(githubResponse => {
        // Print inside of terminal
        // console.log(response.data); 
        const ashtonObject = {
            login: githubResponse.data.login,
            url: githubResponse.data.html_url,
            name: githubResponse.data.name
        };
        console.log(ashtonObject);

        res.send(ashtonObject);
    });
});

// Create a Felix route
app.get('/felix', (req, res) => { 
    // Access API endpoint from Github
    axios.get('https://api.github.com/users/fmuwanguzi')
    .then(githubResponse => {
        // Print inside of terminal
        // console.log(response.data); 
        const felixObject = {
            login: githubResponse.data.login,
            url: githubResponse.data.html_url,
            name: githubResponse.data.name
        };
        console.log(felixObject);

        res.send(felixObject);
    });
});

// Create a Jax route
app.get('/jax', (req, res) => { 
    // Access API endpoint from Github
    axios.get('https://api.github.com/users/jaxonnarramore')
    .then(githubResponse => {
        // Print inside of terminal
        // console.log(response.data); 
        const jaxObject = {
            login: githubResponse.data.login,
            url: githubResponse.data.html_url,
            name: githubResponse.data.name
        };
        console.log(jaxObject);

        res.send(jaxObject);
    });
});

// Create a Amari route
app.get('/amari', (req, res) => { 
    // Access API endpoint from Github
    axios.get('https://api.github.com/users/marjames98')
    .then(githubResponse => {
        // Print inside of terminal
        // console.log(response.data); 
        const amariObject = {
            login: githubResponse.data.login,
            url: githubResponse.data.html_url,
            name: githubResponse.data.name
        };
        console.log(amariObject);

        res.send(amariObject);
    });
});

// Listen on a PORT
app.listen(PORT, () => {
    console.log(`You're vibing to the sounds on PORT ${PORT} 🎧`);
});





// What we did before

// fetch('api endpoint')
// .then(response => response.json())
// .then(data => {
//     console.log(data);
// })

// function myAxios(apiEndpoint) {
//     fetch(apiEndpoint)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })
// }