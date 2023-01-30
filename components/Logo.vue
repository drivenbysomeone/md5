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
      class="lazyload h-[40px]"
    />
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
