import data from './data/ghibli/ghibli.js';
import {obtenerDataTipo, filtrarDoble, filtrar, ordenarPersonajes} from './data.js';

const films = data.films

///// **********SECCIONES********** ///
// let reseña = document.getElementById("id_reseña")
let animaciones=document.getElementById('animaciones')
let personajes_id=document.getElementById('personajes')
let locaciones=document.getElementById('locaciones')

///// **********ANIMACIONES********** ///
let animationCards=document.getElementById("animationCards")
let animationCountDiv=document.getElementById("animationCountDiv")
let sortAnimation=document.getElementById("sortAnimation")
let director=document.getElementById('director')
let producer=document.getElementById('producer')
let menu_animaciones=document.getElementById('menu_animaciones')

///// **********PERSONAJES********** ///
let characterCards=document.getElementById("characterCards")
let charsCountDiv=document.getElementById("charsCountDiv")
let sortCharacter=document.getElementById("sortCharacter")
let gender=document.getElementById('gender')
let specie=document.getElementById('specie')
let menu_personajes=document.getElementById('menu_personajes')

///// *************LOCACIONES********************* ///
let locationsCards=document.getElementById("locationsCards")
let locationsCountDiv=document.getElementById("locationsCountDiv")
let sortLocation=document.getElementById("sortLocation")
let climate=document.getElementById("climate")
let terrain=document.getElementById("terrain")
let menu_locaciones=document.getElementById('menu_locaciones')

///// *************FILTROS********************* ///
let filters = {
  director:"",
  producer:"",
  gender :"" , 
  specie :"",
  climate:"",
  terrain:""
}

///// *************FUNCIONES********************* ///
function showCharacter(element,tipo){
  if(tipo=='personajes'){
    charsCountDiv.innerHTML = "Aquí hay un total de " + element.length + " personajes.";
    characterCards.innerHTML= "";
    for(let i=0 ; i< element.length; i++){
      characterCards.innerHTML+=`<div class='card'>
      <ul>
      <img src='${element[i].img}' width='200px' height='250px'>
      <p>${element[i].name}</p>
      <p>Edad:${element[i].age}</p>
      <p>Género:${element[i].gender}</p>
      <p>Especie:${element[i].specie}</p>
      </ul>
      </div>`;
    }
  }else if(tipo=='animaciones'){
    animationCountDiv.innerHTML = "Aquí hay un total de " + element.length + " animaciones.";
    animationCards.innerHTML= "";
    for(let i=0 ; i< element.length; i++){
      animationCards.innerHTML+=`<div class='card'>
      <ul>
      <img src='${element[i].poster}' width='200px' height='250px'>
      <p>${element[i].title}</p>
      <p>Director:${element[i].director}</p>
      <p>Productor:${element[i].producer}</p>
      <p>Lanzamiento:${element[i].release_date}</p>
      <p>Ranking:${element[i].rt_score}</p>
      </ul>
      </div>`;
    }
  }else{
    locationsCountDiv.innerHTML = "Aquí hay un total de " + element.length + " locaciones.";
    locationsCards.innerHTML= "";
    for(let i=0 ; i< element.length; i++){
      locationsCards.innerHTML+=`<div class='card'>
      <ul>
      <img src='${element[i].img}' width='200px' height='150px'></img>
      <p>${element[i].name}</p>
      <p>Clima:${element[i].climate}</p>
      <p>Terreno:${element[i].terrain}</p>
      </ul>
      </div>`;
    }
  }
}

function showSection(section1,section2,section3,data,tipo){
  section1.style.display ='none'
  section2.style.display ='none'
  // section3.style.display = 'none'
  section3.style.display ='block'
  showCharacter(data,tipo)
}

showSection(locaciones,personajes_id,animaciones,films,'animaciones');

///// *************ANIMACIONES EN PANTALLA********************* ///
menu_animaciones.addEventListener("click",(event)=>{
  const tipo = 'animaciones'
  showSection(locaciones,personajes_id,animaciones,films,tipo);
  console.log('peliculas',films)
})

