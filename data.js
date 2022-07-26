
// ---- FUNCIONES ------- //


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

export const ordenarPersonajes = (personajes,orden,atributo) => {
  if (orden==="A-Z" || orden==="Cronología" || orden==="Ranking más bajo"){
    personajes.sort((a,b) =>{
      if(a[atributo]< b[atributo]){
        return -1;
      }
      if(a[atributo] > b[atributo]){
        return 1;
      }
      return 0;
    })
    console.log('personajes ordenados',personajes)
  }else if(orden==="Z-A" || orden==="Más recientes" || orden==="Ranking más alto"){
    personajes.sort((a,b) =>{
      if(a[atributo]< b[atributo]){
        return 1;
      }
      if(a[atributo] > b[atributo]){
        return -1;
      }
      return 0;
    })
  }
}

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















