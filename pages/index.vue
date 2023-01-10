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
  <section
    class="bg-[#212a4b] text-white flex flex-wrap relative mx-auto box-border -mr-15 -ml-15 p-12"
  >
    <div class="service-component block">
      <h2 class="uppercase text-xl mb-5 leading-tight">Rørbukning</h2>
      <p class="text-[#d1d0da] text-[15px] mb-50">
        Vi udfører rørbukning i rustfri stål, fra Ø10-Ø90mm og op til 6000mm
        rørlængder, med mange forskellige radier.
      </p>
      <a href="#">
        <button
          class="flex bg-white font-semibold uppercase border border-solid border-2 rounded-none mr-15 -skew-x-[40deg] ease-in transition ease-in hover:border-white hover:border-solid hover:border-2 hover:bg-opacity-0 duration-150 justify-end justify-center px-4 md:px-5 py-1 md:py-2 absolute bottom-[18px] right-[12%]"
        >
          <span class="text-[#212a4b] skew-x-[40deg] hover:text-white"
            >Læs mere</span
          >
        </button>
      </a>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "IndexPage",
});
</script>
