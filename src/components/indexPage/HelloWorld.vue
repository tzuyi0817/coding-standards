<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { storeToRefs } from 'pinia';
import { useConfigStore, useUserStore } from '@/stores';
import { logoutUser } from '@/apis/user';

defineProps<{ msg: string }>();

const { locale } = useI18n();
const { version } = useConfigStore();
const count = ref(0);
const isShowLoginPop = ref(false);
const isLoading = ref(false);
const { isLogin } = storeToRefs(useUserStore());
const LoginPopup = defineAsyncComponent(() => import('@/components/common/LoginPopup.vue'));

function changeLocale() {
  locale.value = locale.value === 'en-US' ? 'zh-TW' : 'en-US';
}

function toggleLoginPopup() {
  isShowLoginPop.value = !isShowLoginPop.value;
}

async function logout() {
  isLoading.value = true;
  try {
    await logoutUser();
    const { setUser } = useUserStore();

    setUser({});
    localStorage.removeItem('coding_standards_token');
  } finally {
    isLoading.value = false;
  }
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="p-8">
    <button
      type="button"
      @click="count++"
    >
      count is {{ count }}
    </button>
  </div>

  <p>
    Check out
    <a
      href="https://vuejs.org/guide/quick-start.html#local"
      target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a
      href="https://github.com/vuejs/language-tools"
      target="_blank"
      >Volar</a
    >
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  <p class="read-the-docs">{{ version }}</p>
  <button @click="changeLocale">{{ $t('language') }}</button>
  <button v-if="isLogin" @click="logout">{{ $t('logout') }}</button>
  <button v-else @click="toggleLoginPopup">{{ $t('login') }}</button>
  <login-popup
    v-if="isShowLoginPop"
    v-model:isShowLoginPop="isShowLoginPop"
  />
</template>

<style lang="postcss" scoped>
.read-the-docs {
  @apply text-[#888];
}
</style>
