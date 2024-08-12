<template>
  <div class="banner">
    <div class="parent">
      <v-container>
        <v-row>
          <v-col cols="6">
            <div class="cont">
              <h3><span>Hug Saving</span> On UHD Televisions</h3>
              <p class="hint">Sale Up To 70% Of The Selected Items*</p>
              <v-btn class="px-8 py-2"  variant="outlined">Shop Now</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped >
.parent{
  width: 100%;
  height: 410px;
  background-image: url('../../../assets/images/banner-bg.jpg');
  background-size: cover;
  background-position: left top;
}
.cont{
  padding: 40px 0 0 0;
  color: white;
}
.cont h3{
  font-size: 55px;
  font-weight: 900;
}
.cont h3 span{
  color: #94ffe2;
}
.cont p{
padding: 20px 0 20px 0;
}
.cont button{
  border-radius: 30px;
  text-transform: none;
}
</style>