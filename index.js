import component from './DadataSuggestions.vue';

const DadataSuggestions = {}
DadataSuggestions.install = function(Vue, options){
  Vue.component('dadata-suggestions', component);
};


export default DadataSuggestions

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(suggestions)
}