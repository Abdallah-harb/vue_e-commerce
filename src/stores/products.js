import { defineStore } from "pinia";
import axios from "axios";
import { url } from "../config.js";

export const useProductStore = defineStore('useProductStore', {
    state: () => ({
        products: [],
        loading: false,
    }),
    actions: {
        async fetchProduct() {
            this.loading = true;
            try {
                const response = await axios.get(url + '/products');
                this.products = response.data.products.slice(0,8);
               // console.log(this.products)
            } catch (error) {
                console.log(error);
            } finally {
                this.loading = false;
            }
        }
    },
});