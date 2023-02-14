// Card.stories.js

import Card from './Card.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Card',
  component: Card,
};

export const Primary = () => ({
  components: { Card },
  template: '<Card primary label="Button" />',
});