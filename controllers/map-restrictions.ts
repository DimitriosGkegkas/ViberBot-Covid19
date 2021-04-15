export {}
var RichMediaMessage = require('viber-bot').Message.RichMedia;
const KeyboardMessage = require('viber-bot').Message.Keyboard;

let msg_text= "Δείτε τον χάρτη της επικράτιας για τα μέτρα στην περιοχή σας."
const ΜΑΙΝ_KEYBOARD = require('./../views/menu').MAIN_KEYBOARD
const SAMPLE_RICH_MEDIA = require('./../views/news').SAMPLE_RICH_MEDIA


module.exports = (message, response) => {
    response
    .send([
        new RichMediaMessage(SAMPLE_RICH_MEDIA, null,null) ,
        new KeyboardMessage(ΜΑΙΝ_KEYBOARD)
    ])
    .catch(err => {console.log(err)})

}



