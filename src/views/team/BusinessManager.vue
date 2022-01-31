<script>
import AppContent from '@/components/Content/Content.vue';
import HeadShot from '@/components/HeadShot/HeadShot.vue';
import TraceyFlach from '@/assets/team/Tracey_Flach.jpg';

export default {
  name: 'PresidentBio',
  components: {
    AppContent,
    HeadShot,
  },
  data() {
    return {
      photoSrc: TraceyFlach,
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
          A native of Bradford, Pennsylvania, Tracey was surrounded by the
          natural beauty of the Allegheny National Forest and historic treasures
          like the Dresser Mansion, Phillips House and countless others on the
          National Register of Historic Places. The early exposure to
          architectural styles, spectacular gardens, manicured grounds and
          natural environment were clear influences on her educational and
          career path.
        </p>
        <p>
          Initially enrolled in Architectural Engineering at Penn State
          University, Tracey's blended interests in design, science and
          sociology were better suited to a degree in Landscape Architecture and
          nurtured her interest in designing outdoor spaces and planning new
          communities and built environments.
        </p>
        <p>
          A consummate professional, Tracey's communication and organizational
          skills are second only to her infectious smile and quick wit. Her
          skill sets are a huge win for any business, especially one that
          involves creativity and architecture.
        </p>
        <p>
          Tracey juggles work life with yoga, walking her dogs, spending time
          with family, and is always up for an adventure. She's an accomplished
          baker too, making some of the finest breads you'll ever taste. Watch
          out Martha Stewart!
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
