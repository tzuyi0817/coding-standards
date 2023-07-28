import type { Component } from 'vue';
import { render } from '@testing-library/vue';
import { setActivePinia, createPinia } from 'pinia';
import i18n from '@/plugins/i18n';

interface RenderComponentOptions {
  props?: Record<string, any>;
  provide?: Record<any, any>;
}

const pinia = createPinia();

setActivePinia(pinia);

export function renderComponent(testComponent: Component, options?: RenderComponentOptions) {
  const componentOptions = options ?? {};

  return render(testComponent, {
    ...componentOptions,
    global: {
      plugins: [pinia, i18n],
    },
  });
}
