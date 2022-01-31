<script>
import AppContent from '@/components/Content/Content.vue';
import HeadShot from '@/components/HeadShot/HeadShot.vue';
import TomFlach from '@/assets/team/Tom_Flach.jpg';

export default {
  name: 'PresidentBio',
  components: {
    AppContent,
    HeadShot,
  },
  data() {
    return {
      photoSrc: TomFlach,
    };
  },
  computed: {
    meta() {
      return this.$router.currentRoute.value.meta || null;
    },
    fullName() {
      const { meta } = this;
      return (meta && meta.fullName) || null;
    },
    title() {
      const { meta } = this;
      return (meta && meta.title) || null;
    },
  },
};
</script>
<template>
  <app-content :class="$style.content">
    <div :class="$style.container">
      <head-shot
        :photo-src="photoSrc"
        :full-name="fullName"
        :title="title"
        :class="$style.headShot"
      />
      <div :class="$style.bio">
        <p>
          Growing up in Pittsburgh, PA, Tom was exposed to a wide variety of
          regional and national architectural styles that helped shape his early
          interest in architecture. While earning undergraduate degrees in
          Economics and Psychology from Vanderbilt University, Tom would spend
          hours at the library exploring the works of Louis Kahn, Le Corbusier,
          Robert Stern, and others. But it was a class he took his senior year,
          The History of Modern Architecture, that was the catalyst to pursue a
          Master of Architecture degree from Virginia Tech.
        </p>
        <p>
          A consummate perfectionist with a deep knowledge of architectural
          styles and influences, Tom was a long-time employee and former Vice
          President for one of the areas top design/build companies before
          launching Kohlmark Flach Architects in 2015.
        </p>
        <p>
          An avid runner, outdoor enthusiast, and world traveler, Tom cherishes
          family above all else. When he's not working, running, biking, hiking,
          skiing, traveling, or hanging with the family, Tom dreams about
          designing and building his own piece of paradise in the Blue Ridge
          Mountains.
        </p>
        <p>
          A recipient of numerous awards, Tom is a distinguished member of the
          American Institute of Architecture (AIA) and licensed in Virginia.
        </p>
      </div>
    </div>
  </app-content>
</template>

<style module>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 210px;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.headShot {
  flex-grow: 1;
}
.bio {
  position: relative;
  flex-grow: 3;
}
.bio p {
  text-align: left;
  font-size: var(--font-size-small);
  margin-top: 0;
  line-height: 1.5;
}
</style>
