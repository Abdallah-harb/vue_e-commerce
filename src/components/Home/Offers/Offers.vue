<template>
  <div class="offers" >
    <v-container fluid>
      <div class="first_parent">
        <v-row>
          <v-col cols="4">
            <v-hover v-slot="{ isHovering, props }" open-delay="200">
              <div class="parent" v-bind="props">
                <img
                    :class="{ 'img-hover': isHovering }"
                    src="../../../assets/images/playstations.webp"
                    title="playstations"
                    alt="playstations"
                />
              </div>
            </v-hover>
          </v-col>
          <v-col cols="4">
            <v-hover v-slot="{ isHovering, props }" open-delay="200">
              <div class="parent" v-bind="props">
                <img  :class="{ 'img-hover': isHovering }" src="../../../assets/images/headset.webp" title="headset" alt="headset">
              </div>
            </v-hover>
          </v-col>
          <v-col cols="4">
            <v-hover v-slot="{ isHovering, props }" open-delay="200">
              <div class="parent" v-bind="props">
                <img  :class="{ 'img-hover': isHovering }" src="../../../assets/images/chairs.webp" title="chairs" alt="chairs">
              </div>
            </v-hover>
          </v-col>
        </v-row>
      </div>
     <div class="second_parent mt-6">
       <v-row>
         <v-col cols="6">
           <img src="../../../assets/images/iphones.webp" height="90%" width="100%" alt="Iphoneos" title="Iphoneos">
         </v-col>
         <v-col cols="6">
           <img src="../../../assets/images/laptops.webp" height="90%" width="100%" class="pr-7" alt="laptops" title="laptops">
         </v-col>
       </v-row>
     </div>
     
    </v-container>
  </div>
</template>

<script>

</script>

<style scoped>
.offers{
  padding-left: 30px;
  background-color: #f9f9f9;
}
.parent {
  overflow: hidden; /* Ensures the image doesn't overflow outside the div */
}

.parent img {
  transition: transform 1s ease, filter 0.4s ease; /* Smooth scaling */
}

.parent img.img-hover {
  transform: scale(1.2); /* Scale the image up by 20% */
  filter: brightness(1.1); /* Optional: Increase brightness on hover */
}
</style>