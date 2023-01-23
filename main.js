
let url = "https://pokeapi.co/api/v2/pokemon/"

let reply = document.getElementById("reply");
let callAPI = document.getElementById("callAPI");

callAPI = function() {
  let name = document.getElementById("name");
  axios.get(url + name.value)
  .then(function (response) {
    // manejar respuesta exitosa
    console.log(response);
  })
  
};

window.callAPI = callAPI;  