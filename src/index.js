import component from './components/DadataSuggestions.vue';

const DadataSuggestions = {}
DadataSuggestions.install = function(Vue, options){
  component.pluginOptions = options;
  Vue.component('dadata-suggestions', component);
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(DadataSuggestions)
}

export default DadataSuggestions