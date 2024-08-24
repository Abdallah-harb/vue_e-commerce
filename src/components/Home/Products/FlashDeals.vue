<template>
  <div class="deals">
    <v-container fluid>
      <div v-if="loading">loading ...</div>
      <div v-else>
        <div class="d-flex justify-content-between">
          <h4 class="text-danger fw-bold">Flash All</h4>
          <router-link to="" class=" text-black " >Shop All</router-link>
        </div>
        <swiper
            :slides-per-view="4"
            :space-between="50"
            :modules="modules" :pagination="{el:'.custom-pagination' ,clickable: true }"
            :autoplay="{ delay: 3500, disableOnInteraction: false }"
        >
          <swiper-slide v-for="item in products" :key="item.id">
           <v-card elevation="0">
             <img :src="showenItem[item.id]?showenItem[item.id]:item.thumbnail" class="w-100 h-100 cursor-pointer"  style="max-height:353.8px" :alt="item.description" :title="item.title">
           </v-card>
           <v-card-text class="pl-0 pb-1 text-muted">
             ({{item.title}})
             {{item.description.split(' ').length <=9?
               item.description : item.description.split(' ').slice(0,9).join(' ') + " ...."}}
           </v-card-text>
           <v-rating  half-increments readonly
                      :length="5"
                      :size="25"
                      :model-value="item.rating"
                      color="warning" active-color="warning"
                      density="compact"
           />
           <v-card-text class="pl-0 p-0">
             <div v-if="item.discountPercentage !==0" class="text-muted">
               <del>{{item.price}}$</del> From <span class="text-red fw-bold">{{Math.ceil(item.price - (item.price * (item.discountPercentage / 100)))}}$</span>
             </div>
             <div v-else>
               {{item.price}}
             </div>
           </v-card-text>
           <v-btn-toggle v-model="showenItem[item.id]" class="pt-0">
             <v-btn v-for="(img,i) in item.images" :value="img" :key="i" size="x-small">
               <img :src="img" width="30" height="30" >
             </v-btn>
           </v-btn-toggle>

          </swiper-slide>
          <div class="custom-pagination"></div>
        </swiper>
      </div>
    </v-container>
  </div>

</template>

<script setup>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import SwiperClass, { Pagination } from 'swiper';
import {ref} from "vue";

const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
  loading:{
    type:Boolean,
    required:true
  }
});
const modules = ref([Pagination]);
const showenItem = ref({});
</script>
<style scoped>
.custom-pagination{
  display: flex;
  justify-content: center;
  padding-top: 25px;
}
.custom-pagination .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  background-color: #ff6347; /* Default bullet color */
  margin: 0 5px;
  border-radius: 50%;
  opacity: 0.7;
  transition: background-color 0.3s ease;
}

.custom-pagination .swiper-pagination-bullet-active {
  background-color: #32cd32; /* Active bullet color */
  opacity: 1;
}
</style>