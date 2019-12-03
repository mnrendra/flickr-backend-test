# AIA Back-end Developer Take Home Assignment

My ( Muhammad Rendra ) test project based on [AIA](https://github.com/thayub/test-dev/blob/master/README.md) Back-end Developer Take Home Assignment to develop a `Flickr` back-end API.

This project use `NodeJs, ExpressJs, Axios, and standard ExpressJs dependcies like cors, path, and server-icon,`.

## Deployment
and I have deploy the results in [my-ec2-instance](http://ec2-54-179-136-166.ap-southeast-1.compute.amazonaws.com:4000)

## Documentation

API documentation:<br/>
1. Feed API:<br/>
`GET /`
example: `GET /` will get public Flickr feed images<br/>
based on `https://api.flickr.com/services/feeds/photos_public.gne?format=json` API

2. Search API:<br/>
`GET /[keyword]/[image number per page]/[page]`<br/>
example: `GET /car/10/1` will get 10 images related 'car' keyword on page 1<br/>
based on `https://api.flickr.com/services/rest/?format=json&method=flickr.photos.search` API

## Related ( My Frontend test result )

The Front-End ( My Frontend Take Home Assignment ) result is in [AIA Frontend Test](https://github.com/mnrendra/flickr-frontend-test)

please review the code and feel free to comments :)
