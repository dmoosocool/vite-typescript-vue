import { shallowMount } from '@vue/test-utils';
import { expect, test } from 'vitest';
import App from '../src/App';
test('tsx-vue mounted', () => {
  const wrapper = shallowMount(App, {});
  expect(wrapper.html()).toContain('<h1>Hello World</h1>');
});
