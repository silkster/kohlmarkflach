<script>
import { mapState } from 'vuex';
import AppContent from '@/components/Content/Content.vue';
import HeadShot from '@/components/HeadShot/HeadShot.vue';
import AppSlider from '@/components/Slider/Slider.vue';
import AppBio from '@/components/Bio/Bio.vue';
import bannerJpg from '@/assets/banners/team.jpg';

export default {
  name: 'Team',
  components: {
    AppBio,
    AppContent,
    AppSlider,
    HeadShot,
  },
  data() {
    return {
      photos: [bannerJpg],
      ratioInfo: {
        height: 700,
        width: 1920,
      },
      selectedBio: null,
      showBio: false,
      show: {
        opacity: 1,
      },
      hide: {
        opacity: 2,
      },
    };
  },
  computed: {
    ...mapState('team', ['bios']),
    modalStyle() {
      const { showBio, show, hide } = this;
      return {
        ...(showBio ? show : hide),
      };
    },
  },
  watch: {
    selectedBio(bio) {
      this.showBio = !!bio;
      window.scroll({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
  methods: {
    openBio(bio) {
      this.selectedBio = bio;
    },
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
    <div :class="$style.container" v-if="!selectedBio">
      <head-shot
        v-for="bio in bios"
        :key="bio.id"
        :full-name="bio.fullName"
        :photoSrc="bio.photo"
        :title="bio.title"
        @click="openBio(bio)"
      />
    </div>
    <app-bio
      v-if="selectedBio"
      :bio="selectedBio"
      @back-to-team="selectedBio = null"
    />
  </app-content>
</template>

<style module>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1260px;
}
.container {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  transition: opacity 1s ease-in-out;
}
.headShot {
  cursor: pointer;
}
</style>
