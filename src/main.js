import data from './data/ghibli/ghibli.js';
/// PERSONAJES DE LAS PELICULAS /// 
import {ordenarAZ,filterDirector,filtering,
  obtenerDataTipo,filtrarGenero,filtrarEspecie, filtrarDoble,filtrar,
  ordenarPersonajes, filtrarDobleLocaciones} from './data.js';


// let itemAZ = document.getElementById("itemAZ");
// let directors = document.getElementById("directors")
const films = data.films
// ordenarAZ(films)
// console.log(films)

const filmsCountDiv = document.getElementById("filmsCountDiv")
const containerA = document.getElementById("containerA")
containerA.style.display="none"

const mainImagen = document.querySelector(".mainImagen")

function showFilms(element){
  filmsCountDiv.innerHTML = "Aquí hay un total de " + element.length + " peliculas.";
  mainImagen.innerHTML= "";
  for (const film of element){
    const elementIndex = `
    <div id="divCard" class="film">
        <div class="container">
            <div class="face">
                <div class="posterTitle">
                    <h2>${film.title}</h2>
                    <img alt="Film poster" src="${film.poster}"/>
                </div>
            </div>
            <div class="info">             
              <div class="infoFirstA">
                <p class="text">Año de Lanzamiento: ${film.release_date}</p>
                <p class="text">Director: ${film.director}</p>
                <p class="text">Productor: ${film.producer}</p>
                <p class="text">Score: ${film.rt_score}</p>  
              </div>                
            </div>
        </div>
    </div>`;
    

mainImagen.innerHTML += elementIndex;
}
}
showFilms(films)


// const posterTitle = document.querySelector(".posterTitle")

// posterTitle.addEventListener("click",function(){
//   function showFilms(element){
//     mainImagen.innerHTML= "";
//     for (const film of element){
//       const elementIndex = `
//       <div id="divCard" class="film">
//           <div class="container">
//               <div class="face">
//                 <div class="posterTitle">
//                   <h2>${film.title}</h2>
//                   <img class="face" alt="Film poster" src="${film.poster}"/>
//                 </div>
//               </div>
//               <div class="info">
//                 <div>
//                   <p class="infoSecond"><h3>Descripción:</h3><br> ${film.description}</p>
//                 </div>
//               </div>
//           </div>
//       </div>`;
//   mainImagen.innerHTML += elementIndex;
//   }
//   }
//   showFilms(films)
  
// })

const posterTitle = document.querySelector(".posterTitle")

posterTitle.addEventListener("click",function(){
  function showFilms(element){
    mainImagen.innerHTML= "";
    for (const film of element){
      const elementIndex = `
      <div id="divCard" class="film">
          <div class="container">
              <div class="face">
                <div class="posterTitle">
                  <h2>${film.title}</h2>
                  <img class="face" alt="Film poster" src="${film.poster}"/>
                </div>
              </div>
              <div class="info">
                <div>
                  <p class="infoSecond"><h3>Descripción:</h3><br> ${film.description}</p>
                </div>
              </div>
          </div>
      </div>`;
  mainImagen.innerHTML += elementIndex;
  }
  }
  showFilms(films)
  
})

itemAZ.addEventListener("change",(event)=>{
  const selectedSort = event.target.value;
  const filteredSort = ordenarAZ(films, selectedSort);
  showFilms(filteredSort);
});

director.addEventListener("change",(event)=>{
  const selectedDirector = event.target.value;
  const filteredDirector = filtering(films, "director", selectedDirector );
  showFilms(filteredDirector);
});

producer.addEventListener("change",(event)=>{
  const selectedProducer = event.target.value;
  const filteredProducer = filtering(films, "producer", selectedProducer );
  showFilms(filteredProducer);
});

date.addEventListener("change",(event)=>{
  const selectedDate = event.target.value;
  const filteredDate = filtering(films, "release_date", selectedDate );
  showFilms(filteredDate);
});

let btnReseña = document.getElementById("btnReseña")
let animaciones = document.getElementById("animaciones")

let reseña = document.getElementById("reseña")
let imgCuadro = document.getElementById("imgCuadro")

let personajes_id = document.getElementById('personajes')
let locaciones = document.getElementById('locaciones')

btnReseña.addEventListener("click",function(){ 
  animaciones.style.display="none"
  personajes_id.style.display="none"
  locaciones.style.display ="none"
  imgCuadro.style.display="block"
  reseña.style.display="block"
  containerA.style.display="block"
})

let btnAnimaciones = document.getElementById("btnAnimaciones")

btnAnimaciones.addEventListener("click",function(){ 
  imgCuadro.style.display="none"
  reseña.style.display="none"
  containerA.style.display="none"
  animaciones.style.display="block"
  personajes_id.style.display="none"
  locaciones.style.display ="none"
})



// document.getElementById("charsCountDiv").innerHTML = "Aquí hay un total de " + personajes.length + " personajes.";

// gender.addEventListener("change",(event)=>{
//   const selectedGender = event.target.value;
//     if (selectedGender === "") {
//         document.getElementById("charsCountDiv").innerHTML = "There is a total of " + personajes.length + " characters.";
//         // showCharacter(personajes);
//     } else {
//         const filtered = filtering(personajes, "gender", selectedGender);
//         showCharacter(filtered);

//         if (quantity(filtered) <= 1) {
//             document.getElementById("charsCountDiv").innerHTML = "Aquí hay " + quantity(filtered) + " " + selectedGender + " personajes de un total de " + personajes.length + " personajes.";
//         } else {
//             document.getElementById("charsCountDiv").innerHTML = "Aquí hay " + quantity(filtered) + " " + selectedGender + " personajes de un total de " + personajes.length + " personajes.";
//         }
//     }
// });






