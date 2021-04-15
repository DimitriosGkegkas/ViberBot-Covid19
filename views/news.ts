const sites_data = require('./../model/news')

let SAMPLE_RICH_MEDIA =
{
   "Type":"rich_media",
   "ButtonsGroupColumns":5,
   "ButtonsGroupRows":5,
   "BgColor":"#FFFFFF",
   "Buttons":[]
}

for  (let item of sites_data){
   SAMPLE_RICH_MEDIA.Buttons.push(
      {
         "Columns":5,
         "Rows":3,
         "ActionType":"open-url",
         "ActionBody":item.url,
         "Image":item.image
      }
   )
   SAMPLE_RICH_MEDIA.Buttons.push(
      {
         "Columns":5,
         "Rows":2,
         "Text":item.text,
         "ActionType":"open-url",
         "ActionBody":item.url,
         "TextSize":"medium",
         "TextVAlign":"top",
         "TextHAlign":"left"
      }
   )

}

module.exports.SAMPLE_RICH_MEDIA = SAMPLE_RICH_MEDIA;

