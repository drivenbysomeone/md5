<template>
  <div>
    <section class="h-[330px] overflow-hidden relative w-full bg-white">
      <div class="text-[#212a4b] text-center">
        <div class="text-wrapper">
          <h1 class="font-medium uppercase text-6xl mb-2">Om os</h1>
          <p class="text-[#64636b] mb-4 mt-0 font-normal text-base">
            Vi er en mindre moderne smedevirksomhed, som har til huse i
            Ejstrupholm Midtjylland. Vi har over 700kvm produktionslokaler,
            fyldt med topmoderne maskiner som kan håndtere små og store emner
            samt større serie, indenfor rørbearbejdning i rustfri stål.
          </p>
        </div>
      </div>
    </section>
    <!-- services mission - section -->
    <section class="bg-[#212a4b] text-white lg:h-auto">
      <div class="px-[15px] mx-auto">
        <div class="flex flex-row flex-wrap -mx-[15px]">
          <div class="py-12 pr-6 pl-[15px] lg:w-3/5 xl:w-1/2">
            <!-- Wrapper - Important! - implement below -->
            <!--  @media (max-width: 1220px) {
    height: 460px;
    .about-text {
      .wrapper {
        width: 83%;
        left: 50%;
      }
      &:after {
        margin: -49px -487px 0 0;
        border-top: 480px solid #212a4b;
        border-right: 480px solid transparent;
      }
    } -->
            <div>
              <h2>alt fra prototype til serieproduktion</h2>
              <p class="mb-4 mt-0">
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
          </div>
        </div>
      </div>
    </section>
    <!-- Team section -->
    <section class="py-28 relative">
      <div class="mx-28 px-[15px]">
        <div class="flex flex-row flex-wrap -mx-[15px]">
          <!-- Heading container -->
          <div
            class="px-[15px] text-center text-[#212a4b] absolute z-2000 -translate-y-2/4 -translate-x-2/4 top-1/2 left-1/2 w-[80%]"
          >
            <!-- Text-wrapper -->

            <h2 class="mb-[8px]">Hvem er vi?</h2>
            <p class="text-[#64636b] pb-4">Mød holdet bag MDS Stainless</p>
          </div>
        </div>
      </div>
      <!-- Team members -->
      <div class="flex flex-row -mx-[15px] flex-wrap p-12">
        <!-- person 1 -->
        <div class="p-2 md:w-1/2">
          <img
            src="https://mds-stainless.dk/img/uploads/mads_danielsen.jpg"
            alt=""
            class="align-middle w-full"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.text-wrapper {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 57%;
  left: 50%;
  z-index: 3;
}
</style>
