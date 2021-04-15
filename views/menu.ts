module.exports.SAMPLE_KEYBOARD = {
	"Type": "keyboard",
	"Revision": 1,
	"Buttons": [
		{
			"Columns": 6,
			"Rows": 1,
			"BgColor": "#e6f5ff",
            "Text":"Ας Αρχήσουμε",
			"BgLoop": true,
			"ActionType": "reply",
			"ActionBody": "Ας Αρχήσουμε"
		}
	]
};


module.exports.MAIN_KEYBOARD = {
	"Type": "keyboard",
	"Revision": 1,
	"Buttons": [
		{
			"Columns": 2,
			"Rows": 2,
			"BgColor": "#e6f5ff",
            "Text":"Πληροφορίες",
			"BgLoop": true,
			"ActionType": "reply",
			"ActionBody": "Θα ήθελα πληροφορίες"
		},
        {
			"Columns": 2,
			"Rows": 2,
			"BgColor": "#e6f5ff",
            "Text":"Σημερινά Δεδομένα",
			"BgLoop": true,
			"ActionType": "reply",
			"ActionBody": "Ποια είναι η κατάσταση σήμερα"
		},
        {
			"Columns": 2,
			"Rows": 2,
			"BgColor": "#e6f5ff",
            "Text":"SMS Μετακίνησης",
			"BgLoop": true,
			"ActionType": "reply",
			"ActionBody": "Θα ήθελα να στείλω sms για μετακίνηση"
		}
	]
};