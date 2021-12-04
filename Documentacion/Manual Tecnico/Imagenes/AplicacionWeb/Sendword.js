function sendWord(engword, percentval) {

    localStorage.setItem("EnglishWord-Value",engword); 
    localStorage.setItem("Percentage-Value",percentval); 

    fetch('https://api.neuralyrics.com/lyrics', {
        method:'POST',
        headers:{'content-type':'application/json','Access-Control-Allow-Origin':'*'},
        body:JSON.stringify({"lyric_input":engword,"percentage":percentval})
    }).then(response => {    
        return response.json()
    }).then(json => {        

        var wholeAnswer= JSON.stringify(json);
        var resp= JSON.parse(wholeAnswer);
        console.log('Data to work with: ' + resp);

    }).catch(error => {
        console.log(error);
    })
}