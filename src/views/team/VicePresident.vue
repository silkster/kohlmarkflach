<script>
import AppContent from '@/components/Content/Content.vue';
import HeadShot from '@/components/HeadShot/HeadShot.vue';
import JeremyPotter from '@/assets/team/Jeremy_Potter.jpg';

export default {
  name: 'VicePresidentBio',
  components: {
    AppContent,
    HeadShot,
  },
  data() {
    return {
      photoSrc: JeremyPotter,
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
  <app-content>
    <div :class="$style.container">
      <head-shot
        :photo-src="photoSrc"
        :full-name="fullName"
        :title="title"
        :class="$style.headShot"
      />
      <div :class="$style.bio">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          aliquam, erat et ornare mollis, ligula turpis lobortis dui, at congue
          eros orci aliquet erat. Integer cursus metus eu luctus vulputate.
          Pellentesque vehicula, mi non gravida dignissim, magna enim gravida
          diam, sit amet interdum mauris ligula a augue. Fusce quis massa lacus.
          Vestibulum ultrices magna at risus pellentesque porttitor. Donec vitae
          est suscipit, molestie ex non, varius elit. Donec cursus congue
          vehicula. Integer ac urna accumsan, pharetra sem quis, sagittis urna.
          Nunc dapibus bibendum enim, vitae elementum arcu facilisis a. Nullam
          finibus pharetra libero eget vestibulum. Cras ut libero vitae tortor
          mollis varius. Ut et ipsum ut tortor elementum gravida nec vitae
          dolor. Pellentesque libero eros, congue non tortor vel, lobortis
          bibendum dui. Suspendisse laoreet molestie ante quis finibus.
          Vestibulum aliquet orci quis felis eleifend laoreet. Nunc hendrerit
          dictum euismod.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at luctus
          augue, at pharetra risus. Mauris nec pulvinar massa. Aliquam quam
          lorem, ultricies non sem sit amet, tempor consequat ante. Aliquam a
          convallis urna. Nullam a urna cursus, consequat metus at, interdum
          risus. Mauris tincidunt rutrum ligula, ac vestibulum erat. Phasellus
          eu erat et dolor pellentesque porta vel facilisis metus. Maecenas eu
          enim purus. Donec feugiat condimentum ligula, non ullamcorper turpis
          feugiat ut. Integer ut nisi sit amet leo fermentum mattis.
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
