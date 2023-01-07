function getBotResponse(input) {
    if (input == "") {
        return "Please say something!";
    }
    else if (input == "diarrhoea") 
    {
        return "Should I recommend you medications?";
    } 
    else if (input == "yes") 
    {
        return "Medications- Ciprofloxacin Tablets, Rifaximin Tablets, Loperamide Hydrochloride Tablets";
    }
    else if (input == "home remedies for diarrhoea") 
    {
        return "Home remedies- Mixing of one or two bananas with ghee, a pinch of cardamom and nutmeg is helpful for the management of loose motions by binding stools as it is rich in potassium content. Also, Eating cooked rice with yoghurt with ghee is also helpful for dealing with loose motions.";
    }
    else {
        return "Get well soon!";
    }
}