var rp = require('request-promise');

// rp('https://cors-anywhere.herokuapp.com/http://www.google.com')
//     .then(function (htmlString) {
//         console.log(htmlString);
//     })
//     .catch(function (err) {
//         console.log('error');
//     });

// var cheerio = require('cheerio'); // Basically jQuery for node.js

var options = {
    // uri: 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/5a577871909255973d40829c2fc8d31f/19.4844699,-99.05361769999999',
    uri: 'http://examen-laboratoria-sprint-5.herokuapp.com/topics',
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response
};

rp(options)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (err) {
        // Crawling failed or Cheerio choked...
    });