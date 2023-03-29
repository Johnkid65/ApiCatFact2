

const api = () =>{
    var length = document.getElementById('apilength').value;

    return fetch(`https://catfact.ninja/fact?max_length=${length}`)
        .then(function (response) {
            // The API call was successful!
            console.log("success!", response);
            return response.json();
            
            //var mySpan = document.getElementById("myLabel");
            //mySpan.innerHTML =  "Hello 2";
        })
        .then(function (data) {
            return `${data.fact}! .... ${data.length}`
        })
        .catch(function (err) {
            // There was an error
            console.warn("Something went wrong.", err);
        });
        
     

};
 
export default api;


