const express = require('express');
const getTutorial = require('./lib/service/getTutorial');
const getTutorials = require('./lib/service/getTutorials');
const getTutorialsBySearchTerm = require('./lib/service/getTutorialsBySearchTerm');
const getTutorialsByTags = require('./lib/service/getTutorialsByTags');
const getTags = require('./lib/service/getTags');
const serverData =  require('./lib/data/serverdata');
const app = express();
const apiURI = process.env.VID_APP_API_URL;

app.use((req, res, next) => { 
    res.set('Access-Control-Allow-Origin', "*");
    res.set('Access-Control-Allow-Headers', "*");
    next();
})

app.get('/tutorial/:id', (req, res) => {
    serverData(apiURI).then((data) =>{
        const tutorial = getTutorial(req.params.id, data);
        res.json(tutorial);
    }); 
});

app.get('/tutorials', (req, res) => {

    serverData(apiURI).then((data) =>{
        let tutorials = [];
        
        if(req.query && req.query["searchterm"] !== undefined) {
            tutorials = getTutorialsBySearchTerm(req.query["searchterm"], data);
        }
        else if(req.query && req.query["tags"] !== undefined) {
            tutorials = getTutorialsByTags(req.query["tags"], data);
        }
        else {
            tutorials = getTutorials(data);
        }
         
        res.json(tutorials);
    }); 
});

app.get('/tags', (req, res) => {
    serverData(apiURI).then((data) =>{
        const tags = getTags(data);
        res.json(tags);
    }); 
});

var server = app.listen(3001, () => {

   var host = server.address().address
   var port = server.address().port
   
   console.log("listening at http://%s:%s", host, port)
});