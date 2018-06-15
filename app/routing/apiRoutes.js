var textToSpeech = require("../utils");

module.exports = function (app) {
    app
        .get("/api/phrase", function (req, res) {
            res.json({"name": "Stanley"});
        });

    app.post("/api/phrase", function (req, res) {
        var data = req.body;
        var language = data.language;
        if (language === "French") {
            language = "fr-FR"
        } else if (language === "Japanese") {
            language = "ja-JP"
        } else if (language === "Spanish") {
            language === "es-ES"
        }
        var phrase = data.phrase;

        textToSpeech(phrase, language);

        // res.sendFile('../output.mp3');
        res.send('Hello');
    });
};