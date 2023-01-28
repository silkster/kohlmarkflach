<script>
import AppContent from '@/components/Content/Content.vue';
import AppSlider from '@/components/Slider/Slider.vue';
import bannerJpg from '@/assets/banners/about.jpg';

export default {
  name: 'Culture',
  components: {
    AppContent,
    AppSlider,
  },
  data() {
    return {
      photos: [bannerJpg],
      ratioInfo: {
        height: 700,
        width: 1920,
      },
    };
  },
};
</script>

<template>
  <app-slider
    :nav-container-class="$style.sliderNavContainer"
    :photos="photos"
    :ratio-dimensions="ratioInfo"
  />
  <app-content :class="$style.content">
    <div :class="$style.container">
      <h1>About</h1>
      <p>
        Based in historic Clifton, VA, Kohlmark Flach Architects is a dynamic
        studio focused on residential projects for individuals, developers, and
        builders throughout the state of Virginia. Working in a wide range of
        contexts, our talented team approaches architecture with creativity and
        a passion for distinctive homes that enrich the lives of our clients.
        Launched in 2015, we experienced immediate success with award-winning
        work and a collective commitment to the needs, desires, functionality
        and budgets of our clients. Our body of work reflects our dedication to
        excellent design and continues to elevate our reputation as one of the
        finest firms in the area.
      </p>
      <p>
        The company is spear-headed by President Tom Flach, AIA. Tom is a
        consummate perfectionist with a deep knowledge of architectural styles
        and influences. Leveraging Tom's past experience managing both design
        and construction with Kohlmark Builders enables Kohlmark Flach
        Architects to better serve our clients and offer true turn- key
        solutions for projects in all stages of development.
      </p>
    </div>
  </app-content>
</template>

<style module>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  position: relative;
}

.container h1 {
  margin-bottom: 34px;
}

.container p {
  font-size: var(--p-font-size-special);
}

@media screen and (min-width: 768px) {
  .container p {
    font-size: var(--p-font-size-large);
  }
}
</style>
