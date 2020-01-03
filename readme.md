# **Vue компонент для подсказок Dadata.ru**

## **Установка**
### **npm**
```
$ npm i vue-dadata-suggestions
```

## **Использование**

### **Регистрация компонента**
```
import DadataSuggestions from 'dadata-suggestions'

Vue.use(DadataSuggestions);
```
**Или**
```
<template>
  <div>
    <dadata-suggestions
        :model.sync="myObject"
        :fullInfo.sync="myObjectFull"
        token="YOUR_TOKEN"
        type="ADDRESS"
        field-value="unrestricted_value"
    />
  OR
    <dadata-suggestions
        v-model="myObject"
        :fullInfo.sync="myObjectFull"
        field-value="unrestricted_value"
        :options="dadataOptions"
    />
  </div>
</template>
<script>
import VueSuggestions from 'vue-suggestions';

 export default {
    data() {
      return {
        myObject : '',
        myObjectFull: {},
        dadataOptions: {
          token: 'YOUR_TOKEN', 
          type:'ADDRESS'
        }
      }
    },
    components: { VueSuggestions }
  }
</script>
```


С актуальным списком типов подсказов можете ознакомится на оф. сайте https://dadata.ru/suggestions/usage/

## Входные параметры 
* **token** - API-ключ (Необязательный если его указали в **options**)
* **type** - Тип подсказок (Необязательный если его указали в **options**)
* **fieldValue** - Указывает на поле, из которого нужно получать данные 
* **options** - Параметры плагина. Со списком можно ознакомится на [сайте](https://confluence.hflabs.ru/pages/viewpage.action?pageId=207454318)
* **fullInfo** - В данное поле будет записана полная информация о резельтате поиска

Виды **type**
* ADDRESS - [Список адресов](https://dadata.ru/suggestions/usage/address/)
* PARTY - [Организации](https://dadata.ru/suggestions/usage/bank/)
* BANK - [Банки](https://dadata.ru/suggestions/usage/bank/)
* NAME - [ФИО](https://dadata.ru/suggestions/usage/name/)
* EMAIL - [email](https://dadata.ru/suggestions/usage/email/)
* fms_unit - [Кем выдан паспорт](https://dadata.ru/suggestions/outward/fms_unit/)
* postal_unit - [Почтовые отделения](https://dadata.ru/suggestions/outward/postal_unit/)
* fns_unit - [Налоговые инспекции](https://dadata.ru/suggestions/outward/fns_unit/)
* region_court - [Мировые суды](https://dadata.ru/suggestions/outward/region_court/)
* country - [Страны](https://dadata.ru/suggestions/outward/country/)
* currency - [Валюты](https://dadata.ru/suggestions/outward/currency/)
* okved2 - [Виды деятельности (ОКВЭД 2)](https://dadata.ru/suggestions/outward/okved2/)
* okpd2 - [Виды продукции (ОКПД 2)](https://dadata.ru/suggestions/outward/okpd2/)


Виды **fieldValue**
* **unrestricted_value** - Строковое значение, например **ОВД ЛЕНИНСКОГО РАЙОНА Г. ИВАНОВО**
* **value** - Значение, результат поиска, например **370-000**

>**Все другие ключи будут автоматически браться из поля data, из разширеной информации по результату.**


## License
MIT © [yzen.dev](https://github.com/yzen-dev)