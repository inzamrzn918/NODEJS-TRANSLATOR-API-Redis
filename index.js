const express = require("express");
const bodyParser = require("body-parser");
const redis = require("redis");
const axios = require("axios").default;
const { pro, promisify } = require("util");




let app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


const PORT = process.env.PORT || 5000;
const RED_PORT = process.env.PORT || 6379;

const client = redis.createClient({host: "127.0.0.1", post : RED_PORT, legacyMode: true});
client.connect();
client.on('connect', ()=> {
    console.log('Connected!');
});

client.set('framework', 'ReactJS');

const GETFN = promisify(client.get).bind(client);
const SETFN = promisify(client.set).bind(client);

app.get('/', (req, res) => {
    res.send("Hello");
})

app.post('/', (req, res, next) => {
   
    let text = req.body.text;
    let lang_source = req.body.source;
    let lang_target = req.body.target;
    let langpair = lang_source+"|"+lang_target;
    let key = req.body.text + "--" + langpair.replace(/\s/g, "");

    client.get(key, function(err, reply) {
       if(!err && reply){
           res.send(JSON.parse(reply));
           return;
       }
    });

    var options = {
        method: 'GET',
        url: 'https://translated-mymemory---translation-memory.p.rapidapi.com/api/get',
        params: { langpair: langpair, q: text, mt: '1', onlyprivate: '0', de: 'a@b.c' },
        headers: {
            'x-rapidapi-host': 'translated-mymemory---translation-memory.p.rapidapi.com',
            'x-rapidapi-key': ''
        }
    };

    axios.request(options).then((response) => {
        let data = response.data.responseData;
        client.set(key, JSON.stringify(data), function(err, reply) {
            console.log(reply); // OK
        });
        res.end(data)
    }).catch((error) => {
        res.end(error);
    });

})


app.listen(PORT, () => {
    console.log(`Running Server at port ${PORT}`);
})
