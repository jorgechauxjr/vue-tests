import {shallowMount } from '@vue/test-utils';
import App from '@/App.vue';
const wrapper = shallowMount(App);

// console.log(wrapper.vm.$data)

describe('Testing of the data() properties', ()=>{
    test('should have name property',()=>{
        //Se valida la propiedad name de data()
        expect(wrapper.vm.$data).toHaveProperty('name');
        //Se valida el tipo de dato de la propiedad name
        expect(typeof wrapper.vm.name).toBe('string');
    });
    test('should have image property',()=>{
        //Se valida la propiedad image de data()
        expect(wrapper.vm.$data).toHaveProperty('image');
        //Se valida el tipo de dato de la propiedad image
        expect(typeof wrapper.vm.image).toBe('string');
    });
    test('should have type property',()=>{
        //Se valida la propiedad type de data()
        expect(wrapper.vm.$data).toHaveProperty('type');
        //Se valida el tipo de dato de la propiedad type
        expect(typeof wrapper.vm.type).toBe('string');
    });
    test('should have weight property',()=>{
        //Se valida la propiedad weight de data()
        expect(wrapper.vm.$data).toHaveProperty('weight');
        //Se valida el tipo de dato de la propiedad weight
        expect(typeof wrapper.vm.weight).toBe('number');
    });
    test('should have height property',()=>{
        //Se valida la propiedad height de data()
        expect(wrapper.vm.$data).toHaveProperty('height');
        //Se valida el tipo de dato de la propiedad height
        expect(typeof wrapper.vm.height).toBe('number');
    })
    test('should have abilities property',()=>{
        //Se valida la propiedad abilities de data()
        expect(wrapper.vm.$data).toHaveProperty('abilities');
        //Se valida el tipo de dato de la propiedad abilities 
        //preguntando si es o no un array por medio de un booleano
        expect(Array.isArray(wrapper.vm.abilities)).toBeTruthy();
    })
})
