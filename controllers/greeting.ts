export { }
const KeyboardMessage = require('viber-bot').Message.Keyboard;
const RichMediaMessage = require('viber-bot').Message.RichMedia;
const TextMessage = require("viber-bot").Message.Text;
const SAMPLE_KEYBOARD = require('./../views/menu').SAMPLE_KEYBOARD
const messages = require('./../views/messages');

// A controller responding with a welcome message
module.exports = (message, response) => {
    response
    .send([
        new TextMessage(messages.greeting,SAMPLE_KEYBOARD)
    ])
    .catch(err => { console.log(err) })
}