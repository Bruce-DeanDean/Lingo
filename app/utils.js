var fs = require('fs');
var path = require('path');
// Imports the Google Cloud client library
var textToSpeech = require('@google-cloud/text-to-speech');
var uuid = require('uuidv4');

// Creates a client
var client = new textToSpeech.TextToSpeechClient({
  keyFilename: './app/keys/Hello-DCBootcamp-6664eec65f72.json'
});


module.exports = function textToSpeech(phrase, language) {
  var uniqueId = uuid().slice(-12);
// Construct the request
  const request = {
    input: {
      text: phrase,
    },
    // Select the language and SSML Voice Gender (optional)
    //list of voices: https://cloud.google.com/text-to-speech/docs/voices
    voice: {
      languageCode: language,
      ssmlGender: 'NEUTRAL',
    },
    // Select the type of audio encoding
    audioConfig: {
      audioEncoding: 'MP3',
    },
  };

  // Performs the Text-to-Speech request
  client.synthesizeSpeech(request, (err, response) => {
    if (err) {
      console.error('ERROR:', err);
      return;
    }

    // Write the binary audio content to a local file
    var filePath = path.join(__dirname, `/public/audio/${uniqueId}.mp3`)
    fs.writeFile(filePath, response.audioContent, 'binary', err => {
      if (err) {
        console.error('ERROR:', err);
        return;
      }
      console.log('Audio content written to file: output.mp3');
    });
  });
  return uniqueId;
}