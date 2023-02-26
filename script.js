document.getElementById("Lyrics").addEventListener("click", fetchQuote);

function fetchQuote(){

    fetch('	https://api.adviceslip.com/advice').
    then(response => {console.log(response)
    
        return response.json();
    }).then(data=> displayData(data))
    .catch(error=>console.log(error));
}



let fetchedData;
function displayData(data){

    fetchedData=data;
    document.getElementById("quote").textContent=data.slip.advice;
}