///// *************PERSONAJES********************* ///

// let animaciones = document.getElementById('animaciones')
// let personajes = document.getElementById('personajes')
// let locaciones = document.getElementById('locaciones')

let characterCards=document.getElementById("characterCards")
let charsCountDiv=document.getElementById("charsCountDiv")
let sortCharacter=document.getElementById("sortCharacter")
let gender=document.getElementById('gender')
let specie=document.getElementById('specie')
let menu_personajes = document.getElementById('menu_personajes')

let locationsCards=document.getElementById("locationsCards")
let locationsCountDiv=document.getElementById("locationsCountDiv")
let sortLocation=document.getElementById("sortLocation")
let climate=document.getElementById("climate")
let terrain=document.getElementById("terrain")
let menu_locaciones = document.getElementById('menu_locaciones')

let filters = {
  gender :"" , 
  specie :"",
  climate:"",
  terrain:""
}

function showCharacter(element,tipo){
  if(tipo=='personajes'){
    charsCountDiv.innerHTML = "Aquí hay un total de " + element.length + " personajes.";
    characterCards.innerHTML= "";
    for(let i=0 ; i< element.length; i++){
      characterCards.innerHTML+=`<div class='card'>
      <ul>
      <img src='${element[i].img}' width='200px'>
      <p>${element[i].name}</p>
      <p>Edad:${element[i].age}</p>
      <p>Género:${element[i].gender}</p>
      <p>Especie:${element[i].specie}</p>
      </ul>
      </div>`;
    }
  }else{
    locationsCountDiv.innerHTML = "Aquí hay un total de " + element.length + " locaciones.";
    locationsCards.innerHTML= "";
    for(let i=0 ; i< element.length; i++){
      locationsCards.innerHTML+=`<div class='card'>
      <ul>
      <img src='${element[i].img}' width='200px'>
      <p>${element[i].name}</p>
      <p>Clima:${element[i].climate}</p>
      <p>Terreno:${element[i].terrain}</p>
      </ul>
      </div>`;
    }
  }
}

function showSection(section1,section2,section3,section4,data,tipo){
  section1.style.display ='none'
  section2.style.display ='none'
  section3.style.display = 'none'
  section4.style.display ='block'
  showCharacter(data,tipo)
}

/// PERSONAJES EN PANTALLA ///
menu_personajes.addEventListener("click",(event)=>{
  const tipo = 'personajes'
  const dataPersonajes = obtenerDataTipo(films,tipo)
  showSection(animaciones,locaciones,reseña,personajes_id,dataPersonajes,tipo);
  console.log('revisado',dataPersonajes)
})

/// PERSONAJES ORDENADOS EN PANTALLA A-Z ///
sortCharacter.addEventListener("change",(event)=>{
  const tipo = 'personajes'
  const dataPersonajes = obtenerDataTipo(films,tipo)
  ordenarPersonajes(dataPersonajes);
  showCharacter(dataPersonajes,tipo);
});

/// PERSONAJES FILTRADOS EN PANTALLA ///

gender.addEventListener("change",(event)=>{
  const selectedGender = event.target.value;
  filters.gender = selectedGender
  const dataPersonajes = obtenerDataTipo(films,'personajes')
  if (filters.specie == ''){
    const filteredGender = filtrar(dataPersonajes, filters.gender,'gender');
    showCharacter(filteredGender,'personajes');
  }
  else{
    const filteredGender = filtrarDoble(dataPersonajes, filters.gender,filters.specie,'gender','specie');
    showCharacter(filteredGender,'personajes');
  }
});

specie.addEventListener("change",(event)=>{
  const selectedSpecie = event.target.value;
  filters.specie = selectedSpecie
  const dataPersonajes = obtenerDataTipo(films,'personajes')
  if (filters.gender == ''){
    const filteredSpecie = filtrar(dataPersonajes, filters.specie ,'specie');
    showCharacter(filteredSpecie,'personajes');
  }
  else{
    const filteredSpecie = filtrarDoble(dataPersonajes, filters.gender,filters.specie,'gender','specie');
    showCharacter(filteredSpecie,'personajes');
  }
});





///////***** LOCACIONES ******///////////////

/// LOCACIONES EN PANTALLA ///

menu_locaciones.addEventListener("click",(event)=>{
  const tipo = 'locaciones'
  const dataPersonajes = obtenerDataTipo(films,tipo)
  showSection(animaciones,personajes_id,reseña,locaciones,dataPersonajes,tipo);
  console.log('revisado',dataPersonajes)
})

/// LOCACIONES ORDENADAS EN PANTALLA ///

sortLocation.addEventListener("change",(event)=>{
  // const selectedSort = event.target.value;
  // const filteredSort = ordenarPersonajes(personajes);
  const tipo = 'locaciones'
  const dataPersonajes = obtenerDataTipo(films,tipo)
  ordenarPersonajes(dataPersonajes);
  showCharacter(dataPersonajes,tipo);
});

/// LOCACIONES FILTRADAS EN PANTALLA ///

climate.addEventListener("change",(event)=>{
  const selectedClimate = event.target.value;
  filters.climate = selectedClimate
  const tipo = 'locaciones'
  const dataPersonajes = obtenerDataTipo(films,tipo)
  const filteredClimate = filtrarDobleLocaciones(dataPersonajes, filters);
  showCharacter(filteredClimate,tipo);
});

terrain.addEventListener("change",(event)=>{
  const selectedTerrain = event.target.value;
  filters.terrain = selectedTerrain
  const tipo = 'locaciones'
  const dataPersonajes = obtenerDataTipo(films,tipo)
  const filteredTerrain = filtrarDobleLocaciones(dataPersonajes, filters);
  showCharacter(filteredTerrain,tipo);
});

























