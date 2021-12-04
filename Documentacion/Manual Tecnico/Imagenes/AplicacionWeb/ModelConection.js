function myFunFactsFunction(){
    var position= getRandomInt(0, funfacts.length - 1);

    myFunFactsTypewriter('myTextReceived', position, 0);
}

function myFunFactsTypewriter(receivedId, arrayPosition, textPosition){
    document.getElementById(receivedId).innerHTML = funfacts[arrayPosition].substring(0, textPosition) + '<span>\u25AE</span>';
    
    if((textPosition++ < funfacts[arrayPosition].length) && !rebooted){
        setTimeout(myFunFactsTypewriter.bind(null, receivedId, arrayPosition, textPosition), speed);
    }else{
        document.getElementById(receivedId).innerHTML = funfacts[arrayPosition].substring(0, textPosition);
    }
}