'use strict';

var watson = require('watson-developer-cloud');

var languageTranslator = watson.language_translator({
  url: 'https://gateway.watsonplatform.net/language-translator/api',
  version: 'v2',
  username: 'cd4c1355-f4e9-4afa-91d3-315f2b07cb37',
  password: '15XtV6Pp5gPx'
});

module.exports.translate = function(req, res, next) {
  var params = {
    text: req.body.text,
    model_id: 'en-es'
  };
  languageTranslator.translate(params, function(error, result) {
    if (error)
      return next(error);
    else
      return res.json(result);
  });
};
