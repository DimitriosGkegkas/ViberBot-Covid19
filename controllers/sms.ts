export { }
const KeyboardMessage = require('viber-bot').Message.Keyboard;
const RichMediaMessage = require('viber-bot').Message.RichMedia;
const TextMessage = require("viber-bot").Message.Text;
const SMS_KEYBOARD = require('./../views/menu').SMS_KEYBOARD
const MAIN_KEYBOARD = require('./../views/menu').MAIN_KEYBOARD
const SAMPLE_KEYBOARD = require('./../views/menu').SAMPLE_KEYBOARD


module.exports= (message, response) => {

    const trData = message.trackingData
    console.log(trData)
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
    console.log(trData)
    


    if(!trData.NumCode){
        trData.Q = "Code"
        response
        .send([
            new TextMessage('Πληκτρολογίστε \n"Μετακίνηση {Αριθμός 1-6}" \nή επιλέξτε τον τύπο της μετακίνησης που επιθυμείτε.'),
            new KeyboardMessage(SMS_KEYBOARD)
        ],
        trData)
        .catch(err => { console.log(err) })
    }
    else if (!trData.Name){
        trData.Q = "Name"
        response
        .send([
            new TextMessage('Πληκτρολογίστε το όνομα που θέλετε να χρησιμοποιήσεται. \nή επιλέξτε Ας Αρχίσουμε για να επιστρέψετε στο menu.'),
            new KeyboardMessage(SAMPLE_KEYBOARD)
        ],
        trData)
        .catch(err => { console.log(err) })
    }
    else if (!trData.Addrs){
        trData.Q = "Addrs"
        response
        .send([
            new TextMessage('Παρακαλώ πληκτρολογίστε την διεύθηνση κατοικίας. \nή επιλέξτε Ας Αρχίσουμε για να επιστρέψετε στο menu.'),
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

