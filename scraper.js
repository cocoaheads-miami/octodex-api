var cheerio = require('cheerio');
var _ = require('lodash');
var fs = require('fs');
var request = require('request');

const URL = 'https://octodex.github.com/';

var parseImage = (image) => {
    console.log(`${image.attribs.alt} - ${image.attribs['data-src']}`);

    return {
        name: image.attribs.alt,
        url: `${URL}${image.attribs['data-src']}`
    };
};

request(URL, (error, response, body) => {
    var $ = cheerio.load(body);
    var images = $('a.preview-image img');

    var octocats = _.map(images, parseImage);
    fs.writeFile('./api/octodex.json', JSON.stringify(octocats));
});