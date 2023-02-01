<template>
  <div class="absolute h-full w-full">
    <transition-group name="fade" tag="div" class="h-full">
      <div v-for="i in [currentIndex]" :key="i" class="h-full">
        <img
          class="w-full h-full object-cover"
          :src="images[currentIndex].image"
        />
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Slideshow extends Vue {
  @Prop({ required: true }) images: { image: string; image_alt: string }[];

  currentIndex = 0;

  mounted() {
    if (this.images.length > 1)
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }, 4000);
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 3s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width: 100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width: 100%;
  opacity: 0;
}
</style>
