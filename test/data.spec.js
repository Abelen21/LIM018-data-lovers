
import { obtenerDataTipo, ordenarPersonajes } from '../src/data.js';

///  Tests funciones animaciones ///////

// describe('probando ordenarAZ', () => {
//   it('is a function', () => {
//     expect(typeof ordenarAZ).toBe('function');
//   });
//   it('retorna la data ordenada', () => {
//     // dado de la A la Z
//     const mockOrder= "A-Z"
//     // cuando
//     const sort =ordenarAZ(mockData,mockOrder)
//     // entonces;
//     expect(sort.films[3].title).toBe('Zastle in the Sky')
//   });
// });

// describe('probando ordenarZA', () => {
//   it('is a function', () => {
//     expect(typeof ordenarAZ).toBe('function');
//   });
//   it('retorna la data ordenada', () => {
//     const mockOrder= "Z-A"
    
//     const sort =ordenarAZ(mockData,mockOrder)
//     // entonces;
//     expect(sort[0].title).toBe('My Neighbor Totoro')
//     expect(sort[1].title).toBe("Kiki's Delivery Service")
//     expect(sort[2].title).toBe('Grave of the Fireflies')
//     expect(sort[3].title).toBe('Castle in the Sky')
//   });
// });



/// Tests funciones personajes //////

describe('probando obtenerDataTipo', () => {
  it('is a function', () => {
    expect(typeof obtenerDataTipo).toBe('function');
  });
  it('returns characters', () => {
    const films = [{'people': [{'name': 'B'}]},{'people': [{'name': 'A'}]}]
    expect(obtenerDataTipo(films,'personajes')).toEqual([{'name': 'B'},{'name': 'A'}]);
  });
  it('returns locations', () => {
    const films = [{'locations': [{'name': 'B'}]},{'locations': [{'name': 'A'}]}]
    expect(obtenerDataTipo(films,'locaciones')).toEqual([{'name': 'B'},{'name': 'A'}]);
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








