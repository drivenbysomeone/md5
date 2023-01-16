<template>
  <!-- Body -->
  <!--     font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    background-color: #fff; -->
  <!-- Services -->
  <!--     font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"; -->

  <!-- Services -->
  <div class="body">
    <section
      class="bg-[#212a4b] text-white grid grid-rows-4 lg:grid-cols-4 gap-10 mx-auto box-border -mr-15 -ml-15 p-12 mh-auto"
    >
      <div class="service-component relative">
        <h2 class="uppercase text-xl mb-5 leading-tight">Rørbukning</h2>
        <p class="block text-[#d1d0da] text-[15px] mb-[50px]">
          Vi udfører rørbukning i rustfri stål, fra Ø10-Ø90mm og op til 6000mm
          rørlængder, med mange forskellige radier.
        </p>

        <Button><span class="skew-x-[40deg]">læs mere</span></Button>
      </div>
      <div class="service-component relative">
        <h2 class="uppercase text-xl mb-5 leading-tight">RØROPTRÆK</h2>
        <p class="block text-[#d1d0da] text-[15px] mb-[50px]">
          Vi udfører røroptræk i rustfri stål, og med vores eget udviklet
          optræksystem kan vi tilbyde optræk til særdeles fordelagtige priser.
        </p>

        <Button><span class="skew-x-[40deg]">læs mere</span></Button>
      </div>
      <div class="service-component relative">
        <h2 class="uppercase text-xl mb-5 leading-tight">ENDEFORMNING</h2>
        <p class="block text-[#d1d0da] text-[15px] mb-[50px]">
          Vi tilbyder ende formning i rustfri stål max godstykkelse 4mm, og med
          ende dybde på 300mm.
        </p>

        <Button><span class="skew-x-[40deg]">læs mere</span></Button>
      </div>
      <div class="service-component relative">
        <h2 class="uppercase text-xl mb-5 leading-tight">AUTOMATSVEJSNING</h2>
        <p class="block text-[#d1d0da] text-[15px] mb-[50px]">
          Vi kan tilbyde Automatisk tig svejsning, med emnevægt op til 250kg, og
          længder op til 3000mm.
        </p>
        <Button><span class="skew-x-[40deg]">læs mere</span></Button>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "IndexPage",
});
</script>
