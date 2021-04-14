export {}

var express = require("express");

const greeting = require("./../controllers/greeting");
const start = require("./../controllers/start");




module.exports = (message, response) => {
   const msg = message.text
   switch (msg.toLowerCase()) {
      case "ας ξεκινήσουμε":{
         start(message, response)
         break;
      }
      case "":{
         break;
      }
      case "":{
         break;
      }
      case "":{
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