///// *************ANIMACIONES ORDENADAS EN PANTALLA********************* ///
sortAnimation.addEventListener("change",(event)=>{
  console.log('hice click')
  const tipo = 'animaciones'
  const selectedSort = event.target.value;
  if(selectedSort==="A-Z" || selectedSort==="Z-A"){
    ordenarPersonajes(films,selectedSort,'title')
  }else if(selectedSort==="Cronología" || selectedSort==="Más recientes"){
    ordenarPersonajes(films,selectedSort,'release_date')
  }else{
    ordenarPersonajes(films,selectedSort,'rt_score')
  }
  showCharacter(films,tipo)
});

///// *************ANIMACIONES FILTRADAS EN PANTALLA********************* ///
director.addEventListener("change",(event)=>{
  const selectedDirector = event.target.value;
  filters.director = selectedDirector
  if (filters.producer == ''){
    const filteredDirector = filtrar(films, filters.director,'director');
    showCharacter(filteredDirector,'animaciones');
  }
  else{
    const filteredDirector = filtrarDoble(films, filters.director,filters.producer,'director','producer');
    showCharacter(filteredDirector,'animaciones');
  }
});

producer.addEventListener("change",(event)=>{
  const selectedProducer = event.target.value;
  filters.producer = selectedProducer
  if (filters.producer == ''){
    const filteredProducer = filtrar(films, filters.producer ,'producer');
    showCharacter(filteredProducer,'animaciones');
  }
  else{
    const filteredProducer = filtrarDoble(films, filters.director,filters.producer,'director','producer');
    showCharacter(filteredProducer,'animaciones');
  }
});

///// *************PERSONAJES EN PANTALLA********************* ///
menu_personajes.addEventListener("click",(event)=>{
  const tipo = 'personajes'
  const dataPersonajes = obtenerDataTipo(films,tipo)
  showSection(animaciones,locaciones,personajes_id,dataPersonajes,tipo);
  console.log('revisado',dataPersonajes)
})

///// *************PERSONAJES ORDENADOS EN PANTALLA********************* ///
sortCharacter.addEventListener("change",(event)=>{
  const tipo = 'personajes'
  const dataPersonajes = obtenerDataTipo(films,tipo)
  const selectedSort = event.target.value;
  ordenarPersonajes(dataPersonajes,selectedSort,'name');
  showCharacter(dataPersonajes,tipo);
});

///// *************PERSONAJES FILTRADOS EN PANTALLA********************* ///
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

///// *************LOCACIONES EN PANTALLA********************* ///
menu_locaciones.addEventListener("click",(event)=>{
  const tipo = 'locaciones'
  const dataPersonajes = obtenerDataTipo(films,tipo)
  showSection(animaciones,personajes_id,locaciones,dataPersonajes,tipo);
  console.log('revisado',dataPersonajes)
})

///// *************LOCACIONES ORDENADAS EN PANTALLA********************* ///
sortLocation.addEventListener("change",(event)=>{
  const tipo = 'locaciones'
  const dataPersonajes = obtenerDataTipo(films,tipo)
  const selectedSort = event.target.value;
  ordenarPersonajes(dataPersonajes,selectedSort,'name');
  showCharacter(dataPersonajes,tipo);
});

///// *************LOCACIONES FILTRADAS EN PANTALLA********************* ///
climate.addEventListener("change",(event)=>{
  const selectedClimate = event.target.value;
  filters.climate = selectedClimate
  const dataPersonajes = obtenerDataTipo(films,'locaciones')
  console.log(selectedClimate)
  if (filters.terrain == ''){
    const filteredClimate = filtrar(dataPersonajes, filters.climate,'climate');
    showCharacter(filteredClimate,'locaciones');
  }
  else{
    const filteredClimate = filtrarDoble(dataPersonajes, filters.climate,filters.terrain,'climate','terrain');
    showCharacter(filteredClimate,'locaciones');
  }
});

terrain.addEventListener("change",(event)=>{
  const selectedTerrain = event.target.value;
  filters.terrain = selectedTerrain
  const dataPersonajes = obtenerDataTipo(films,'locaciones')
  if (filters.climate == ''){
    const filteredTerrain = filtrar(dataPersonajes, filters.terrain,'terrain');
    showCharacter(filteredTerrain,'locaciones');
  }
  else{
    const filteredTerrain = filtrarDoble(dataPersonajes, filters.climate,filters.terrain,'climate','terrain');
    showCharacter(filteredTerrain,'locaciones');
  }
});
























