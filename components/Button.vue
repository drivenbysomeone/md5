<template>
  <!-- flex bg-white font-semibold uppercase border border-solid border-2 rounded-none mr-15 -skew-x-[40deg] ease-in transition ease-in hover:border-white hover:border-solid hover:border-2 hover:bg-opacity-0 duration-150 justify-end justify-center px-4 md:px-5 py-1 md:py-2 absolute bottom-[18px] right-[12%]" -->

  <button
    class=""
    :class="{
      'bg-gray-70 text-white': dark,
      'bg-transparent shadow-none hover:shadow-inner text-gray-800': flat,
      'translate-y-1 shadow-md bg-gray-200 opacity-50 cursor-not-allowed':
        disabled,
      'flex bg-white text-[#212a4b] hover:text-white font-semibold uppercase cursor-pointer rounded-none mr-15 -skew-x-[40deg] ease-in transition hover:border-white hover:border-solid hover:border-2 hover:bg-opacity-0 duration-150 justify-center md:px-12 px-6 py-1 md:py-2 absolute bottom-[18px] right-[12%] mb-[30px] mr-[15px] border-2':
        nav,
      'align-middle text-center font-normal no-underline btn-white md:px-12 md:py-2 bg-gray-600 text-white hover:bg-gray-700 leading-tight text-xs content-content-text':
        contact,
    }"
    :type="type"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component
export default class Button extends Vue {
  @Prop({ type: Boolean, default: false }) dark: boolean;
  @Prop({ type: Boolean, default: false }) flat: boolean;
  @Prop({ type: Boolean, default: false }) disabled: boolean;
  @Prop({ type: Boolean, default: false }) nav: boolean;
  @Prop({ type: Boolean, default: false }) contact: boolean;

  @Prop({ default: "" }) type: string;

  onClick(event: MouseEvent) {
    if (this.disabled) return;
    this.$emit("click", event);
  }
}
</script>

<!-- <script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component
export default class Button extends Vue {
  @Prop({ type: Boolean, default: false }) dark: boolean;
  @Prop({ type: Boolean, default: false }) flat: boolean;
  @Prop({ type: Boolean, default: false }) disabled: boolean;

  @Prop({ default: "" }) type: string;

  onClick(event: MouseEvent) {
    if (this.disabled) return;
    this.$emit("click", event);
  }
}
</script> -->
