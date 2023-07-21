import type { Component } from 'vue';
import { render } from '@testing-library/vue';
import { setActivePinia, createPinia } from 'pinia';
import i18n from '@/plugins/i18n';

interface RenderComponentOptions {
  props?: Record<string, any>;
}

const pinia = createPinia();

setActivePinia(pinia);

export function renderComponent(TestComponent: Component, options?: RenderComponentOptions) {
  const { props } = options ?? {};

  return render(TestComponent, {
    props,
    global: {
      plugins: [pinia, i18n],
    },
  });
}
