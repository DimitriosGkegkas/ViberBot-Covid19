export {}

var express = require("express");

const greeting = require("./../controllers/greeting");

const stats = require("./../controllers/stats");
const map = require("./../controllers/map-restrictions");



module.exports = (message, response) => {
   const msg = message.text
   switch (msg.toLowerCase()) {
      case "ας ξεκινήσουμε":{
         greeting(message, response)
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
      case "δ":{
         break;
      }
      case "":{
         break;
      }
      case "":{
         break;
      }
      default:{
         greeting(message, response)
         break;
      }
   }

}