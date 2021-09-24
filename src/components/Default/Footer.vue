<template>
  <div class="pg-footer">
    <footer class="footer">
      <svg
        class="footer-wave-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
      >
        <path
          class="footer-wave-path"
          d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"
        ></path>
      </svg>
      <div class="footer-copyright">
        <div class="footer-copyright-wrapper">
          <p class="footer-copyright-text">
            <a class="footer-copyright-link" href="#" target="_self">
              ©2021. | UTMACH - PEDAGOGÍA DE LAS CIENCIAS EXPERIMENTALES 8VO D1.
              | All rights reserved.
            </a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.pg-footer {
  font-family: "Khand", sans-serif;
}
.footer {
  background-color: #006658;
}
.footer-wave-svg {
  background-color: transparent;
  display: block;
  height: 30px;
  position: relative;
  top: -1px;
  width: 100%;
}
.footer-wave-path {
  fill: #fffff2;
}
.footer-copyright {
  background-color: #027b9a;
  color: #fff;
  padding: 15px 30px;
  text-align: center;
}
.footer-copyright-text {
  color: #fff;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 0;
  margin-top: 0;
}
.footer-copyright-link {
  color: #fff;
  text-decoration: none;
}
/* Media Query For different screens */
@media (min-width: 320px) and (max-width: 479px) {
  /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
  .footer-content {
    margin-left: auto;
    margin-right: auto;
    max-width: 1230px;
    padding: 40px 15px 1050px;
    position: relative;
  }
}
@media (min-width: 480px) and (max-width: 599px) {
  /* smartphones, Android phones, landscape iPhone */
  .footer-content {
    margin-left: auto;
    margin-right: auto;
    max-width: 1230px;
    padding: 40px 15px 1050px;
    position: relative;
  }
}
@media (min-width: 600px) and (max-width: 800px) {
  /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */
  .footer-content {
    margin-left: auto;
    margin-right: auto;
    max-width: 1230px;
    padding: 40px 15px 1050px;
    position: relative;
  }
}
@media (min-width: 801px) {
  /* tablet, landscape iPad, lo-res laptops ands desktops */
}
@media (min-width: 1025px) {
  /* big landscape tablets, laptops, and desktops */
}
@media (min-width: 1281px) {
  /* hi-res laptops and desktops */
}
@media (min-width: 760px) {
  .footer-content {
    margin-left: auto;
    margin-right: auto;
    max-width: 1230px;
    padding: 40px 15px 450px;
    position: relative;
  }
  .footer-wave-svg {
    height: 50px;
  }
  .footer-content-column {
    width: 24.99%;
  }
}
@media (min-width: 568px) {
  /* .footer-content-column {
      width: 49.99%;
  } */
}
</style>
