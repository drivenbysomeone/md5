<template>
  <!--
  ============================
  NOTE it's possible to link styles with: <link rel="stylesheet" href="css/style.css" />
==============================
to do this:
1. create input.css with following
tailwind base;
@tailwind components;
@tailwind utilities;
@layer base;

this way regular css/ SCSS can be applied
-->

  <!--     font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    background-color: #fff; -->
  <!-- Services -->
  <!--     font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"; -->

  <!-- Services -->
  <body>
    <!-- SECTION HERO -->
    <section
      class="h-screen relative pt-[20px] after:bg-[#000] after:content-none after:w-full after:absolute after:block after:top-0 after:left-0 after:opacity-[0.45] after:z-2 lg:h-[80vh]"
    >
      <!-- Slideshow  -->
      <div
        class="w-full h-full absolute top-0 left-0 z-1 bg-blue text-darker content-content-text"
      >
        dsds
        <!-- Slideshow - carousel -->
        <div class="w-full h full overflow-hidden">
          <!-- CAROUSEL INNER -->
          <div class="h-screen">
            <!-- Carousel item -->
            <div class="transition ease-out duration-1000 relative h-screen">
              <!-- Carousel caption -->
              <div class="right-0 left-0"></div>
              <!-- images -->
              <!-- <img src="" alt="image names" class="" /> -->
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Navbar is implemented already ONCE in Navbar sheet -->

    <section
      class="bg-[#212a4b] text-white grid grid-row lg:grid-cols-4 mx-auto box-border"
    >
      <div class="service-component relative -mr-15 -ml-15 p-12 mh-auto">
        <h2 class="uppercase text-xl mb-5 leading-tight">Rørbukning</h2>
        <p class="block text-[#d1d0da] text-[15px] mb-[50px]">
          Vi udfører rørbukning i rustfri stål, fra Ø10-Ø90mm og op til 6000mm
          rørlængder, med mange forskellige radier.
        </p>

        <Button nav><span class="skew-x-[40deg]">læs mere</span></Button>
      </div>
      <div class="service-component relative -mr-15 -ml-15 p-12 mh-auto">
        <h2 class="uppercase text-xl mb-5 leading-tight">RØROPTRÆK</h2>
        <p class="block text-[#d1d0da] text-[15px] mb-[50px]">
          Vi udfører røroptræk i rustfri stål, og med vores eget udviklet
          optræksystem kan vi tilbyde optræk til særdeles fordelagtige priser.
        </p>

        <Button nav><span class="skew-x-[40deg]">læs mere</span></Button>
      </div>
      <div class="service-component relative -mr-15 -ml-15 p-12 mh-auto">
        <h2 class="uppercase text-xl mb-5 leading-tight">ENDEFORMNING</h2>
        <p class="block text-[#d1d0da] text-[15px] mb-[50px]">
          Vi tilbyder ende formning i rustfri stål max godstykkelse 4mm, og med
          ende dybde på 300mm.
        </p>

        <Button nav><span class="skew-x-[40deg]">læs mere</span></Button>
      </div>
      <div class="service-component relative -mr-15 -ml-15 p-12 mh-auto">
        <h2 class="uppercase text-xl mb-5 leading-tight">AUTOMATSVEJSNING</h2>
        <p class="block text-[#d1d0da] text-[15px] mb-[50px]">
          Vi kan tilbyde Automatisk tig svejsning, med emnevægt op til 250kg, og
          længder op til 3000mm.
        </p>
        <Button nav><span class="skew-x-[40deg]">læs mere</span></Button>
      </div>
    </section>
    <section class="pt-28 pb-28 w-full overflow-hidden">
      <div class="w-full flex items-center md:flex-row flex-col gap-8">
        <div class="leading-relaxed md:w-1/2 relative h-[400px] pr-6">
          <div
            class="absolute -translate-y-1/2 -translate-x-1/2 top-[50%] left-[56%] w-[87%]"
          >
            <h2 class="uppercase mt-0 font-medium">
              alt fra prototype til serieproduktion
            </h2>
            <p class="mt-0 block mb-1">
              Vi er sparingspartner fra prototype til serie produktion, og vores
              mission er at lette vores kunders hverdag. Dette ligger vi i
              hurtige leveringer samt kvalitets arbejde, vi står altid klar til
              at hjælpe vores kunder med hurtige løsninger og haste leveringer.
              Som underleverandør til mejeri- & vindmølleindustrien ved vi at
              pris, leveringstid samt kvalitet er det vigtigste, Derfor er vores
              svejsepersonale blevet certificeret efter gældende standarder, og
              vi har erhvervet os WPQR`r og WPS`r til en lang række svejsesøm,
              så vi dækker et stort område indenfor rustfri rørsvejsning. MDS
              Stainless ApS har i foråret 2016 implementeret certificeringerne
              DS/EN ISO 9001:2008 samt ISO 3834-2:2006.
            </p>
          </div>

          <!-- about .about-text:after -->
          <div
            class="inline-block absolute h-0 w-0 left-0 bottom-0 border-t-[400px] border-solid border-white border-r-[400px] border-solid border-white float-right -mt-12 -mr-[424px] mb-0 ml-0 z-5"
          ></div>
          <!-- Picture here -->
        </div>

        <div
          class="relative h-[25rem] z-4 leading-[1.6rem] overflow-hidden w-full md:w-1/2"
        >
          <img
            src="~/assets/images/mdstainless1.jpg"
            alt="person-welding"
            class="absolute -bottom-[12%]"
          />
        </div>
      </div>
    </section>
    <!-- MANGLER -->
    <section class="relative h-auto max-h-[400px] overflow-hidden z-19">
      <picture>
        <source
          :srcSet="require('~/assets/images/cnc.jpg?webp')"
          type="image/webp"
        />
        <source
          :srcSet="require('~/assets/images/cnc.jpg')"
          type="image/jpeg"
        />
        <img
          :src="require('~/assets/images/cnc.jpg')"
          alt="MDS Stainless kontakt os"
          class="-mt-[20%] h-auto align-middle border-none"
          width="100%"
        />
      </picture>
      <!-- Blue overlay here! -->
      <div
        class="absolute z-1000 h-full w-full top-0 left-0 bg-[#212a4b] bg-opacity-90"
      ></div>
      <div
        class="absolute transform -translate-x-1/2 -translate-y-1/2 z-2000 w-4/5 top-1/2 left-1/2 py-12 text-white text-center md:text-align-unset"
      >
        <h2 class="uppercase text-white">
          Kontakt os for at høre mere om dine muligheder
        </h2>
        <p class="pt-6 mt-0 mb-4"></p>

        <Button contact>
          <span class="skew-x-[40deg] inline-block font-semibold text-sm"
            >Kontakt os</span
          >
        </Button>
      </div>
    </section>

    <!--     <section
      class="relative h-auto max-h-[25rem] overflow-hidden z-19 object-scale-down"
    >
      <div class="absolute block z-1000 h-full top-0 left-0 bg-[#212a4b]"></div>
      <div
        class="absolute z-2000 -translate-x-2/4 -translate-y-2/4 top-2/4 left-2/4 w-4/5"
      >
        <h2 class="uppercase">
          Kontakt os for at høre mere om dine muligheder
        </h2>
        <Button><span class="skew-x-[40deg]">læs mere</span></Button>
      </div>
    </section> -->
  </body>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "IndexPage",
});
</script>

<style lang="css">
.about {
  overflow: hidden;
  height: calc(400px + 14rem);
}
.about .about-text {
  padding-right: 1.5rem;
  position: relative;
  line-height: 1.6;
  height: 400px;
}
.about .about-text .wrapper {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 56%;
  width: 87%;
}
.about .about-text:after {
  display: block;
  position: inherit;
  height: 0;
  width: 0;
  content: "";
  left: 0;
  bottom: 0;
  border-top: 400px solid #fff;
  border-right: 400px solid transparent;
  float: right;
  margin: -48px -424px 0 0;
  z-index: 5;
}
</style>
