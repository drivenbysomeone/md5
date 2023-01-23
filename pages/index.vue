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
  <body>
    <Navbar>
      Logo here
      <div
        class="flex justify-between items-center box-border text-base font-normal pl-[100px] bg-[#212a4be6] ml-0 mr-0 pl-[100px] pr-[15px]"
      >
        yes
      </div>
    </Navbar>
    <section
      class="bg-[#212a4b] text-white grid grid-row lg:grid-cols-4 mx-auto box-border"
    >
      <div class="service-component relative -mr-15 -ml-15 p-12 mh-auto">
        <h2 class="uppercase text-xl mb-5 leading-tight">Rørbukning</h2>
        <p class="block text-[#d1d0da] text-[15px] mb-[50px]">
          Vi udfører rørbukning i rustfri stål, fra Ø10-Ø90mm og op til 6000mm
          rørlængder, med mange forskellige radier.
        </p>

        <Button><span class="skew-x-[40deg]">læs mere</span></Button>
      </div>
      <div class="service-component relative -mr-15 -ml-15 p-12 mh-auto">
        <h2 class="uppercase text-xl mb-5 leading-tight">RØROPTRÆK</h2>
        <p class="block text-[#d1d0da] text-[15px] mb-[50px]">
          Vi udfører røroptræk i rustfri stål, og med vores eget udviklet
          optræksystem kan vi tilbyde optræk til særdeles fordelagtige priser.
        </p>

        <Button><span class="skew-x-[40deg]">læs mere</span></Button>
      </div>
      <div class="service-component relative -mr-15 -ml-15 p-12 mh-auto">
        <h2 class="uppercase text-xl mb-5 leading-tight">ENDEFORMNING</h2>
        <p class="block text-[#d1d0da] text-[15px] mb-[50px]">
          Vi tilbyder ende formning i rustfri stål max godstykkelse 4mm, og med
          ende dybde på 300mm.
        </p>

        <Button><span class="skew-x-[40deg]">læs mere</span></Button>
      </div>
      <div class="service-component relative -mr-15 -ml-15 p-12 mh-auto">
        <h2 class="uppercase text-xl mb-5 leading-tight">AUTOMATSVEJSNING</h2>
        <p class="block text-[#d1d0da] text-[15px] mb-[50px]">
          Vi kan tilbyde Automatisk tig svejsning, med emnevægt op til 250kg, og
          længder op til 3000mm.
        </p>
        <Button><span class="skew-x-[40deg]">læs mere</span></Button>
      </div>
    </section>
    <section class="pt-28 pb-28 w-full">
      <div class="w-full flex items-center md:flex-row flex-col gap-8">
        <div class="pl-10 leading-relaxed w-full md:w-1/2">
          <div class="">
            <h2 class="uppercase mt-0 font-medium">
              alt fra prototype til serieproduktion
            </h2>
            <p class="mt-0 mb-4 block mb-1">
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
          <!-- Picture here -->
        </div>
        <div
          class="relative h-[25rem] z-4 leading-[1.6rem] overflow-hidden w-full md:w-1/2"
        >
          <img
            src="~/assets/images/mdstainless1.jpg"
            alt="person-welding"
            class=""
          />
        </div>
      </div>
    </section>
    <!-- MANGLER -->
    <section
      class="relative h-auto max-h-[25rem] overflow-hidden z-19 object-scale-down bg-[#212a4b]"
    >
      <div class="text-center container mx-auto px-5 py-10 sm:p-28">
        <div>
          <h2 class="uppercase text-white">
            Kontakt os for at høre mere om dine muligheder
          </h2>

          <div class="flex flex-row justify-center items-center">
            <Button class="flex justify-center"
              ><span class="skew-x-[40deg]">Kontakt os</span>
            </Button>
          </div>
        </div>
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

<style lang="scss">
.about {
  overflow: hidden;
  height: calc(400px + 14rem);
  .about-text {
    padding-right: 1.5rem;
    position: relative;
    line-height: 1.6;
    height: 400px;
    .wrapper {
      position: absolute;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 56%;
      width: 87%;
    }
    &:after {
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
  }
}
</style>
