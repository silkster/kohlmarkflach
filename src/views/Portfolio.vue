<script>
import { mapGetters, mapState } from 'vuex';
import AppGallery from '@/components/Gallery/Gallery.vue';

export default {
  name: 'Portfolio',
  components: {
    AppGallery,
  },
  props: {
    pagetype: {
      type: String,
    },
    id: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      // selectedProject: null,
      projects: null,
    };
  },
  computed: {
    ...mapGetters('portfolio', ['projectsDelivered', 'projectsInProgress']),
    ...mapState(['route', 'portfolio']),
    routeParams() {
      return this.route.params;
    },
    inProgress() {
      return this.pagetype === 'wip';
    },
  },
  watch: {
    pagetype: {
      immediate: true,
      handler() {
        this.updateContent();
      },
    },
    route: {
      immediate: true,
      handler(to) {
        const { params } = to;
        if (!(params && params.id)) {
          this.updateContent();
        }
      },
    },
  },
  methods: {
    ...mapGetters('portfolio', ['getProject']),
    updateContent() {
      this.selectedProject = null;
      this.projects = this.inProgress
        ? this.projectsInProgress
        : this.projectsDelivered;
    },
  },
};
</script>

<template>
  <div :class="$style.container">
    <app-gallery v-if="!id" :sets="projects" />

    <router-view />
  </div>
</template>

<style module>
.container {
  position: relative;
}
</style>
