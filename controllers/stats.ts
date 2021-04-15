export {}
const TextMessage = require("viber-bot").Message.Text;
const unirest = require("unirest");
const KeyboardMessage = require('viber-bot').Message.Keyboard;
const ΜΑΙΝ_KEYBOARD = require('./../views/menu').MAIN_KEYBOARD



module.exports = (message, response) => {
    
    // get current day
    let ts = Date.now();
    let date_ob = new Date(ts);
    let date = date_ob.getDate().toLocaleString('en-US', { minimumIntegerDigits: 2,useGrouping: false });
    let month = (date_ob.getMonth() + 1).toLocaleString('en-US', { minimumIntegerDigits: 2,useGrouping: false });
    let year = date_ob.getFullYear();
    let currentDay =year + "-" + month + "-" + date

    var req = unirest("GET", "https://covid-193.p.rapidapi.com/history");
    console.log(currentDay)
    req.query({
        "country": "greece",
        "day": currentDay
    });
    
    req.headers({
        "x-rapidapi-key": "bd6fe504ccmsh0fab148d6fa1bf7p1b964cjsn1ea9122dfb00",
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
        "useQueryString": true
    });
    
    
    req.end(function (res) {
        if (res.error) throw new Error(res.error);
    
        let testsPer = 100*res.body.response[0].tests["1M_pop"]/res.body.response[0].tests["total"] ;
        
        let newCases = res.body.response[0].cases.new ;
        response.send([
            new TextMessage(
            "Σήμερα τα κρούσματα έχουν μεταβληθεί κατά "+newCases + 
            " και αυτή την στιγμή έχουν λάβει τουλάχιστον μία δόση του εμβολίου το " +testsPer.toFixed(1) + 
            "% του πληθυσμού της χώρας.") 
        ,
        new KeyboardMessage(ΜΑΙΝ_KEYBOARD)
            ])
         .catch(err => {console.log(err)})
    });
}




