// import { filtrarPersonajes } from '../src/data.js';

import { ordenarAZ, obtenerPersonajes, ordenarPersonajes } from '../src/data.js';

// const arreglo = [{specie: 'Cat'},{specie: 'pizza'}]

// describe('filtrarPersonajes', () => {
//   it('is a function', () => {
//     expect(typeof filtrarPersonajes).toBe('function');
//   });

//   it('should filter by cat', () => {
//     expect(filtrarPersonajes(arreglo)).toEqual([{specie:'Cat'}]);
//   });
// });


///  Tests funciones animaciones ///////

describe('probando ordenarAZ', () => {
  it('is a function', () => {
    expect(typeof ordenarAZ).toBe('function');
  });
  it('retorna la data ordenada', () => {
    // dado de la A la Z
    const mockOrder= "A-Z"
    // cuando
    const sort =ordenarAZ(mockData,mockOrder)
    // entonces;
    expect(sort.films[3].title).toBe('Zastle in the Sky')
  });
  
});

describe('probando ordenarZA', () => {
  it('is a function', () => {
    expect(typeof ordenarAZ).toBe('function');
  });
  it('retorna la data ordenada', () => {
    // dado de la A la Z
    const mockOrder= "Z-A"
    // cuando
    const sort =ordenarAZ(mockData,mockOrder)
    // const expectedArray = "films": [{}]
    // entonces;
    expect(sort[0].title).toBe('My Neighbor Totoro')
    expect(sort[1].title).toBe("Kiki's Delivery Service")
    expect(sort[2].title).toBe('Grave of the Fireflies')
    expect(sort[3].title).toBe('Castle in the Sky')


  });
  
});





/// Tests funciones personajes //////

describe('probando obtenerPersonajes', () => {
  it('is a function', () => {
    expect(typeof obtenerPersonajes).toBe('function');
  });
  it('returns characters', () => {
    const films = [{'people': [{'name': 'B'}]},{'people': [{'name': 'A'}]}]
    expect(obtenerPersonajes(films)).toEqual([{'name': 'B'},{'name': 'A'}]);
  });

})


describe('probando ordenarPersonajes', () =>{
  it('is a function', () => {
    expect(typeof ordenarPersonajes).toBe('function');
  });
  it('ordena personajes',()=>{
    // Dado
    const personajes = [{'name': 'B'},{'name': 'A'}]
    // Cuando
    ordenarPersonajes(personajes)
    // Entonces
    expect(personajes).toEqual([{'name': 'A'},{'name': 'B'}])
  })
})








