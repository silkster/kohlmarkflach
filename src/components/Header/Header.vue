<script>
import { mapState } from 'vuex';
import logoSrc from '@/assets/logo.svg';
import namedRoutes from '@/router/namedRoutes.js';
import AppMenu from '@/components/Menu/Menu.vue';
import InlineSvg from 'vue-inline-svg';

export default {
  name: 'app-header',
  components: { AppMenu, InlineSvg },
  props: {
    isAbsolute: {
      type: Boolean,
      default: false,
    },
    isFixed: {
      type: Boolean,
      default: true,
    },
    isWhite: {
      type: Boolean,
      default: false,
    },
    logoSize: {
      type: String,
    },
  },
  data() {
    return {
      logoSrc,
    };
  },
  computed: {
    ...mapState('device', [
      'isDesktop',
      'isLarge',
      'isLandscape',
      'isPortrait',
      'isTablet',
      'isSmall',
      'isMobile',
    ]),
    shouldFixHeader() {
      return (
        !this.isAbsolute &&
        this.isFixed &&
        !(this.isSmall || this.isMobile || (this.isTablet && this.isPortrait))
      );
    },
    shouldNotFixHeader() {
      return (
        this.isAbsolute ||
        (this.isFixed &&
          (this.isSmall || this.isMobile || (this.isTablet && this.isPortrait)))
      );
    },
    headerClasses() {
      const { $style, shouldFixHeader, shouldNotFixHeader, isWhite } = this;
      return {
        ...(shouldNotFixHeader ? { [$style.absolute]: true } : {}),
        ...(shouldFixHeader ? { [$style.fixed]: true } : {}),
        ...(isWhite ? { [$style.white]: true } : {}),
      };
    },
    logoClasses() {
      const { $style, logoSize } = this;
      return {
        [$style.logo]: true,
        [$style.logoSmall]: logoSize === 'small',
      };
    },
  },
  methods: {
    logoClick() {
      const { $router } = this;
      const { currentRoute } = $router;
      const { home } = namedRoutes;
      const isHome = currentRoute.value.name === home.name;
      if (!isHome) {
        $router.push(home.path);
      }
    },
  },
};
</script>

<template>
  <header :class="headerClasses">
    <div :class="$style.wrapper">
      <div :class="$style.logoWrap">
        <div :class="logoClasses" @click="logoClick">
          <inline-svg
            :src="logoSrc"
            alt="Kohlmark Flach logo"
            aria-label="Kohlmark Flach logo"
            height="239"
            width="179"
          />
        </div>
      </div>
      <app-menu />
    </div>
  </header>
</template>

<style module>
.absolute,
.fixed {
  background-color: transparent;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-index-fixed);
}
.fixed {
  position: fixed;
}
.absolute {
  position: absolute;
}
.white {
  background-color: var(--white);
}
.wrapper {
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  padding: 0 3.75% 0 5.8333%;
}
.logoWrap {
  position: relative;
  width: 9.8vw;
  height: 9.1666vw;
  max-width: 189px;
  max-height: 176px;
  min-width: 100px;
  min-height: 77px;
}
.logo {
  align-items: center;
  background: var(--white);
  cursor: pointer;
  display: flex;
  justify-content: center;
  overflow: hidden;
  padding: 5px 0;
  position: relative;
  margin-top: 35%;
  width: 100%;
  max-width: 189px;
  max-height: 249px;
  z-index: var(--z-index-fixed);
}
.logo svg {
  width: 95%;
  height: 96%;
}
.logo.logoSmall {
  height: 7.185vw;
  align-items: flex-start;
  padding-top: 0px;
  min-height: 70px;
}
.logo.logoSmall svg {
  height: auto;
  width: auto;
  padding: 5px;
}
@media screen and (min-width: 984px) {
  .logo {
    margin-top: 56%;
  }
}
@media screen and (min-width: 1920px) {
  .logo.logoSmall {
    height: 138px;
  }
}
</style>
