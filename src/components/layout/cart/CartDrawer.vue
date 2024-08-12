<template>
  <div class="cart">
    <v-navigation-drawer v-model="drawer" temporary location="right" class="custom-drawer"> <p> products on cart</p></v-navigation-drawer>
  </div>
</template>

<script setup>
import {inject, onMounted, ref} from "vue";

const emitter = inject('emitter');
const drawer = ref(false);

onMounted(()=>{
  emitter.on('openCart',()=>{
    drawer.value = !drawer.value;
  });
})

</script>

<style scoped>
.custom-drawer{
  z-index: 1100;
}
</style>