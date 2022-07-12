// import { filtrarPersonajes } from '../src/data.js';

import { obtenerPersonajes, ordenarPersonajes } from '../src/data.js';

// const arreglo = [{specie: 'Cat'},{specie: 'pizza'}]

// describe('filtrarPersonajes', () => {
//   it('is a function', () => {
//     expect(typeof filtrarPersonajes).toBe('function');
//   });

//   it('should filter by cat', () => {
//     expect(filtrarPersonajes(arreglo)).toEqual([{specie:'Cat'}]);
//   });
// });


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






