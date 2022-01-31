import HeadShot from './HeadShot.vue';

// More on default export: https://sthead-shot.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'HeadShot',
  component: HeadShot,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    fullName: 'John Do',
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { HeadShot },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<div style="position: relative; width: 100%;"><head-shot /></div>',
});

export const HeadShotStory = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
// Primary.args = {
//   label: 'Button',
// };
