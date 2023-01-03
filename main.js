import './style.css'
import javascriptLogo from './javascript.svg'

let url = "https://pokeapi.co/api/v2/pokemon/"
let reply = document.getElementById("reply");
let callAPI = document.getElementById("callAPI");

callAPI.onclick = function(){
  let name = document.getElementById("name");
  console.log(url + name.value);
  fetch(url + name.value )
  .then((response) => response.json())
  .then((data) => reply.innerHTML = data.id);

};