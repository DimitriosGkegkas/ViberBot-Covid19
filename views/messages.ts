// All the writen messages that can be send to the user.
// Easy change of dialogs and mistake fix.

module.exports.pickANumber = '⌨️Πληκτρολογίστε \nΜετακίνηση ΚΕΝΟ και τον κωδικό μετακίνησης \n🖱️ ή επιλέξτε τον τύπο της μετακίνησης που επιθυμείτε.'

module.exports.pickAName = '⌨️👀Τι όναμα να χρησιμοποιήσω; \nΠληκτρολογίστε ή επιλέξτε Ας Αρχίσουμε για να επιστρέψετε στο menu.'

module.exports.pickAnAddrs ='📋Ποιά είναι η διεύθηνση κατοικίας σας; \nΠληκτρολογίστε ή επιλέξτε "Ας Αρχίσουμε" για να επιστρέψετε στο menu.'


module.exports.stats = (newCases,testsPer ,cases ) =>{
    let res = "Σήμερα έχουμε " +cases + " ενεργά κρούσματα 📈"
    if(newCases){
        res = res + ", με "+newCases+" νέα κρούσματα.\n"
    }
    else{
        res = res +".\n"
    }
    res = res + "Αυτή την στιγμή έχουν λάβει τουλάχιστον μία δόση του εμβολίου το " +testsPer.toFixed(1) + 
    "% του πληθυσμού της χώρας. 💉"
    return res
}



module.exports.main = "Επιλέξτε μία από τις δυνατές λειτουργίες.👩‍⚕️😊"

module.exports.greeting = "Γεια σου 😊 Είμαι εδώ για εσένα, όποτε με χριάζεσαι απλός πάτα το Ας αρχίσουμε"

module.exports.news = "👓 Δες συμαντικές πληροφορίες για την περιοχή σου καθώς και νέα σχετικά με τον Covid19 από έγκυρες πηγές. 🗺️🆕"

module.exports.sms = "Πατήστε τον παρακάτω σύνδεσμο για να στείλετε το μήνυμα μετακίνησης.🚶🏿‍♂️"