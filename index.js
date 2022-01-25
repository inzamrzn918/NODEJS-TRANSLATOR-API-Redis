const express = require("express");
const bodyParser = require("body-parser");
const redis = require("redis");
const axios = require("axios").default;




let app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


const PORT = process.env.PORT || 5000;
const RED_PORT = process.env.PORT || 6379;

const client = redis.createClient({ host: "127.0.0.1", post: RED_PORT, legacyMode: true });
client.connect();
client.on('connect', () => {
    console.log('Connected!');
});

app.get('/', (req, res) => {
    res.send({ message: "Method Not Allowed" });
})

app.post('/', (req, res) => {
    const hdr = req.headers;
    if (hdr.api_host === undefined || hdr.host_url === undefined || hdr.api_key === undefined || hdr.api_method === undefined) {
        res.send({ error: true, message: "unauthorized" });
        return
    } else {
        let text = req.body.text;
        let lang_source = req.body.source;
        let lang_target = req.body.target;
        let langpair = lang_source + "|" + lang_target;
        let key = req.body.text + "--" + langpair.replace(/\s/g, "");

        client.get(key, function (err, reply) {
            if (!err && reply) {
                res.send({ data: JSON.parse(reply), message: "Data from cache" });
                return;
            } else {

                const params = { langpair: langpair, q: text, mt: '1', onlyprivate: '0', de: 'a@b.c' };
                var options = {
                    method: hdr.api_method,
                    url: hdr.host_url,
                    params: params,
                    headers: {
                        'x-rapidapi-host': hdr.api_host,
                        'x-rapidapi-key': hdr.api_key
                    }
                };



                axios.request(options).then((response) => {
                    let data = response.data.responseData;
                    client.set(key, JSON.stringify(data), function (err, reply) {
                        console.log(reply); // OK
                    });
                    res.send({ data, message: "Data from server" });
                    return
                });
            }
        });


    }
})


app.listen(PORT, () => {
    console.log(`Running Server at port ${PORT}`);
})
