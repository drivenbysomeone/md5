<template>
  <div>
    <section class="h-[300px] bg-white relative overflow-hidden w-full">
      <div
        class="absolute -translate-x-2/4 -translate-y-2/4 top-[57%] left-1/2 z-3 text-center"
      >
        <h1 class="text-[#212a4b] text-6xl leading-5 my-auto font-medium mb-2">
          Kontakt os
        </h1>
        <p class="text-darker">
          Du kan kontakte os ved at udfylde kontaktformularen nedenfor
        </p>
      </div>
    </section>

    <section class="map-section">
      <!-- Row - form -->
      <div class="flex flex-wrap -mr-[15px] -ml-[15px]">
        <div class="absolute w-full h-full left-0 top-0 z-0 cursor-grab">
          <ClientOnly>
            <GMap
              id="map"
              ref="gMap"
              language="en"
              :center="$breakpoints ? mapCenterMobile : mapCenter"
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
          </ClientOnly>
        </div>
      </div>
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
  padding: 4rem;
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
</style>
