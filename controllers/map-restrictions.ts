export {}
var RichMediaMessage = require('viber-bot').Message.RichMedia;
const KeyboardMessage = require('viber-bot').Message.Keyboard;

let msg_text= "Δείτε τον χάρτη της επικράτιας για τα μέτρα στην περιοχή σας."
const ΜΑΙΝ_KEYBOARD = require('./../views/menu').MAIN_KEYBOARD
const SAMPLE_RICH_MEDIA = require('./../views/news').SAMPLE_RICH_MEDIA
const TextMessage = require("viber-bot").Message.Text;
const messages = require('./../views/messages');


// A controller that response with the proper Info Sites to the user
module.exports = (message, response) => {
    response
    .send(new TextMessage(messages.news,ΜΑΙΝ_KEYBOARD))
    .then(()=>{
        response
        .send(new RichMediaMessage(SAMPLE_RICH_MEDIA, ΜΑΙΝ_KEYBOARD,null))
        .catch(err => {console.log(err)})
    })
    .catch(err => {console.log(err)})



}



