const axios = require('axios');

axios.get('http://www.google.com').then(function (response) {
    console.log(response.data.slice(0, 100));
});
