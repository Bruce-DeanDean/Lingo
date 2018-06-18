// This page handles the translation through the google translate api node package

var translate = require("google-translate-api");

// Input Variables
var userPhrase = "How do I get to the Eiffel Tower?"; // string input from html form
var fromLanguage = "en";
var toLanguage = "fr";

// Output Variables
var notifyMessage = "";
var errorMessage = "";
var translationOutput = "";

// send translate query with variables filled in

// TODO- Change this so that I only export a single result containing whatever message is needed!

var finalTranslateResult = translate(userPhrase, {
  from: fromLanguage,
  to: toLanguage
})
  .then(res => {
    if (
      res.from.text.autoCorrected === false &&
      res.from.text.didYouMean === false
    ) {
      // if successfully translated without any need to correct typos
      // console.log(res.text);  // output translation
      return res.text;
    } else if (
      res.from.text.autoCorrected === true ||
      res.from.text.didYouMean === true
    ) {
      return "Unable to translate - please check your entry for typos and try again.";
    }
  })
  .catch(err => {
    console.error(err);
    return err;
  });

// ===============OLD Section===================
// else if (res.from.text.autoCorrected === true) {
// // if autocorrect was used and then the translation was successful
//     // res.from.text.autoCorrected = true;
//     // tell user we translated the corrected text, which was: res.from.text.value (e.g. [How] are you? w/ correction in brackets);
//     // output the translation which is: res.text;

//     // console.log("We detected a typo, so corrected your input to: " + res.from.text.value); // auto-corrected original phrase in event of typo
//     // console.log(res.text); // output the translation

//     notifyMessage = "We detected a typo, so corrected your input to: " + res.from.text.value;
//     translationOutput = res.text;
// }

// else if (res.from.text.didYouMean === true) {
// // if result of autocorrect wasn't able to be used in translation
//     // give an error message
//     errorMessage = "Unable to translate - please check your entry for typos and try again.";

//     // for more advanced functionality, ask user if they meant res.from.text.value
//     // res.from.text.value outputs a response that has brackets around the corrected text, so to have additional
//     // functionality like an automatic re-run of the search, we'd need to remove the brackets from the string first
// }
// // =============== END OLD Section===================

// export final response

console.log(finalTranslateResult);

// console.log(notifyMessage);
// console.log(errorMessage);
// console.log(translation.translationOutput);

// module.exports = {
//     notifyMessage,
//     errorMessage,
//     translationOutput
// }
