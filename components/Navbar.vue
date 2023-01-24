<template>
  <nav fixed="top" toggleable="lg" type="dark" :class="{ scrolled }">
    <!-- NOTE lg is 1024px and NOT the required 991px - customize this! -->
    <div
      class="pl-[100px] lg:bg-[#212a4be6] -lg:mt-[9px] lg:w-full lg:py-0 px-4 -lg:mt-0 lg:z-199 lg:border-transparent lg:border-none lg:bg-transparent lg:after:hidden"
    >
      <!-- HJÆLP Collapse i div? -->
      <img
        src="~/assets/images/mdstainless-logo.png"
        alt="mds logo"
        class="m-auto NuxtLogo"
      />
      <div
        class="collapse bg-[#212a4ae6] z-10 pt-[50px] pb-2.5 pb h-auto"
      ></div>
    </div>
    <slot />
  </nav>
</template>

<!-- <script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
</script> -->
