<template>
  <div>
    <SubHeader
      :title="content.hero_section.hero_heading"
      :img="content.hero_section.hero_background"
    />

    <section class="py-14 sm:py-28">
      <div class="container px-4 mx-auto text-center">
        <h2 class="pb-10">
          <span class="pre">{{ content.section1.heading_line1 }}</span
          ><br />{{ content.section1.heading_line2 }}
        </h2>
        <p class="prose mx-auto" v-html="$md.render(content.section2.body)"></p>
      </div>
    </section>
    <section>
      <div
        class="container px-4 mx-auto flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-32 pb-14 sm:pb-28"
      >
        <div class="w-full lg:w-3/12 relative h-96 overflow-hidden">
          <nuxt-picture
            sizes="sm:100vw md:100vw lg:100vw"
            :src="content.section2.image"
            :alt="content.section2.image_alt"
            class="NuxtPictureCover"
          />
        </div>

        <div class="w-full lg:w-5/12">
          <h2 class="font-bold text-3xl sm:text-4xl flex flex-col pt-5">
            {{ content.section2.heading_line1 }}
            <span class="pre">{{ content.section2.heading_line2 }}</span>
          </h2>

          <p class="pt-5" v-html="$md.render(content.section2.body)"></p>
        </div>
      </div>
    </section>
    <section>
      <div
        class="container px-4 mx-auto flex flex-col-reverse lg:flex-row justify-center items-center gap-10 lg:gap-32 pb-14 sm:pb-28"
      >
        <div class="w-full lg:w-5/12">
          <h2 class="font-bold text-3xl sm:text-4xl flex flex-col pt-5">
            {{ content.section3.heading_line1 }}
            <span class="pre">{{ content.section3.heading_line2 }}</span>
          </h2>

          <p class="pt-5" v-html="$md.render(content.section2.body)"></p>
        </div>
        <div class="w-full lg:w-3/12 relative h-96 overflow-hidden">
          <nuxt-picture
            sizes="sm:100vw md:100vw lg:100vw"
            :src="content.section3.image"
            :alt="content.section3.image_alt"
            class="NuxtPictureCover"
          />
        </div>
      </div>
    </section>

    <Cta
      title="Skal vi hjælpe dig?"
      description="Ring til os i dag og hør hvordan vi kan hjælpe dig!"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

/* import Phone from "~/assets/svg/phone.svg?inline"; */
/* import Email from "~/assets/svg/email.svg?inline"; */
/* import Cta from "../components/Cta.vue"; */
/* import SubHeader from "../components/SubHeader.vue"; */

@Component({
  async asyncData({ $content }) {
    const content = await $content("pages/om-os").fetch();

    return { content };
  },

  head() {
    return {
      title: (this as any).content.meta_title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: (this as any).content.meta_description,
        },
        /*         {
          name: "og:image",
          content: require("~/static/img/about.jpg"),
        }, */
      ],
    };
  },
  components: {
    Phone,
    Email,
    Cta,
    SubHeader,
  },
})
export default class Services extends Vue {
  scrollToBottom() {
    let footer_form = document.querySelector("#footer_form");
    if (footer_form) {
      window.scrollTo({
        top: footer_form.getBoundingClientRect().top + window.scrollY - 50,
        behavior: "smooth",
      });
    }
  }
  content: {
    hero_section: any;
    section1: any;
    section2: any;
    section3: any;
  };
}
</script>

<style lang="scss" scoped></style>
