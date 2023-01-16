<template>
  <div>
    <Navbar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  head() {
    return {
      meta: [
        {
          name: "og:image",
        },
      ],
    };
  },
};
</script>
<style>
.service-section {
  h: 60;
  font-size: 700%;
  font-style: italic;
}
/* 
.about-section {

} */
</style>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;

  font-size: 16px;
  word-spacing: 1px;

  box-sizing: border-box;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
</style>
