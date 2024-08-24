<template>
  <Banner/>
  <Feathers/>
  <Offers/>
  <flash-deals :products =productStore.products  :loading="productStore.loading"/>
  <category/>
</template>

<script setup>
import Banner from "../components/Home/Banner/Banner.vue";
import Feathers from "../components/Home/Feathers/Feathers.vue";
import Offers from "../components/Home/Offers/Offers.vue";
import { useProductStore } from "../stores/products.js";
import {onMounted, ref} from "vue";
import FlashDeals from "../components/Home/Products/FlashDeals.vue";
import Category from "../components/Home/categort/Category.vue";

const productStore = useProductStore();
onMounted(async () => {
  await productStore.fetchProduct();
});
</script>
