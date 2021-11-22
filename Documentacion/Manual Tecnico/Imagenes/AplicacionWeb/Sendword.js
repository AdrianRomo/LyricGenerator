function sendWord(engword, percentval) {

    localStorage.setItem("EnglishWord-Value",engword); 
    localStorage.setItem("Percentage-Value",percentval); 

    fetch('http://172.17.0.2:5000/lyrics', {
        method:'POST',
        headers:{'content-type':'application/json','Access-Control-Allow-Origin':'*'},
        body:JSON.stringify({"lyric_input":engword,"percentage":percentval})
    }).then(response => {    
        return response.json()
    }).then(json => {        
        this.setState({englishword: json[0]})
    }).catch(error => {
        console.log(error)
    })
}