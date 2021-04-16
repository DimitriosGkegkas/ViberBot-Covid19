module.exports.SAMPLE_KEYBOARD = {
	"Type": "keyboard",
	"Revision": 1,
	"BgColor": "#172128",
	"Buttons": [
		{

			"Columns": 6,
			"Rows": 1,
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
			"Rows": 2,
			"BgColor": "#e6f5ff",
            "Text":"Ιατρικά",
			"BgLoop": true,
			"ActionType": "reply",
			"ActionBody": "μετακίνηση 1",
			"TextVAlign":"top",
			"Image": "https://as2.ftcdn.net/jpg/03/31/14/09/500_F_331140980_zR09EB3TtXQb2VoFtw72pZkb1unY7Nfw.jpg"
		},
        {
			"Columns": 2,
			"Rows": 2,
			"BgColor": "#e6f5ff",
            "Text":"Ψώνια",
			"BgLoop": true,
			"ActionType": "reply",
			"TextVAlign":"top",
			"ActionBody": "μετακίνηση 2",
			"Image":"https://as2.ftcdn.net/jpg/02/25/32/51/500_F_225325173_p0ENO2Us00TqLmPpMjBW8DnLvprCFvBu.jpg"
		},
        {
			"Columns": 2,
			"Rows": 2,
			"BgColor": "#e6f5ff",
            "Text":"Τράπεζα",
			"BgLoop": true,
			"ActionType": "reply",
			"TextVAlign":"top",
			"ActionBody": "μετακίνηση 3",
			"Image":"https://as2.ftcdn.net/jpg/00/68/53/15/500_F_68531513_VSBYDeeWSx5yPIH3TxgYxonbMag3qbkC.jpg"
		},
		{
			"Columns": 2,
			"Rows": 2,
			"BgColor": "#e6f5ff",
            "Text":"Παροχή Βοήθειας",
			"BgLoop": true,
			"ActionType": "reply",
			"TextVAlign":"top",
			"ActionBody": "μετακίνηση 4",
			"Image" : "https://as1.ftcdn.net/jpg/03/61/69/72/500_F_361697227_CsqxnH4qrV3QvXGyjK4kVYKJ9lt9qGVs.jpg"
		},
        {
			"Columns": 2,
			"Rows": 2,
			"BgColor": "#e6f5ff",
            "Text":"Γονική Μετακίνηση",
			"BgLoop": true,
			"ActionType": "reply",
			"TextVAlign":"top",
			"ActionBody": "μετακίνηση 5",
			"Image" :"https://as2.ftcdn.net/jpg/03/13/55/49/500_F_313554915_HgdqOZIv4KvS1KiiDqxvl3Tx20WZTvib.jpg"
		},
        {
			"Columns": 2,
			"Rows": 2,
			"BgColor": "#e6f5ff",
            "Text":"Σωματική Άσκηση",
			"BgLoop": true,
			"ActionType": "reply",
			"TextVAlign":"top",
			"ActionBody": "μετακίνηση 6",
			"Image": "https://as2.ftcdn.net/jpg/01/19/79/05/500_F_119790502_yBYCVd6xou2fS5G3FbRCcFtku8Ijm9ya.jpg"
		}
	]
};