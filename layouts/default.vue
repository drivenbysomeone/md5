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
