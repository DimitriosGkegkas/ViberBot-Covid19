export { }
const KeyboardMessage = require('viber-bot').Message.Keyboard;
const RichMediaMessage = require('viber-bot').Message.RichMedia;
const TextMessage = require("viber-bot").Message.Text;
const SMS_KEYBOARD = require('./../views/menu').SMS_KEYBOARD
const MAIN_KEYBOARD = require('./../views/menu').MAIN_KEYBOARD
const SAMPLE_KEYBOARD = require('./../views/menu').SAMPLE_KEYBOARD
const messages = require('./../views/messages');

module.exports= (message, response) => {

    const trData = message.trackingData

    switch (trData.Q){
        case ("Code"):{
            trData.NumCode = message.text.split(' ')[1]
            break;
        }
        case ("Name"):{
            trData.Name = message.text
            break;
        }
        case ("Addrs"):{
            trData.Addrs = message.text
            break;
        }
        default:{
            break;
        }
    } 


    if(!trData.NumCode){
        trData.Q = "Code"
        response
        .send([
            new TextMessage(messages.pickANumber),
            new KeyboardMessage(SMS_KEYBOARD)
        ],
        trData)
        .catch(err => { console.log(err) })
    }
    else if (!trData.Name){
        trData.Q = "Name"
        response
        .send([
            new TextMessage(messages.pickAName),
            new KeyboardMessage(SAMPLE_KEYBOARD)
        ],
        trData)
        .catch(err => { console.log(err) })
    }
    else if (!trData.Addrs){
        trData.Q = "Addrs"
        response
        .send([
            new TextMessage(messages.pickAnAddrs),
            new KeyboardMessage(SAMPLE_KEYBOARD)
        ],
        trData)
        .catch(err => { console.log(err) })
    }else{
        let name = trData.Name.replace(' ', '%20');
        let addrs = trData.Addrs.replace(' ', '%20');
        let msg = "sms:13033&body="+trData.NumCode+"%20"+name+"%20"+addrs
        response
        .send([
            new TextMessage(msg) ,
            new KeyboardMessage(MAIN_KEYBOARD)
        ])
        .catch(err => { console.log(err) })
    }
}

