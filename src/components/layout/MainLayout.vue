<template>
  <div class="layout">
    <v-layout class="position-relative">
      <cart-drawer></cart-drawer>
     <app-bar></app-bar>
      <fixed-nav></fixed-nav>
      <v-main class="main">
        <slot></slot>
      </v-main>
      <app-footer></app-footer>
    </v-layout>
  </div>

</template>

<script setup>
import AppFooter from "./AppFooter.vue";
import AppBar from "./AppBar.vue";
import CartDrawer from "./cart/CartDrawer.vue";
import FixedNav from "./FixedNav.vue";

</script>

<style scoped>
.main{
 padding-top: 146px;
}
</style>