<template>
  <div>
    <section class="h-[330px] overflow-hidden relative bg-white">
      <div class="text-[#212a4b] text-center">
        <div class="text-wrapper">
          <h1 class="font-medium uppercase mb-2 text-5xl">Om os</h1>
          <p class="text-[#64636b] mb-4 mt-0 font-normal text-sm">
            Vi er en mindre moderne smedevirksomhed, som har til huse i
            Ejstrupholm Midtjylland. Vi har over 700kvm produktionslokaler,
            fyldt med topmoderne maskiner som kan håndtere små og store emner
            samt større serie, indenfor rørbearbejdning i rustfri stål.
          </p>
        </div>
      </div>
    </section>
    <!-- services mission - section -->
    <section
      class="py-4 md:py-14 w-full overflow-hidden bg-[#212a4b] text-white lg:py-7"
    >
      <div
        class="flex flex-wrap flex-col md:flex-row my-auto px-7 -mx-[15px] text-start lg:align-middle lg:items-center"
      >
        <div
          class="lg:w-1/2 pl-[15px] pr-[24px] sm:py-12 md:py-0 relative mb-4 mt-0"
        >
          <h2 class="uppercase mt-0 font-medium">
            alt fra prototype til serieproduktion
          </h2>
          <p class="mt-0 mb-0 relative my-auto">
            Vi er sparingspartner fra prototype til serie produktion, og vores
            mission er at lette vores kunders hverdag. Dette ligger vi i hurtige
            leveringer samt kvalitets arbejde, vi står altid klar til at hjælpe
            vores kunder med hurtige løsninger og haste leveringer. Som
            underleverandør til mejeri- & vindmølleindustrien ved vi at pris,
            leveringstid samt kvalitet er det vigtigste, Derfor er vores
            svejsepersonale blevet certificeret efter gældende standarder, og vi
            har erhvervet os WPQR`r og WPS`r til en lang række svejsesøm, så vi
            dækker et stort område indenfor rustfri rørsvejsning. MDS Stainless
            ApS har i foråret 2016 implementeret certificeringerne DS/EN ISO
            9001:2008 samt ISO 3834-2:2006.
          </p>
        </div>
        <div
          class="w-full lg:w-1/2 relative overflow-hidden m-auto -bottom-5 right-0 sm:hidden sm:invisible md:block md:visible"
        >
          <!-- Triangle -->
          <div
            class="absolute rotate-[45deg] h-[220%] w-[60%] bg-[#212a4b] -top-26 bottom-0 -left-10 right-0"
          ></div>
          <div
            class="absolute bg-[#212a4b] bottom-0 left-0 right-0 h-[42px] w-full"
          ></div>

          <!-- Picture here -->
          <img
            src="~/assets/images/rustfrit1.jpg"
            alt=""
            class="hidden lg:visible lg:block"
          />
        </div>
      </div>
    </section>
    <!-- Team section -->
    <section class="py-28 h-full mb-32">
      <!-- container - set Media Queries -->
      <div class="mx-auto">
        <div class="mx-28 px-[15px]">
          <div class="flex flex-row flex-wrap -mx-[15px] justify-center">
            <!-- Heading container -->
            <div class="px-[15px] text-center text-[#212a4b]">
              <!-- Text-wrapper -->

              <h2 class="mb-[8px] font-medium text-5xl">Hvem er vi?</h2>
              <p class="text-[#64636b] mt-0 mb-4 text-xl">
                Mød holdet bag MDS Stainless
              </p>
            </div>
          </div>
        </div>
        <!-- Team members -->
        <div class="flex flex-row -mx-[15px] flex-wrap">
          <!-- person 1 -->
          <div class="p-12 md:w-1/2 lg:w-1/3 xl:w-1/3 sm:w-full content-center">
            <img
              src="https://mds-stainless.dk/img/uploads/mads_danielsen.jpg"
              alt=""
              class="align-middle w-full"
            />
            <h3 class="font-medium text-lg pt-4 mb-2">Mads Danielsen</h3>
            <h4 class="font-medium text-[#64636b] text-xl mb-2">
              CTO and Founder
            </h4>
            <p class="text-lg p-0 m-0">
              <img
                src="~/assets/images/mail-blue.svg"
                alt=""
                class="w-4 mr-[2px] inline"
              />
              <a href="#" class="text-[#212a4b]">Mads@mds-stainless.com</a>
            </p>
          </div>
          <!-- Person 2 -->
          <div class="p-12 md:w-1/2 lg:w-1/3 xl:w-1/3 sm:w-full content-center">
            <img
              src="https://mds-stainless.dk/img/uploads/kasper.jpg"
              alt=""
              class="align-middle w-full"
            />
            <h3 class="font-medium text-lg pt-4 mb-2">Kasper Nissen</h3>
            <h4 class="font-medium text-[#64636b] text-xl mb-2">
              CEO and Partner
            </h4>
            <p class="text-lg p-0 m-0">
              <img
                src="~/assets/images/mail-blue.svg"
                alt=""
                class="w-4 mr-[2px] inline"
              />
              <a href="#" class="text-[#212a4b]">Kni@mds-stainless.com</a>
            </p>
          </div>
          <!-- Person 3 -->
          <div class="p-12 md:w-1/2 lg:w-1/3 xl:w-1/3 sm:w-full content-center">
            <img
              src="~/assets/images/team/peter-sauer.jpg"
              alt=""
              class="align-middle w-full"
            />
            <h3 class="font-medium text-lg pt-4 mb-2">Peter Sauer</h3>
            <h4 class="font-medium text-[#64636b] text-xl mb-2">
              Teamlead Pipe Bending
            </h4>
            <p class="text-lg p-0 m-0">
              <img
                src="~/assets/images/mail-blue.svg"
                alt=""
                class="w-4 mr-[2px] inline"
              />
              <a href="#" class="text-[#212a4b]"
                >Produktion@mds-stainless.com</a
              >
            </p>
          </div>
          <!-- Person 4 -->
          <div class="p-12 md:w-1/2 lg:w-1/3 xl:w-1/3 sm:w-full content-center">
            <img
              src="~/assets/images/team/kenny-both.jpg"
              alt=""
              class="align-middle w-full"
            />
            <h3 class="font-medium text-lg pt-4 mb-2">Kenny Both Rokkjær</h3>
            <h4 class="font-medium text-[#64636b] text-xl mb-2">
              Teamlead Welding
            </h4>
            <p class="text-lg p-0 m-0">
              <img
                src="~/assets/images/mail-blue.svg"
                alt=""
                class="w-4 mr-[2px] inline"
              />
              <a href="#" class="text-[#212a4b]"
                >produktion@mds-stainless.com</a
              >
            </p>
          </div>
          <!-- Person 5 -->
          <div class="p-12 md:w-1/2 lg:w-1/3 xl:w-1/3 sm:w-full content-center">
            <img
              src="https://mds-stainless.dk/img/uploads/mathilde.jpg"
              alt=""
              class="align-middle w-full"
            />
            <h3 class="font-medium text-lg pt-4 mb-2">Mathilde Leveillard</h3>
            <h4 class="font-medium text-[#64636b] text-xl mb-2">
              Production Engineer
            </h4>
            <p class="text-lg p-0 m-0">
              <img
                src="~/assets/images/mail-blue.svg"
                alt=""
                class="w-4 mr-[2px] inline"
              />
              <a href="#" class="text-[#212a4b]">mal@mds-stainless.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- Team CTA -->
    <section class="relative -translate-y-40">
      <!-- NOTE Container media query missing - explaings the btns going below section -->
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
          class="h-[500px] align-middle border-none object-cover"
          width="100%"
        />
      </picture>
      <!-- Blue overlay here! -->
      <div
        class="absolute z-1000 w-full inset-0 bg-[#212a4b] bg-opacity-90"
      ></div>
      <!-- Text wrapper -->
      <div
        class="absolute transform -translate-x-1/2 -translate-y-24 w-4/5 top-1/2 left-1/2 text-white text-center md:text-align-unset content-center flex flex-wrap justify-center -mt-20 lg:mt-0"
      >
        <h2 class="uppercase text-white font-semibold pb-6 mb-4 w-full">
          Har du brug for at komme i kontakt med os?
        </h2>

        <a href="#" class="mb-6">
          <Button contact class="">
            <span class="skew-x-[40deg] font-bold text-xl py-2"
              >Cutomer Service <br />

              <span class="font-normal skew-x-[40deg]">
                Ordre@mds-stainless.com</span
              >
            </span>
          </Button>
        </a>
        <!-- Media Query -->
        <a href="#" class="mb-6">
          <Button contact class="">
            <span class="skew-x-[40deg] font-bold text-xl py-2"
              >Quality Management <br />

              <span class="font-normal skew-x-[40deg]">
                Quality@mds-stainless.com</span
              >
            </span>
          </Button>
        </a>
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
