<template>
  <footer class="absolute inset-x-0 overflow-hidden pt-6">
    <div
      class="md:w-full pl-4 text-center py-6 pb-6 mr-auto ml-auto w-full pl- pr-[15px] xl:max-w-6xl lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540]"
    >
      <div class="flex flex-row flex-wrap -mr-[15px] -ml-[15px]">
        <div class="md:w-full pr-4 pl-4">
          <picture class="NuxtLogo text-center inline-block">
            <source
              :srcSet="require('~/assets/images/mdstainless-logo.png')"
              type="image/png"
            />
            <source
              :srcSet="require('~/assets/images/mdstainless-logo.png')"
              type="image/png"
            />
            <img
              :src="require('~/assets/images/mdstainless-logo.png')"
              alt="MDS Stainless logo"
              class="lazyload w-[175px]"
            />
          </picture>
          <p class="md:w-full text-[#64636b] mt-0 mb-4 text-center pt-6 pb-6">
            <i
              >- Smedeværksted med speciale i udarbejdelse af Rustfri rør
              løsninger til fødevarer- & Vindmølleindustrien.</i
            >
          </p>
          <!-- MISSING -->
          <!--   p {  
  display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px; 
  } -->
        </div>

        <!-- ROWS starts here! -->
      </div>
      <div class="flex flex-wrap -ml-[15px] -mr-[15px]">
        <div
          class="table-auto pb-[48px] pl-[15px] pr-[15px] flex-grow basis-0 w-full"
        >
          <ul
            class="list-none uppercase font-semibold block text-[18px] text-center"
          >
            <li class="p-4 inline">ydelser</li>
            <li class="p-4 inline">certificering</li>
            <li class="p-4 inline">galleri</li>
            <li class="p-4 inline">om os</li>
            <li class="p-4 inline">kontakt os</li>
            <li class="p-4 inline">cookiepolitik</li>
          </ul>
        </div>
      </div>
      <div class="flex flex-row -mr-[15px] -ml-[15px]">
        <div class="text-[#64636b] basis-0 flex-grow w-full">
          Møllebakken 1, 7361 Ejstrupholm, Danmark
          <br />
          <span>
            <img
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDQyNi43IDQyNi43IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MjYuNyA0MjYuNzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMyMTJBNEI7fQo8L3N0eWxlPgo8Zz4KCTxnPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zODQsNDIuN0g0Mi43Yy0yMy42LDAtNDIuNSwxOS4xLTQyLjUsNDIuN0wwLDM0MS4zQzAsMzY0LjksMTkuMSwzODQsNDIuNywzODRIMzg0CgkJCWMyMy42LDAsNDIuNy0xOS4xLDQyLjctNDIuN3YtMjU2QzQyNi43LDYxLjgsNDA3LjYsNDIuNywzODQsNDIuN3ogTTM4NCwxMjhMMjEzLjMsMjM0LjdMNDIuNywxMjhWODUuM0wyMTMuMywxOTJMMzg0LDg1LjNWMTI4eiIKCQkJLz4KCTwvZz4KPC9nPgo8L3N2Zz4K"
              width="15px"
              alt="mail"
              class="mr-1 inline"
            />
            info@mds-stainless.com</span
          >
          <br />
          <span>
            <img
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDM4NCAzODQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM4NCAzODQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMjEyQTRCO30KPC9zdHlsZT4KPGc+Cgk8Zz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzYyLjcsMjY2LjdjLTI2LjYsMC01Mi4zLTQuMy03Ni4yLTEyLjJjLTcuNC0yLjMtMTUuOC0wLjYtMjEuNyw1LjJsLTQ2LjksNDcKCQkJQzE1Ny40LDI3NiwxMDgsMjI2LjYsNzcuMywxNjYuMmw0Ni45LTQ3LjFjNS45LTUuOSw3LjYtMTQuMyw1LjItMjEuN2MtNy45LTIzLjktMTIuMi00OS42LTEyLjItNzYuMkMxMTcuMyw5LjUsMTA3LjgsMCw5NiwwSDIxLjMKCQkJQzkuNiwwLDAsOS41LDAsMjEuM0MwLDIyMS43LDE2Mi4zLDM4NCwzNjIuNywzODRjMTEuOCwwLDIxLjMtOS41LDIxLjMtMjEuM1YyODhDMzg0LDI3Ni4yLDM3NC41LDI2Ni43LDM2Mi43LDI2Ni43eiIvPgoJPC9nPgo8L2c+Cjwvc3ZnPgo="
              width="15px"
              alt="phone"
              class="mr-1 inline"
            />69 14 92 55
          </span>
        </div>
      </div>
      <hr class="box-content h-0 overflow-visible mt-4 mb-4" />

      <div class="flex flex-row flex-wrap -mr-[15px] -ml-[15px]">
        <div class="basis flex-grow w-full">
          © 2020 MDS Stainless ApS - Design af
          <a href="https://littlegiants.dk/" target="_blank">LittleGiants</a>
        </div>
      </div>
    </div>
    <!-- Banner container here -->
    <div class="absolute overflow-hidden bottom-0 right-0"></div>
    <!--  -->
    <div class="flex justify-center m-0 p-0 h-24">
      <picture class="NuxtLogo h-16 m-0">
        <img
          src="~/assets/images/logo_kræftensbekæmpelse.png"
          alt="logo kræftens bekæmpelse"
          width="w-[300px]"
          class="relative scale-75 -top-14"
        />
      </picture>
    </div>
  </footer>
</template>

<style>
/* AGAIN not working !! check the https://tailwindcss.com/docs/adding-custom-styles#using-css-and-layer*/
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
</style>
