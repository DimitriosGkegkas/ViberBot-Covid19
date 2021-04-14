export {}
var TextMessage = require("viber-bot").Message.Text;
var express = require("express");
var KeyboardMessage = require('viber-bot').Message.Keyboard;
var RichMediaMessage = require('viber-bot').Message.RichMedia;





module.exports = (message, response) => {
   response.send(new TextMessage("Ευχαριστώ πολύ για το μήνυμα σου. Σε λίγο θα έχω περισσότερες δυνατότητες και θα μπορώ να απαντήσω κι όλας.") )
   .catch(err => {console.log(err)})
}