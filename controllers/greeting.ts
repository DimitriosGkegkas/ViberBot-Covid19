export { }
const KeyboardMessage = require('viber-bot').Message.Keyboard;
const RichMediaMessage = require('viber-bot').Message.RichMedia;
const TextMessage = require("viber-bot").Message.Text;
const SAMPLE_KEYBOARD = require('./../views/menu').SAMPLE_KEYBOARD
module.exports = (message, response) => {
    response
    .send([
        new TextMessage("Ευχαριστώ πολύ για το μήνυμα σου. Σε λίγο θα έχω περισσότερες δυνατότητες και θα μπορώ να απαντήσω κι όλας."),
        new KeyboardMessage(SAMPLE_KEYBOARD)
    ])
    .catch(err => { console.log(err) })
}