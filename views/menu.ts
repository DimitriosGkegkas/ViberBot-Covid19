// All the menus and keyboards used.
// Easy change of the app look and feel by just chaning this file.

module.exports.SAMPLE_KEYBOARD = {
	"Type": "keyboard",
	"InputFieldState":"regular",
	"Revision": 1,
	"BgColor": "#172128",
	"Buttons": [
		{

			"Columns": 6,
			"Rows": 2,
            "Text":"<font color=”#9086DB” size=28><b>Ας Αρχίσουμε</b></font>",
			"BgLoop": true,
			"ActionType": "reply",
			"ActionBody": "Ας Αρχίσουμε",
			"TextVAlign":"middle",
			"TextHAlign":"middle",

		}
	]
};


module.exports.MAIN_KEYBOARD = {
	"Type": "keyboard",
	"InputFieldState":"regular",
	"Revision": 1,
	"BgColor": "#172128",
	"Buttons": [
		{
			"Columns": 2,
			"Rows": 2,

            "Text":"<font color=”#9086DB” size=14><b>Πληροφορίες</b></font>",
			"Image":"https://i.ibb.co/4FRMnDZ/1.jpg",
			"BgLoop": true,
			"ActionType": "reply",
			"ActionBody": "Θα ήθελα πληροφορίες",

		},
        {
			"Columns": 2,
			"Rows": 2,
			"Image":"https://i.ibb.co/82BptLr/2.jpg",
            "Text":"<font color=”#9086DB” size=14><b>Σημερινά Δεδομένα</b></font>",
			"BgLoop": true,
			"ActionType": "reply",
			"ActionBody": "Ποια είναι η κατάσταση σήμερα",

		},
        {
			"Columns": 2,
			"Rows": 2,
			"Image":"https://i.ibb.co/ZhNZdV7/3.jpg",
            "Text":"<font color=”#9086DB” size=14><b>SMS μετακίνησης</b></font>",
			"BgLoop": true,
			"ActionType": "reply",
			"ActionBody": "Μετακίνηση",

		}
	]
};



module.exports.SMS_KEYBOARD = {
	"Type": "keyboard",
	"Revision": 1,
	"BgColor": "#172128",
	"Buttons": [
		{
			"Columns": 2,
			"Rows": 1,
			"BgMediaType" : "picture",
			
			"BgMedia": "https://i.ibb.co/KNVb5dk/1.jpg"
	,
			"BgColor": "#e6f5ff",
            "Text":"<font  size=18><b>Ιατρικά</b></font>",
			"BgMediaScaleType":"crop",

			"ActionType": "reply",
			"ActionBody": "μετακίνηση 1",
			"TextVAlign":"top",
			"TextSize": "large",
				},
        {
			"Columns": 2,
			"Rows": 1,
            "Text":"<font  size=18><b>Ψώνια</b></font>",
			"BgLoop": true,
			"BgMediaScaleType":"fit",
			"ActionType": "reply",
			"TextVAlign":"top",
			"TextSize": "large",
			"ActionBody": "μετακίνηση 2",
			"BgMedia":"https://i.ibb.co/q9Vn12k/2.jpg"
		},
        {
			"Columns": 2,
			"Rows": 1,
			"BgColor": "#e6f5ff",
            "Text":"<font  size=18><b>Τράπεζα</b></font>",
			"BgLoop": true,
			"ActionType": "reply",
			"TextVAlign":"top",
			"TextSize": "large",
			"ActionBody": "μετακίνηση 3",
			"BgMedia":"https://i.ibb.co/0tsB1VD/3.jpg"
		},
		{
			"Columns": 2,
			"Rows": 1,
			"BgColor": "#e6f5ff",
            "Text":"<font  size=18><b>Παροχή Βοήθειας</b></font>",
			"BgLoop": true,
			"ActionType": "reply",
			"TextVAlign":"top",
			"TextSize": "large",
			"ActionBody": "μετακίνηση 4",
			"BgMedia" : "https://i.ibb.co/HYsXz2r/4.jpg"
		},
        {
			"Columns": 2,
			"Rows": 1,
			"BgColor": "#e6f5ff",
            "Text":"<font  size=18><b>Γονική Μετακίνηση</b></font>",
			"BgLoop": true,
			"ActionType": "reply",
			"TextSize": "large",
			"TextVAlign":"top",
			"ActionBody": "μετακίνηση 5",
			"BgMedia" :"https://i.ibb.co/YQPK7N7/5.jpg"
		},
        {
			"Columns": 2,
			"Rows": 1,
			"BgColor": "#e6f5ff",
            "Text":"<font  size=18><b>Σωματική Άσκηση</b></font>",
			"BgLoop": true,
			"ActionType": "reply",
			"TextVAlign":"top",
			"TextSize": "large",
			"ActionBody": "μετακίνηση 6",
			"BgMedia": "https://i.ibb.co/qjVnSLn/6.jpg"
		}
	]
};