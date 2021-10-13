import { mount } from '@vue/test-utils';
import App from '@/App.vue';
import { huevo, espinaca } from './jestTest';

const wrapper = mount(App)

console.log(wrapper)

const vm = wrapper.vm

console.log("Data de vm === ", vm.$data)
/*
describe(param1, param2)
    param1: tipo string, nombre de nueestro set de pruebas (ojo es set de pruebas, no la peruba en si)
    param2: tipo Function, funcion que va a contener nuestras pruebas

    ==== Dentro de describe() van las pruebas. test() ===
    test(param1, param2)
      param1: tipo string, nombre de la prueba.
      param 2: tipo function, fucion que va a contener neustras validacionespara que pase la prueba
*/

/* Matchers son funciones que nos permite probar el codigo de manera diferente
- Todos los matchers empiezan con la palabra "expect"
- Hay multiples matchers pero aquí solo usaremos ".toBe" y ".toEqual"

*/

describe('Se probará la calidad de los producotos', () => {

  test('Calidad del huevo', () => {
    
  });

  test('Calidad de la espinaca', () => {
    
  });

});
