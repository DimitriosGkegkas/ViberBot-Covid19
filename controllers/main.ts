export { }
const KeyboardMessage = require('viber-bot').Message.Keyboard;
const RichMediaMessage = require('viber-bot').Message.RichMedia;
const TextMessage = require("viber-bot").Message.Text;
const ΜΑΙΝ_KEYBOARD = require('./../views/menu').MAIN_KEYBOARD
module.exports = (message, response) => {
    response
    .send([
        new TextMessage("Επιλέξτε μία από τις δυνατές λειτουργίες."),
        new KeyboardMessage(ΜΑΙΝ_KEYBOARD)
    ])
    .catch(err => { console.log(err) })
}