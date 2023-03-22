<template>
  <div>
    <section class="h-[300px] overflow-hidden relative w-full bg-white">
      <div class="text-[#212a4b] text-center">
        <div class="text-wrapper">
          <h1 class="text-[56px] font-medium">Certificering</h1>
          <p class="text-[#64636b] mt-0">
            Her kan du se vores certeficeringer indenfor...
          </p>
        </div>
      </div>
    </section>
    <!-- Certificates -->

    <section class="bg-[#212a4b] text-white">
      <div class="px-[15px]">
        <div
          class="flex lg:flex-row flex-wrap flex-row md:flex-row sm:flex-col -mx-[15px] justify-between"
        >
          <div
            class="w-1/3 p-[48px] h-auto relative md:ml-[139.5px] lg:ml-[139.5px]xl:ml-[139.5px] m-0"
          >
            <h2 class="uppercase text-white font-medium mb-[20px] text-xl">
              21-805 MDS 2021
            </h2>

            <!-- Picture here -->
            <img src="~/assets/images/21-805-2021.png" alt="" class="" />
          </div>
          <div class="w-1/3 p-[48px] h-auto relative">
            <h2 class="uppercase text-white font-medium mb-[20px] text-xl">
              ISO 9001
            </h2>

            <!-- Picture here -->
            <img src="~/assets/images/iso_9001.png" alt="" class="" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.hero {
  height: 50vh;
  overflow: hidden;
  position: relative;
}
.text-wrapper {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 57%;
  left: 50%;
  z-index: 3;
}
.h1 {
  font-size: 3.5rem;
  line-height: 1.2;
}
</style>
