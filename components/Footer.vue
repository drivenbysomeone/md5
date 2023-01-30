<template>
  <footer class="relative absolute inset-x-0 overflow-hidden">
    <div class="md:w-full pr-4 pl-4 text-center">
      <div class="flex flex-row flex-wrap -mr-[-15px] -ml-[-15px]">
        <div class="md:w-full pr-4 pl-4">
          <picture class="NuxtLogo text-center inline-block">
            <source
              :srcSet="require('~/assets/images/mdstainless-logo.png')"
              type="image/png"
            />
            <source
              :srcSet="require('~/assets/images/mdstainless-logo.png')"
              type="image/png"
            />
            <img
              :src="require('~/assets/images/mdstainless-logo.png')"
              alt="MDS Stainless logo"
              class="lazyload w-[175px]"
            />
          </picture>
          <p class="md:w-full pr-4 pl-4 text-[#64636b] mt-0 mb-4 text-center">
            <i
              >- Smedeværksted med speciale i udarbejdelse af Rustfri rør
              løsninger til fødevarer- & Vindmølleindustrien.</i
            >
          </p>
          <!-- MISSING -->
          <!--   p {  
  display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px; 
  } -->
        </div>
      </div>
    </div>
    <div class="flex flex-row">
      <!-- more to follow -->
    </div>
  </footer>
</template>

<style>
/* AGAIN not working !! check the https://tailwindcss.com/docs/adding-custom-styles#using-css-and-layer*/
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
</style>
