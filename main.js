
let url = "https://pokeapi.co/api/v2/pokemon/"

let reply = document.getElementById("reply");
let callAPI = document.getElementById("callAPI");
let info = document.getElementById("nani");

callAPI = function() {
  // let name = document.getElementById("name");
  axios.get(url + "vaporeon")
  .then(function (response) {
    // manejar respuesta exitosa
    console.log(response);
  })
  .catch(function (error) {
    // manejar error
    console.log(error);
  })
  .then(function () {
    // siempre sera executado
  });
  info.innerHTML = "¿Sabías que vaporeon ...."
};

window.callAPI = callAPI;  