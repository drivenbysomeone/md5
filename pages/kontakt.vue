<template>
  <div>
    <section class="h-[300px] bg-white relative overflow-hidden w-full">
      <div
        class="absolute -translate-x-2/4 -translate-y-2/4 top-[57%] left-1/2 z-3 text-center"
      >
        <h1 class="text-[#212a4b] text-6xl font-medium">Kontakt os</h1>
        <p class="text-darker">
          Du kan kontakte os ved at udfylde kontaktformularen nedenfor
        </p>
      </div>
    </section>
    <!--  -->
    <section class="map-section">
      <!-- Container fluid -->
      <div class="px-[15px]">
        <!-- Row - form -->

        <div class="flex flex-wrap flex-row -mx-[15px] relative font-normal">
          <!-- Card container -->
          <div class="px-[15px] sm:w-full xl:w-1/2 lg:w-1/2">
            <div
              class="flex flex-col p-12 text-white bg-[#212a4b] border-solid border-black border-1"
            >
              <div class="flex flex-row flex-wrap -mx-[15px]">
                <div
                  class="flex-col relative w-full lg:flex-col px-4 lg:w-[43%]"
                >
                  <!-- Heading 3 -->
                  <h3 class="pb-4 font-semibold text-3xl">MDS Stainless Aps</h3>
                  <ul class="list-none">
                    <li class="pb-4">
                      <!-- Immage missing + link-ref -->

                      <img
                        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDM4NCAzODQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM4NCAzODQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPGc+Cgk8Zz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzYyLjcsMjY2LjdjLTI2LjYsMC01Mi4zLTQuMy03Ni4yLTEyLjJjLTcuNC0yLjMtMTUuOC0wLjYtMjEuNyw1LjJsLTQ2LjksNDcKCQkJYy02MC41LTMwLjctMTA5LjktODAuMS0xNDAuNi0xNDAuNWw0Ni45LTQ3LjFjNS45LTUuOSw3LjYtMTQuMyw1LjItMjEuN2MtNy45LTIzLjktMTIuMi00OS42LTEyLjItNzYuMkMxMTcuMyw5LjUsMTA3LjgsMCw5NiwwCgkJCUgyMS4zQzkuNiwwLDAsOS41LDAsMjEuM0MwLDIyMS43LDE2Mi4zLDM4NCwzNjIuNywzODRjMTEuOCwwLDIxLjMtOS41LDIxLjMtMjEuM1YyODhDMzg0LDI3Ni4yLDM3NC41LDI2Ni43LDM2Mi43LDI2Ni43eiIvPgoJPC9nPgo8L2c+Cjwvc3ZnPgo="
                        alt=""
                        class="w-[15px] inline"
                      />
                      <a href="#" width="15px" class="mr-1">69 14 92 55</a>
                    </li>
                    <li class="pb-4">
                      <!-- Image missing + link-ref -->
                      <img
                        src="~/assets/images/mail.svg"
                        alt=""
                        class="w-[15px] inline"
                      />
                      <a href="#">Info@mds-stainless.com</a>
                    </li>
                    <li class="pb-4">
                      <img
                        src="~/assets/images/location.svg"
                        alt=""
                        class="w-[15px] inline"
                      />
                      <!-- Image missing -->
                      Møllebakken 1,
                      <br />
                      <span class="md:ml-6">7361 Ejstrupholm </span>
                    </li>
                  </ul>
                </div>

                <div
                  class="flex flex-col gap-4 w-full box-content px-4 lg:w-[50%]"
                >
                  <input
                    type="text"
                    class="py-4 w-full bg-white px-2 h-2 text-black"
                    placeholder="Navn"
                  />
                  <input
                    type="text"
                    class="py-4 w-full bg-white px-2 h-2 text-black"
                    placeholder="Email"
                  />
                  <input
                    type="text"
                    class="py-4 w-full bg-white px-2 h-2 text-black"
                    placeholder="Telefon"
                  />
                  <textarea
                    id="message"
                    rows="4"
                    class="block p-2.5 w-full text-sm text-black placeholder:text-gray-400 placeholder:text-base focus:border-blue-500 active:border-blue-500"
                    placeholder="Besked"
                  ></textarea>

                  <a href="#" class="flex justify-end w-full">
                    <Button contact class="px-10 h-full">
                      <span
                        class="skew-x-[40deg] font-medium text-sm justify-end"
                        >Send besked</span
                      >
                    </Button>
                  </a>

                  <!-- INPUT FIELDS Remember Use input html for input fields -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--       <ClientOnly>
      
        <GMap
          id="map"
          ref="gMap"
          language="en"
          :center="$breakpoints.xs ? mapCenterMobile : mapCenter"
          :options="{
            fullscreenControl: false,
            styles: mapStyles,
            disableDefaultUI: true,
          }"
          :zoom="mapZoom"
        >
          <GMapMarker :position="danmark"> </GMapMarker>
          <GMapMarker :position="polen"> </GMapMarker>
        </GMap>
  
      </ClientOnly> -->
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "MDS Stainless ➟ Hør hvad vi kan gøre for dig!",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Kontakt MDS Stainless i dag og hør mere om hvad vi kan gøre for dig.",
        },
      ],
    };
  },

  methods: {
    resetForm() {
      this.form = {
        name: "",
        email: "",
        phone: "",
        message: "",
      };
    },
    async sendMail() {
      let res = await this.$axios.$post(
        "https://cms.littlegiants.dk/forms/submitContactFormEmail",
        this.form
      );
      this.mailSent = true;
      this.resetForm();
    },
  },
};
</script>

<style>
.kontakt-hero {
  height: 300px;
  overflow: hidden;
  position: relative;
}
section.map-section {
  position: relative;
  padding: 64px;
}
@media only screen and (max-device-width: 480px) {
  section.map-section {
    padding: inherit;
  }
}
section.map-section #map {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
section.map-section .card {
  z-index: 99;
  border-radius: 0;
}
section.map-section .card .btn {
  float: right;
  margin-right: 20px;
}
section form .form-control {
  border-radius: 0;
}
section form input,
textarea {
  border: none;
  background-color: #f5f5f5;
  resize: none;
  padding: 2rem;
}
section form input::placeholder,
textarea::placeholder {
  color: #212121;
}
a {
  color: white;
}

.card {
  z-index: +99;
  border-radius: 0;
}
</style>
