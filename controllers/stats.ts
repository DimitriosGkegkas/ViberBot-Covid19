import { Console } from "node:console";

export {}
const TextMessage = require("viber-bot").Message.Text;
const unirest = require("unirest");
const KeyboardMessage = require('viber-bot').Message.Keyboard;
const ΜΑΙΝ_KEYBOARD = require('./../views/menu').MAIN_KEYBOARD
const messages = require('./../views/messages');


module.exports = (message, response) => {



    var req = unirest("GET", "https://covid-193.p.rapidapi.com/statistics");

    req.query({
        "country": "greece",
    });
    
    req.headers({
        "x-rapidapi-key": "bd6fe504ccmsh0fab148d6fa1bf7p1b964cjsn1ea9122dfb00",
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
        "useQueryString": true
    });
    
    
    req.end(function (res) {
        console.log(res.body.response)
        if (res.error) throw new Error(res.error);
        try{
            let testsPer = 100*res.body.response[0].tests["1M_pop"]/res.body.response[0].tests["total"] ;
            
            let newCases = res.body.response[0].cases.new ;
            let cases = res.body.response[0].cases.active ;
            response.send([
                new TextMessage(messages.stats(newCases,testsPer, cases )) ,
                new KeyboardMessage(ΜΑΙΝ_KEYBOARD)
            ])
             .catch(err => {console.log(err)})
        }
        catch{
            response.send([
                new TextMessage("Συγνώμη αλλά δεν έχω λάβει ακόμα τα δεδομένα για σήμερα.😟") ,
                new KeyboardMessage(ΜΑΙΝ_KEYBOARD)
            ])
        }
    });
}




