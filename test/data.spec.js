
import { filtrar, obtenerDataTipo, ordenarPersonajes, filtrarDoble } from '../src/data.js';


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
  it('ordena A-Z',()=>{
    // Dado
    const array = [{'atributo': 'B'},{'atributo': 'A'}]
    // Cuando
    ordenarPersonajes(array,"A-Z",'atributo')
    // Entonces
    expect(array).toEqual([{'atributo': 'A'},{'atributo': 'B'}])
  });
  it('ordena Z-A',()=>{
    const array = [{'atributo': 'A'},{'atributo': 'B'}]
    ordenarPersonajes(array,"Z-A",'atributo')
    expect(array).toEqual([{'atributo': 'B'},{'atributo': 'A'}])
  });
  it('ordena cronologicamente',()=>{
    const array = [{'atributo': '2'},{'atributo': '1'}]
    ordenarPersonajes(array,"Cronología",'atributo')
    expect(array).toEqual([{'atributo': '1'},{'atributo': '2'}])
  });
  it('ordena más recientes',()=>{
    const array = [{'atributo': '1'},{'atributo': '2'}] 
    ordenarPersonajes(array,"Más recientes",'atributo')
    expect(array).toEqual([{'atributo': '2'},{'atributo': '1'}])
  });
  it('ordena ranking más alto',()=>{
    const array = [{'atributo': '1'},{'atributo': '2'}]
    ordenarPersonajes(array,"Ranking más alto",'atributo')
    expect(array).toEqual([{'atributo': '2'},{'atributo': '1'}])
  });
  it('ordena ranking más bajo',()=>{
    const array = [{'atributo': '2'},{'atributo': '1'}] 
    ordenarPersonajes(array,"Ranking más bajo",'atributo')
    expect(array).toEqual([{'atributo': '1'},{'atributo': '2'}])
  });
})

describe('probando filtrar', () => {
  it('is a function', () => {
    expect(typeof filtrar).toBe('function');
  });
  it('filtrar', () => {
    const array = [{'atributo': 'B'},{'atributo': 'A'}]
    expect(filtrar(array,'B','atributo')).toEqual([{'atributo': 'B'}]);
  });
})

describe('probando filtrarDoble', () => {
  it('is a function', () => {
    expect(typeof filtrarDoble).toBe('function');
  });
  it('filtrarDoble', () => {
    const array = [{'atributo1': 'B','atributo2': 'A'},{'atributo1': 'A','atributo2': 'B'}]
    expect(filtrarDoble(array,'B','A','atributo1','atributo2')).toEqual([{'atributo1': 'B','atributo2': 'A'}]);
  });
})









