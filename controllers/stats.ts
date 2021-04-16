import { Console } from "node:console";

export {}
const TextMessage = require("viber-bot").Message.Text;
const unirest = require("unirest");
const KeyboardMessage = require('viber-bot').Message.Keyboard;
const ΜΑΙΝ_KEYBOARD = require('./../views/menu').MAIN_KEYBOARD
const messages = require('./../views/messages');
const rapidapiKEY = require('./../secret/api')


module.exports = (message, response) => {



    var req = unirest("GET", "https://covid-193.p.rapidapi.com/statistics");

    req.query({
        "country": "greece",
    });
    
    req.headers({
        "x-rapidapi-key": rapidapiKEY,
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
        "useQueryString": true
    });
    
    
    req.end(function (res) {
        if (res.error) throw new Error(res.error);
        try{
            let testsPer = 100*res.body.response[0].tests["1M_pop"]/res.body.response[0].tests["total"] ;
            
            let newCases = res.body.response[0].cases.new ;
            let cases = res.body.response[0].cases.active ;
            response.send([
                new TextMessage(messages.stats(newCases,testsPer, cases ),ΜΑΙΝ_KEYBOARD) ,

            ])
             .catch(err => {console.log(err)})
        }
        catch{
            response.send([
                new TextMessage("Συγνώμη αλλά δεν έχω λάβει ακόμα τα δεδομένα για σήμερα.😟",ΜΑΙΝ_KEYBOARD) ,
            ])
        }
    });
}




