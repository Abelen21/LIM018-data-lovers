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






// ---- FUNCIONES PERSONAJES ------- //

// export const obtenerPersonajes = (films) => {
//   let personajes = [];
//   console.log('peliculas',films)
//   for (let i = 0 ; i< films.length ; i++){
//     personajes = personajes.concat(films[i].people)
//   }
//   console.log('personajes',personajes)
//   return personajes;
// }

export const obtenerDataTipo = (films,tipo) => {
  let personajes = [];
  console.log('peliculas',films)
  for (let i = 0 ; i< films.length ; i++){
    if(tipo=='personajes'){
      personajes = personajes.concat(films[i].people)
    }else{
      personajes = personajes.concat(films[i].locations)
    }
  }
  console.log('personajes',personajes)
  return personajes;
}

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

// export const filtrarDoble = (personajes,filtros) => {
//   console.log('filtros', filtros)
  
//   const personajes_filtrado = personajes.filter(personajes => 
//     ((personajes.gender == filtros.gender) && 
//     (personajes.specie == filtros.specie)));
  
//   console.log('personajes filtrados',personajes_filtrado)
//   return personajes_filtrado
// }


export const filtrarGenero = (personajes,genero) => {
  const personajes_filtrado = personajes.filter(personajes => personajes.gender == genero);
  console.log('personajes filtrados',personajes_filtrado)
  return personajes_filtrado
}

export const filtrarEspecie = (personajes,especie) => {
  const personajes_filtrado = personajes.filter(personajes => personajes.specie == especie);
  console.log('personajes filtrados',personajes_filtrado)
  return personajes_filtrado
}

// export const filtrar = (array,valor,atributo) => {
//   const personajes_filtrado = array.filter(array => array[atributo] == valor);
//   console.log('personajes filtrados',personajes_filtrado)
//   return personajes_filtrado
// }
export const filtrar = (array,valor,atributo) => {
  console.log('valor', valor)
  const personajes_filtrado = array.filter(array => array[atributo] == valor);
  console.log('personajes filtrados',personajes_filtrado)
  return personajes_filtrado
}

export const filtrarDoble = (array,valor1,valor2,atributo1,atributo2) => {
  console.log('filtros', valor1)
  const personajes_filtrado = array.filter(array => 
    ((array[atributo1] == valor1) && 
    (array[atributo2] == valor2)));
  console.log('personajes filtrados',personajes_filtrado)
  return personajes_filtrado
}


//// Funciones Locaciones /////
export const filtrarDobleLocaciones = (personajes,filtros) => {
  console.log('filtros', filtros)
  
  const personajes_filtrado = personajes.filter(personajes => 
    ((personajes.climate == filtros.climate) && 
    (personajes.terrain == filtros.terrain)));
  
  console.log('personajes filtrados',personajes_filtrado)
  return personajes_filtrado
}














