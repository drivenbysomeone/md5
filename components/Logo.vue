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
      class="lazyload"
    />
  </picture>
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
