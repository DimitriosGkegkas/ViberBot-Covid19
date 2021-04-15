export {}

var express = require("express");

const greeting = require("./../controllers/greeting");
const KeyboardMessage = require('viber-bot').Message.Keyboard;
const stats = require("./../controllers/stats");
const map = require("./../controllers/map-restrictions");
const main = require("./../controllers/main");
const sms = require("./../controllers/sms")
const ΜΑΙΝ_KEYBOARD = require('./../views/menu').MAIN_KEYBOARD

module.exports = (message, response) => {
   const msg = message.text
   switch (msg.toLowerCase('gr')) {
      case "ας αρχήσουμε":{
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
      case "":{
         break;
      }
      case "":{
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