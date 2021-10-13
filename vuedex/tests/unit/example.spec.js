import { mount } from '@vue/test-utils'
import App from '@/App.vue'

const wrapper = mount(App)

console.log(wrapper)

const vm = wrapper.vm

console.log("Data de vm === ", vm.$data)
