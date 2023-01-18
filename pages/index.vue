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
    <Nav>
      MDS Logo here
      <div
        class="flex justify-between items-center box-border text-base font-normal pl-[100px] bg-[#212a4be6] ml-0 mr-0 pl-[100px] pr-[15px]"
      >
        Link list here
      </div>
    </Nav>
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
    <section class="pt-28 pb-28 min-w-[800px] w-full">
      <div class="md:mx-auto w-full pr-[15px] pl-[15px] mr-auto ml-auto">
        <div class="flex flex-wrap flex-row -mr-[15px] -ml-[15px] box-border">
          <div
            class="pr-6 relative leading-relaxed h-[25rem] w-1/2 float-right block pl-[15px] pt-[48px] pb-[48px]"
          >
            <div
              class="absolute top-2/4 left-[56%] -translate-x-1/2 -translate-y-1/2 w-[87%] box-border"
            >
              <h2 class="uppercase mt-0 font-medium">
                alt fra prototype til serieproduktion
              </h2>
              <p class="mt-0 mb-4 block mb-1">
                Vi er sparingspartner fra prototype til serie produktion, og
                vores mission er at lette vores kunders hverdag. Dette ligger vi
                i hurtige leveringer samt kvalitets arbejde, vi står altid klar
                til at hjælpe vores kunder med hurtige løsninger og haste
                leveringer. Som underleverandør til mejeri- &
                vindmølleindustrien ved vi at pris, leveringstid samt kvalitet
                er det vigtigste, Derfor er vores svejsepersonale blevet
                certificeret efter gældende standarder, og vi har erhvervet os
                WPQR`r og WPS`r til en lang række svejsesøm, så vi dækker et
                stort område indenfor rustfri rørsvejsning. MDS Stainless ApS
                har i foråret 2016 implementeret certificeringerne DS/EN ISO
                9001:2008 samt ISO 3834-2:2006.
              </p>
            </div>
            <!-- Picture here -->
            <div
              class="box-border block relative h-[25rem] z-4 leading-[1.6rem] overflow-hidden left-[1200px] align-middle"
            >
              <a
                href="#"
                class="flex flex-wrap no-underline hover:no-underline text-inherit block items-end"
              >
                <img
                  src="~/assets/images/mdstainless1.jpg"
                  alt="person-welding"
                  class="absolute -bottom-[12%] w-full"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </body>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "IndexPage",
});
</script>
