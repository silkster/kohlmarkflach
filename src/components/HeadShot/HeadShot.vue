<script>
import AppLogo from '@/assets/logo.png';

export default {
  name: 'head-shot',
  props: {
    photoSrc: {
      type: String,
      default: AppLogo,
    },
    fullName: {
      type: String,
      default: 'TBD',
    },
    title: {
      type: String,
      default: 'TBD',
    },
    isBio: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    containerClasses() {
      const { $style, isBio } = this;
      return {
        [$style.container]: true,
        [$style.isBio]: isBio,
      };
    },
  },
};
</script>

<template>
  <div :class="containerClasses">
    <div :class="$style.photo">
      <img :src="photoSrc" :alt="title" />
    </div>
    <div :class="$style.labels">
      <div :class="$style.fullName">{{ fullName }}</div>
      <div :class="$style.separator">|</div>
      <div :class="$style.title">{{ title }}</div>
    </div>
  </div>
</template>

<style module>
.container {
  position: relative;
  width: 80vw;
  height: 95vw;
  display: flex;
  flex-direction: column;
  margin: 12px auto 20px;
  max-width: 384px;
  max-height: 478px;
}
.isBio {
  height: auto;
}
.photo {
  position: relative;
  height: 80vw;
  width: 80vw;
  max-height: 384px;
  max-width: 384px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: var(--white);
  overflow: hidden;
}
.photo img {
  max-width: 100%;
}
.labels {
  position: relative;
  height: 40px;
  font-size: 16px;
  letter-spacing: 1px;
  margin-top: 6px;
}
.fullName,
.separator {
  position: relative;
  color: var(--black);
  font-weight: var(--font-weight-bold);
}
.separator {
  display: none;
}
.title {
  position: relative;
  font-weight: var(--font-weight-regular);
  color: var(--orange);
}
.labels,
.fullName,
.separator,
.title {
  line-height: 1.2;
}
@media screen and (min-width: 1025px) {
  .container {
    width: 430px;
    height: 485px;
    margin: 20px auto;
    max-width: unset;
    max-height: unset;
  }
  .container:nth-child(even) {
    margin-left: 60px;
  }
  .photo {
    height: 430px;
    width: 430px;
    max-width: unset;
    max-height: unset;
  }
  .separator {
    display: block;
    margin: 0 8px;
  }
  .labels {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 40px;
    font-size: 20px;
  }
}
</style>
