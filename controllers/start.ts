export {}
const KeyboardMessage = require('viber-bot').Message.Keyboard;
const RichMediaMessage = require('viber-bot').Message.RichMedia;
const TextMessage = require("viber-bot").Message.Text;
module.exports = (message, response) => {
    response.send(new TextMessage("Η αρχή") )
         .catch(err => {console.log(err)})
}