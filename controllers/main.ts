export { }
const KeyboardMessage = require('viber-bot').Message.Keyboard;
const TextMessage = require("viber-bot").Message.Text;
const ΜΑΙΝ_KEYBOARD = require('./../views/menu').MAIN_KEYBOARD
const messages = require('./../views/messages');

module.exports = (message, response) => {
    response
    .send([
        new TextMessage(messages.main,ΜΑΙΝ_KEYBOARD),
    ])
    .catch(err => { console.log(err) })
}