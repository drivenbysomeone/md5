<template>
  <div>
    <!-- Link can be inserted below in header -->
    <link
      href="https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css"
      rel="stylesheet"
    />

    <section class="h-[300px] bg-white relative overflow-hidden w-full">
      <div
        class="absolute -translate-x-2/4 -translate-y-2/4 top-[65%] left-1/2 z-3 text-center"
      >
        <h1 class="hover:text-[#212a4b] text-6xl font-medium">Kontakt os</h1>
        <p class="text-darker relative">
          Du kan kontakte os ved at udfylde kontaktformularen nedenfor
        </p>
      </div>
    </section>

    <!-- Map & form container NOTE set mb-->

    <div class="relative overflow-visible lg:mb-96 mb-[600px] xl:mb-[140px]">
      <Map class="mapContainer" />

      <section
        class="absolute -translate-y-[75px] -translate-x-1/2 left-1/2 w-[85%] xl:-translate-y-3/4 xl:-left-6 xl:translate-x-16 xl:w-1/2"
      >
        <!-- Container fluid -->

        <!-- Row - form -->

        <div
          class="flex flex-wrap sm:justify-between flex-col justify-center -mx-[15px] relative font-normal w-auto lg:flex-row"
        >
          <!-- Card container -->
          <div class="px-[15px]">
            <div
              class="flex flex-col flex-wrap p-12 text-white bg-[#212a4b] border-solid border-black border-1"
            >
              <div class="flex flex-col lg:flex-row flex-wrap -mx-[15px]">
                <!-- Adjust width below -->
                <div
                  class="flex-col flex-wrap relative px-4 justify-around w-1/3 lg:flex-row lg:w-1/3"
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
                <!-- Adjust width below -->
                <div
                  class="flex flex-row gap-4 px-4 flex-wrap w-full lg:w-2/3 lg:flex-row"
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
                      <span class="skew-x-[40deg] font-medium text-sm"
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
      </section>
    </div>
  </div>
</template>

<script>
/* Package npm add mapbox-gl has been installed - see packages */
/* import mapboxgl from "mapbox-gl"; */
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

/* MAP */

/* .basemap {
  position: absolute;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
} */
#map {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}

/* Removes the maoBox logo on the bottom left corner of the map
NOTE:
This may violate the MapBox terms of service.  */

.mapboxgl-ctrl-logo {
  display: none !important;
}
</style>
