var textToSpeech = require("../utils");
const translate = require("google-translate-api");

module.exports = function(app) {
  app.get("/api/phrase", function(req, res) {
    res.json({ name: "Stanley" });
  });

  app.post("/api/phrase", function(req, res) {
    var data = req.body;
    var language = data.language;
    if (language === "English") {
      language = "en-US";
    } else if (language === "French") {
      language = "fr-FR";
    } else if (language === "Japanese") {
      language = "ja-JP";
    } else if (language === "Spanish") {
      language = "es-ES";
    } else if (language === "Italian") {
      language = "it-IT";
    } else if (language === "German") {
      language = "de-DE";
    }

    var phrase = data.phrase;

    var resultPhrase = translate(phrase, { to: language.slice(0, 2) })
      .then(res => {
        var translatedPhrase = res.text;
        // console.log(res.text);

        //=> text to speech
        textToSpeech(translatedPhrase, language);
        return translatedPhrase;
      })
      .catch(err => {
        console.error(err);
      });

  resultPhrase.then(function(result) {
     // data.phrase = result;
     res.send(result); // "Stuff worked!"
    }, function(err) {
      console.log(err); // Error: "It broke"
    });
  });

  // app.get('/voice', function(req,res){
  //
  //
  //   var file = __dirname + './voice/' + output.mp3;
  //   fs.exists(file,function(exists){
  //     if(exists)
  //     {
  //       var rstream = fs.createReadStream(file);
  //       rstream.pipe(res);
  //     }
  //     else
  //     {
  //       res.send("Its a 404");
  //       res.end();
  //     }
  //
  //   });
  // });
};
