import {defineStore} from "pinia";
import categoryData from '/src/data.json'
export const categories = defineStore('categories',{
    state:()=>({
        category:categoryData.categories.slice(0,7)
    })
});