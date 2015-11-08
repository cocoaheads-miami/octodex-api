## GitHub Octodex API

Parse HTML from http://octodex.github.com/ and generate a JSON file.

Part of the _React Native for iOS_ presentation at CocoaHeads Miami.

## Packages

* request - request a web page
* cheerio - parse HTML
* lodash - map parsed HTML to JSON
* http-server - serve JSON for clients

## Run server

```
$ cd api
$ open http://localhost:8080/octodex.json && http-server
```

## Generate JSON

```
$ node scraper.js
```

