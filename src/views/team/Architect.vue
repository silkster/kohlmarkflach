<script>
import AppContent from '@/components/Content/Content.vue';
import HeadShot from '@/components/HeadShot/HeadShot.vue';
import ChrisChatfield from '@/assets/team/Chris_Chatfield.jpg';

export default {
  name: 'PresidentBio',
  components: {
    AppContent,
    HeadShot,
  },
  data() {
    return {
      photoSrc: ChrisChatfield,
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
          Another Pennsylvania native, Chris’s early inspiration for building
          and creating stemmed from countless hours in his father’s woodshop.
          His exposure to woodworking, along with his love of math and geometry,
          seemed ideally suited to the pursuit of architecture.
        </p>
        <p>
          Throughout high school and college, Chris worked construction,
          learning skills and trades that shaped his understanding of how houses
          come together. The knowledge gained during those years have made Chris
          a better architect and enable him to handle all construction needs on
          his historic home in downtown Leesburg.
        </p>
        <p>
          Despite his historic dwelling, Chris has always been drawn to clean,
          modern architecture and looks forward to designing and building his
          own home in the future.
        </p>
        <p>
          Chris still enjoys woodworking and has built nearly all his home
          furnishings. He volunteers with Makersmiths as a shop steward,
          teaching woodworking and maintaining the wood shop in Leesburg. Away
          from the sawdust and tools, Chris can be found cycling the gravel of
          Loudoun County and traveling to mountain bike trails throughout the
          region. Chris holds a degree in Architecture from Virginia Tech.
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
