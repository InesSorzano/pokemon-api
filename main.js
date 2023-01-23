
let url = "https://pokeapi.co/api/v2/pokemon/"

let reply = document.getElementById("reply");
let callAPI = document.getElementById("callAPI");
let info = document.getElementById("nani");
let counter = 1;

callAPI = async function() {
  let name = document.getElementById("name");
  
  try {
    const response = await axios.get(url + name.value);
    console.log(response);
    switch(name.value){
      case "vaporeon":
        if(!window.localStorage.getItem("counter")){
          window.localStorage.setItem("counter",counter);
        }else{
          // ParseInt porque el muy troll lo guarda como string
          window.localStorage.setItem("counter",parseInt(window.localStorage.getItem("counter")) +  counter);
        }
        console.log(window.localStorage.getItem("counter"));
        switch (parseInt(window.localStorage.getItem("counter"))){
          case 34:
            console.log("oh no");
            info.innerHTML = '¿Sabías que vaporeon ... <img id="down" src="caret-down-circle.svg"></img>';
  
            let app = document.getElementById("app");
  
            let down = document.getElementById("down");
            down.style.display="inline";
            down.onclick = function(){
              var img = document.createElement("img");
              img.src="no.png";
              img.classList.add("center");
              document.body.appendChild(img);
              app.style.display="none";
            };
            break;
          default:
            info.innerHTML =  response.data.id;

        }
        break;
      default:
        console.log(response);
        info.innerHTML =  response.data.id;
    }
  } catch (error) {
    console.error(error);
  }

  
};

window.callAPI = callAPI;  