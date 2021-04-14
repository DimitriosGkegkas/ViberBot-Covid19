export {}
const KeyboardMessage = require('viber-bot').Message.Keyboard;
const RichMediaMessage = require('viber-bot').Message.RichMedia;
const TextMessage = require("viber-bot").Message.Text;
module.exports = (message, response) => {
    response.send(new TextMessage("Ευχαριστώ πολύ για το μήνυμα σου. Σε λίγο θα έχω περισσότερες δυνατότητες και θα μπορώ να απαντήσω κι όλας.") )
         .catch(err => {console.log(err)})
}