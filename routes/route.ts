export {}

var express = require("express");

const greeting = require("./../controllers/greeting");

const stats = require("./../controllers/stats");
const map = require("./../controllers/map-restrictions");
const main = require("./../controllers/main");
const sms = require("./../controllers/sms")

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
         else{
            greeting(message, response)
         }
         break;
      }
   }

}