export {}
var RichMediaMessage = require('viber-bot').Message.RichMedia;


let msg_text= "Δείτε τον χάρτη της επικράτιας για τα μέτρα στην περιοχή σας."

const SAMPLE_RICH_MEDIA = {
    "Type":"rich_media",
    "ButtonsGroupColumns":5,
    "ButtonsGroupRows":5,
    "BgColor":"#FFFFFF",
    "Buttons":[
       {
          "Columns":5,
          "Rows":3,
          "ActionType":"open-url",
          "ActionBody":"https://covid19.gov.gr/covid-map",
          "Image":"https://images.unsplash.com/photo-1562504208-03d85cc8c23e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
       },
       {
          "Columns":5,
          "Rows":2,
          "Text":"<font color=#323232><b>Χάρτης Επικράτειας</b></font><font color=#777777><br>Δείτε τις περιοχές επικινδυνότητας και τα μέτρα που ισχύουν στην περιοχή σας</font>",
          "ActionType":"open-url",
          "ActionBody":"https://covid19.gov.gr/covid-map",
          "TextSize":"medium",
          "TextVAlign":"top",
          "TextHAlign":"left"
       },
       {
          "Columns":5,
          "Rows":3,
          "ActionType":"open-url",
          "ActionBody":"https://www.cnn.gr/tag/koronoios",
          "Image":"https://images.unsplash.com/photo-1611287158945-58d7fa81bb88?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y292aWQlMjBuZXdzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
       },
       {
          "Columns":5,
          "Rows":2,
          "Text":"<font color=#323232><b>Νέα</b></font><font color=#777777><br>Δείτε τα τελευταία νέα σχετικά με τον COVID19 στην Ελλάδα.</font>",
          "ActionType":"open-url",
          "ActionBody":"https://www.cnn.gr/tag/koronoios",
          "TextSize":"medium",
          "TextVAlign":"top",
          "TextHAlign":"left"
       },
       
    ]
 }

module.exports = (message, response) => {
    response
    .send(
        new RichMediaMessage(SAMPLE_RICH_MEDIA, null,null) 
        )
    .catch(err => {console.log(err)})

}

