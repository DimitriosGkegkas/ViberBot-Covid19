export {}
const KeyboardMessage = require('viber-bot').Message.Keyboard;
const TextMessage = require("viber-bot").Message.Text;
const SAMPLE_KEYBOARD = require('./../views/menu').SAMPLE_KEYBOARD

// A controller that only sends the basic "Ας Αρχίσουμε" keyboard
module.exports = (message, response) => {
    response
    .send(new KeyboardMessage(SAMPLE_KEYBOARD) )
    .catch(err => {console.log(err)})
}