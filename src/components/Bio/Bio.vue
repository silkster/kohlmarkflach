<script>
import { mapState } from 'vuex';
import { nextTick } from 'vue';
import HeadShot from '@/components/HeadShot/HeadShot';
import AppButton from '@/components/Button/Button';

export default {
  name: 'app-bio',
  components: { HeadShot, AppButton },
  props: {
    bio: {
      type: Object,
      default() {
        return null;
      },
    },
  },
  data() {
    return {
      isSmallScreen: true,
    };
  },
  computed: {
    ...mapState('device', ['screen']),
    isBio() {
      return true;
    },
  },
  watch: {
    screen: {
      immediate: true,
      async handler(screen) {
        await nextTick();
        this.isSmallScreen = screen.width < 1024;
      },
    },
  },
};
</script>

<template>
  <div :class="$style.container">
    <div :class="$style.headshotContainer">
      <head-shot
        :photo-src="bio.photo"
        :full-name="bio.fullName"
        :title="bio.title"
        :class="$style.headShot"
        :is-bio="isBio"
      />
      <div :class="$style.buttonWrap" v-if="!isSmallScreen">
        <app-button size="medium" @click="$emit('back-to-team')"
          >Back to Team</app-button
        >
      </div>
    </div>
    <div :class="$style.bio" v-html="bio.copy"></div>

    <app-button
      v-if="isSmallScreen"
      size="medium"
      @click="$emit('back-to-team')"
      label="Back to Team"
      :class="$style.lowerButton"
    />
  </div>
</template>

<style module>
.container {
  position: relative;
}
.headshotContainer {
  position: relative;
  margin-bottom: 0px;
}
.headShot {
  flex-grow: 1;
}
.bio {
  position: relative;
  flex-grow: 3;
  overflow-y: auto;
  width: 80vw;
  max-width: 384px;
}
.bio p {
  color: var(--text-color-alt);
  font-size: var(--font-size-small);
  line-height: 1.5;
  margin-top: 0;
  max-width: 490px;
  text-align: left;
}
.buttonWrap {
  display: flex;
  justify-content: flex-start;
  margin: -10px auto 30px;
}
.lowerButton {
  margin-bottom: 92px;
}
@media screen and (min-width: 1024px) {
  .container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    column-gap: 5px;
  }
  .bio {
    width: 430px;
    max-width: unset;
    padding-top: 16px;
  }
  .buttonWrap {
    margin: 0 auto 30px;
    padding-top: 20px;
  }
}
</style>
