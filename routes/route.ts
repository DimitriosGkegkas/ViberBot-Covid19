export {}

var express = require("express");

const greeting = require("./../controllers/greeting");
const KeyboardMessage = require('viber-bot').Message.Keyboard;
const stats = require("./../controllers/stats");
const map = require("./../controllers/map-restrictions");
const main = require("./../controllers/main");
const sms = require("./../controllers/sms")
const ΜΑΙΝ_KEYBOARD = require('./../views/menu').MAIN_KEYBOARD
const TextMessage = require("viber-bot").Message.Text;

module.exports = (message, response) => {
   const msg = message.text
   switch (msg.toLowerCase('gr')) {
      case "ας αρχίσουμε":{
         main(message, response)
         break;
      }
      case "θα ήθελα πληροφορίες":{
         map(message, response)
         break;
      }
      case "ποια είναι η κατάσταση σήμερα":{
         stats(message, response)
         break;
      }
      case "μετακίνηση":{
         sms(message, response)
         break;
      }
      case "ευχαριστώ":
      case "καλή συνέχεια":
      case "εντάξει":
      {
         response
         .send([
             new TextMessage("Ελπίζω να σε βοήθησα, καλή συνεχεια.")
         ])
         .catch(err => { console.log(err) })
         break;
      }
      default:{
         if (message.trackingData.Q){
            sms(message, response)
         }
         else if(['http','https'].includes(msg.toLowerCase('gr').split(':')[0])){
            response
            .send([
                new KeyboardMessage(ΜΑΙΝ_KEYBOARD)
            ])
            .catch(err => { console.log(err) })
         }
         else{
            greeting(message, response)
         }
         break;
      }
   }

}