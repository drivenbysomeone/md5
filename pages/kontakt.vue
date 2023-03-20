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
          <div class="px-[15px] sm:w-full pr-4 pl-4 xl:w-1/2 absolute">
            <div
              class="flex p-12 text-white bg-[#212a4b] border-solid border-black border-1"
            >
              <div class="flex flex-row -mx-[15px]">
                <div class="flex-col lg:w-2/5 pr-4 pl-4">
                  <!-- Heading 3 -->
                  <h3 class="pb-4">MDS Stainless Aps</h3>
                  <ul class="list-none">
                    <li class="pb-4">
                      <!-- Immage missing + link-ref -->
                      <a href="#" width="15px" class="mr-1">69 14 92 55</a>
                    </li>
                    <li class="pb-4">
                      <!-- Image missing + link-ref -->
                      <a href="#">Info@mds-stainless.com</a>
                    </li>
                    <li class="pb-4">
                      <!-- Image missing -->
                      Møllebakken 1,
                      <br />
                      <span class="md:ml-6">7361 Ejstrupholm </span>
                    </li>
                  </ul>
                </div>
                <!-- INPUT FIELDS Remember Use input html for input fields -->
                <div class="lg:w-3/5 pr-4 pl-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ClientOnly>
        <!-- <div class="w-full h-[400px] z-99 rounded-none text-white bg"> -->
        <!-- Card container -->
        <!-- <div class="p-12"> -->
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
        <!-- </div> -->
        <!-- </div> -->
      </ClientOnly>
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

  data() {
    return {
      mailSent: false,
      form: {},
      mapCenter: {
        lat: 55.0591763,
        lng: 5.5849222,
      },
      mapCenterMobile: {
        lat: 53.8591763,
        lng: 12.5849222,
      },
      polen: {
        lat: 53.1182999,
        lng: 19.0391502,
      },
      danmark: {
        lat: 56.03546,
        lng: 9.31692,
      },
      mapZoom: 5,

      mapStyles: [
        {
          elementType: "geometry",
          stylers: [
            {
              color: "#f5f5f5",
            },
          ],
        },
        {
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#616161",
            },
          ],
        },
        {
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#f5f5f5",
            },
          ],
        },
        {
          featureType: "administrative.land_parcel",
          elementType: "labels",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "administrative.land_parcel",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#bdbdbd",
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [
            {
              color: "#eeeeee",
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#757575",
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [
            {
              color: "#e5e5e5",
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#9e9e9e",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [
            {
              color: "#ffffff",
            },
          ],
        },
        {
          featureType: "road.arterial",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#757575",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [
            {
              color: "#dadada",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#616161",
            },
          ],
        },
        {
          featureType: "road.local",
          elementType: "labels",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "road.local",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#9e9e9e",
            },
          ],
        },
        {
          featureType: "transit.line",
          elementType: "geometry",
          stylers: [
            {
              color: "#e5e5e5",
            },
          ],
        },
        {
          featureType: "transit.station",
          elementType: "geometry",
          stylers: [
            {
              color: "#eeeeee",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#c9c9c9",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#9e9e9e",
            },
          ],
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
