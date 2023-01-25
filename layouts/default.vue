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
<!-- <style>
.service-section {
  h: 60;
  font-size: 700%;
  font-style: italic;
}
/* 
.about-section {

} */
</style> -->

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

h2,
h1 {
  text-transform: uppercase;
}

/* ALL BELOW has been converted from SCSS to */

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
/*** FONT STYLES ***/

.text-gray {
  color: #d1d0da;
}
.text-darker {
  color: #64636b;
}
.text-blue {
  color: #212a4b;
}
@media (max-width: 768px) {
  h1 {
    font-size: 1.5rem;
  }
  h2 {
    font-size: 1.4rem;
  }
  h3 {
    font-size: 1.2rem;
  }
}
/*** BUTTON STYLES ***/
.btn-white {
  background: white;
  color: #212a4b;
  font-weight: 600;
  text-transform: uppercase;
  border: white solid 2px;
  border-radius: 0;
  margin-right: 15px;
  -ms-transform: skewX(-40deg);
  -webkit-transform: skewX(-40deg);
  transform: skewX(-40deg);
}
.btn-white:hover {
  border: white 2px solid;
  background: transparent;
  transition: 0.2s ease-in;
}
.btn-content {
  -ms-transform: skewX(40deg);
  -webkit-transform: skewX(40deg);
  transform: skewX(40deg);
  display: inline-block;
}
/*** SECTION STYLES ***/
section.tall {
  padding-top: 3rem;
  padding-bottom: 3rem;
}
div.tall {
  padding-top: 3rem;
  padding-bottom: 3rem;
}
@media (min-width: 800px) {
  section.tall {
    padding-top: 7rem;
    padding-bottom: 7rem;
  }
  div.tall {
    padding-top: 7rem;
    padding-bottom: 7rem;
  }
}
.bg-blue {
  background-color: #212a4b;
}
.bg-dark {
  background-color: #2f2e2e !important;
}
.bg-light {
  background-color: #bab8bd !important;
}
/***PAGES - SERVICES ***/
.hero {
  height: 50vh;
  overflow: hidden;
  position: relative;
}
.hero .text-wrapper {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 57%;
  left: 50%;
  z-index: 3;
}
.hero .text-wrapper h1 {
  font-size: 3.5rem;
  line-height: 1.2;
}
@media (max-width: 768px) {
  .hero .text-wrapper {
    position: relative;
    margin-top: 30px;
    margin-bottom: 30px;
    top: 100px;
    left: 0;
    transform: translate(0, 0);
    height: auto;
    min-height: 400px;
  }
  .hero .text-wrapper h1 {
    font-size: 2.2rem;
  }
}
@media (max-width: 330px) {
  .hero .text-wrapper {
    top: 75px;
  }
  .hero .text-wrapper h1 {
    font-size: 2rem;
  }
}
.info {
  height: auto;
  overflow: hidden;
}
.info .info-text {
  padding-right: 1.5rem;
  position: relative;
  line-height: 1.6;
  height: 400px;
}
.info .info-text .wrapper {
  position: absolute;
  top: 46%;
  left: 115px;
  width: 70%;
}
.info .info-text:after {
  display: block;
  position: inherit;
  height: 0;
  width: 0;
  content: "";
  left: 20%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-top: 437px solid #212a4b;
  border-right: 437px solid transparent;
  float: right;
  margin: 0px -486px 0 0;
  z-index: 5;
}
@media (max-width: 1900px) {
  .info .info-text:after {
    margin: 0px -493px 0 0;
  }
}
@media (max-width: 1770px) {
  .info .info-text:after {
    margin: 0px -513px 0 0;
  }
}
@media (max-width: 1561px) {
  .info .info-text:after {
    margin: 0px -527px 0 0;
  }
}
@media (max-width: 1407px) {
  .info .info-text:after {
    margin: 0px -537px 0 0;
  }
}
@media (max-width: 1315px) {
  .info .info-text:after {
    margin: 0px -547px 0 0;
  }
}
@media (max-width: 1219px) {
  .info .info-text:after {
    margin: 0px -557px 0 0;
  }
}
@media (max-width: 1105px) {
  .info .info-text:after {
    margin: 0px -567px 0 0;
  }
}
@media (max-width: 991px) {
  .info .info-text {
    height: auto;
  }
  .info .info-text .wrapper {
    position: relative;
    top: 100px;
    left: 15px;
    width: calc(100% - 30px);
  }
  .info .info-text .wrapper h1 {
    font-size: 1.5rem;
  }
  .info .info-text .wrapper p {
    font-size: 14px;
    margin-bottom: 70px;
  }
  .info .info-text:after {
    display: none;
  }
}
.info .info-image {
  z-index: 4;
  height: 400px;
  position: relative;
}
.info .info-image img {
  width: 100%;
  position: absolute;
  bottom: 0;
}
@media (max-width: 1500px) {
  .info .info-image img {
    width: 130%;
  }
}
@media (max-width: 991px) {
  .info .info-image {
    height: 250px;
  }
  .info .info-image img {
    width: 100%;
    position: relative;
  }
}
@media (max-width: 330px) {
  .info .info-image {
    height: 200px;
  }
}
.info .breadcrumbs {
  position: absolute;
  top: 120px;
  left: 115px;
}
.info .breadcrumbs img {
  margin-top: -3px;
}
.info .breadcrumbs p {
  font-weight: 600;
  display: inline;
  padding-left: 10px;
}
@media (max-width: 991px) {
  .info .breadcrumbs {
    top: 100px;
    left: 15px;
  }
}
@media (max-width: 768px) {
  .info {
    height: auto;
  }
}
.content {
  padding-left: 100px;
  padding-right: 100px;
}
.content .content-text {
  padding-right: 70px;
}
@media (max-width: 991px) {
  .content {
    padding-left: 0px;
    padding-right: 0px;
  }
  .content .content-text {
    padding-right: 15px;
  }
  .content .content-images {
    padding-left: 0px;
    padding-right: 0px;
  }
}

/*   padding: 28px; */

h2,
h1 {
  text-transform: uppercase;
  font-size: 2rem;
}
</style>
