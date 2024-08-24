<template>
  <div class="cyber-offer pt-3">
    <img src="../../../assets/images/cyber-banner.webp" class="w-100">
  </div>
  <div class="category pt-10">
    <div class="header d-flex justify-content-center text-muted">
      <h3>Top Categories</h3>
    </div>
    <div class="body pt-10 ">
      <v-row>
        <v-col cols="2" v-for="(category,i) in categories" :key="i" >
          <v-card elevation="0" class="text-center cursor-pointer">
            <img :src="category.image">
            <v-card-text>{{category.title}}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup>

import {onMounted, ref} from "vue";
import Data from '/src/data.json'
const categories = ref(Data.categories);

onMounted(()=>{

});
</script>

<style scoped>

</style>