export const filtering = (array, element, condition)=> 
array.filter((a) => a[element] === condition);

export const ordenarAZ = (data, orden) => {
  if (orden === "A-Z") {
    return data.sort((a, b) => a.title > b.title ? 1 : -1);
  } else if (orden === "Z-A") {
    return data.sort((a, b) => a.title > b.title ? -1 : 1);
  }
};

export const filterDirector = (films,nameDirector) => {

  let result = films.filter(f => f.director == nameDirector);
  // let result = data.filter(movie => movie[category] === value);
  return result;
};
// prueba
// export const mostrarDirector = (films) => {
//   let directores = [];
//   console.log('peliculas',films)
//   for (let i = 0 ; i<films.length ; i++){
//     directores = directores.concat(films[i].director)
//   }
//   return directores;
// };



let imagen=document.getElementById("imagen")


// ---- FUNCIONES PERSONAJES ------- //

export const obtenerPersonajes = (films) => {
  let personajes = [];
  console.log('peliculas',films)
  for (let i = 0 ; i< films.length ; i++){
    personajes = personajes.concat(films[i].people)
  }
  console.log('personajes',personajes)
  return personajes;
};


export const ordenarPersonajes = (personajes) => {
  personajes.sort((a,b) =>{
    if(a.name < b.name){
      return -1;
    }
    if(a.name > b.name){
      return 1;
    }
    return 0;
  })
  console.log('personajes ordenados',personajes)
}


export const filtrarPersonajes = (personajes,especie) => {
  const personajes_filtrado = personajes.filter(personajes => personajes.specie == especie);
  console.log('personajes filtrados',personajes_filtrado)
  return personajes_filtrado
}













