<script>
import AppButton from '@/components/Button/Button.vue';
import AppSlider from '@/components/Slider/Slider.vue';
import AppContent from '@/components/Content/Content.vue';

export default {
  name: 'Home',
  components: {
    AppButton,
    AppContent,
    AppSlider,
  },
  methods: {
    gotoContact() {
      this.$router.push({ name: 'Contact' });
    },
  },
};
</script>

<template>
  <app-slider :nav-container-class="$style.sliderNavContainer" />
  <app-content :class="$style.container">
    <h1>Enriching lives through design.</h1>
    <p>
      At Kohlmark Flach, we approach architecture with passion, creativity and a
      desire to design homes that enrich the lives of our clients. To explore
      what's possible when a talented team of AIA architects work with you,
      please contact us!
    </p>
    <div :class="$style.buttonContainer">
      <app-button
        :class="$style.inquireButton"
        size="medium"
        @click="gotoContact"
        label="Inquire"
      />
    </div>
  </app-content>
</template>

<style module>
.container {
  text-align: center;
  max-width: 1060px;
}
.container h1 {
  margin-bottom: 20px !important;
}
.container p {
  font-size: var(--p-font-size-special);
}
.inquireButton {
  margin: 0 auto;
}
.buttonContainer {
  padding: 40px 0;
}
.sliderNavContainer {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

@media screen and (min-width: 768px) {
  .container h1 {
    margin-bottom: 34px !important;
  }
  .container p {
    font-size: var(--p-font-size-special-large);
  }
  .buttonContainer {
    padding: 80px 0 92px;
  }
}
</style>
