/*
 * @Author: DM
 * @Date: 2022-01-14 13:28:25
 * @LastEditors: DM
 * @LastEditTime: 2022-01-14 13:40:57
 * @Descriptions:
 * @FilePath: /components/test/add.test.ts
 */
import { shallowMount } from '@vue/test-utils';
import { expect, test } from 'vitest';
import App from '../src/App';
test('tsx-vue mounted', () => {
  const wrapper = shallowMount(App, {});
  expect(wrapper.html()).toContain('<h1>Hello World</h1>');
});
