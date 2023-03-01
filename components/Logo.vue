<template>
  <picture class="NuxtLogo">
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
      class="lazyload h-[40px] absolute left-4 top-7 z-20"
    />
    <div
      class="w-0 h-0 border-l-[200px] border-t-[96px] border-t-white-500 border-r-[70px] border-r-transparent absolute top-0 left-0 border-white z-10"
    ></div>
  </picture>

  <!-- ::After comes here -->
  <!--  
    content: "";
    width: 260%;
    height: 100%;
    background: #fff;
    transform: skew(-45deg,0deg);
    position: absolute;
    left: -120%;
    top: 0;
    z-index: -10; -->
</template>

<style>
.NuxtLogo {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
