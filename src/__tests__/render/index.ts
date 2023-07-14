import type { Component } from 'vue';
import { render } from '@testing-library/vue';
import { setActivePinia, createPinia, type Pinia } from 'pinia';

interface RenderComponentOptions {
  props?: Record<string, any>;
  pinia?: Pinia;
}

export function setPinia() {
  const pinia = createPinia();

  setActivePinia(pinia);
  return pinia;
}

export function renderComponent(TestComponent: Component, options?: RenderComponentOptions) {
  const { props, pinia } = options ?? {};

  return render(TestComponent, {
    props,
    global: {
      plugins: pinia ? [pinia] : undefined,
    },
  });
}
