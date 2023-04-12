<template>
  <div id="mapContainer" class="basemap"></div>
</template>

<script>
import mapboxgl from "mapbox-gl";

export default {
  name: "BaseMap",

  data() {
    return {
      accessToken:
        "pk.eyJ1IjoiZHJpdmVuYnlzb21lb25lIiwiYSI6ImNsZnMwcG1rejAxbWEzdHFrdXFyOWthemUifQ.5T-XWYmOws9DnXj-sTcOVg",
    };
  },
  mounted() {
    mapboxgl.accessToken = this.accessToken;

    const mapContainer = new mapboxgl.Map({
      container: "mapContainer",

      style: "mapbox://styles/mapbox/light-v11",
      center: [9.317125, 56.035493],
      zoom: 4.6,
      cooperativeGestures: true,
      /* NOTE attributionControl removes the bottom right text on map - it MAY violate terms and services */
      attributionControl: false,
    });

    /*   mapContainer.scrollZoom.disable(); */

    mapContainer.addControl(new mapboxgl.FullscreenControl());

    /*     const mapOptions = {
      scrollZoom: {
        ctrl: true,
      },
    }; */

    const popup = new mapboxgl.Popup({ offset: 25 }).setText("MDS-virksomhed.");
    // .addTo(mapContainer);

    new mapboxgl.Marker({
      color: "#dc3545",
      scale: 1.2,
    })
      .setLngLat([9.317125, 56.035493])
      .setPopup(popup)
      .addTo(mapContainer);

    const nav = new mapboxgl.NavigationControl();
    mapContainer.addControl(nav, "top-right");

    const geolocate = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
    });

    mapContainer.addControl(geolocate, "top-right");
  },
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}

.basemap {
  width: 100%;
  height: 400px;
}
</style>
