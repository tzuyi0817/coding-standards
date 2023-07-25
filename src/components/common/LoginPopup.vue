<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '@/stores';

const emit = defineEmits(['update:isShowLoginPop']);
const localAccount = localStorage.getItem('coding_standards_account');
const account = ref(localAccount ?? '');
const password = ref('');
const isLoading = ref(false);

async function login() {
  const user = {
    account: account.value,
    password: password.value,
  };

  isLoading.value = true;

  try {
    await useUserStore().login(user);
    closePopup();
  } catch {
    cleanForm();
  } finally {
    isLoading.value = false;
  }
}

function cleanForm() {
  account.value = password.value = '';
}

function closePopup() {
  emit('update:isShowLoginPop', false);
}
</script>

<template>
  <div class="login_popup popup" @click.self="closePopup">
    <div class="popup_header">
      <h2>Login!</h2>
      <span class="cursor-pointer" @click="closePopup">✗</span>
    </div>

    <div class="popup_content">
      <div class="login_popup_content">
        <form @submit.prevent="login">
          <label class="label">
            <p>Account</p>
            <input v-model.trim="account" type="text" class="input" required />
          </label>

          <label class="label">
            <p>Password</p>
            <input v-model.trim="password" type="password" class="input" required />
          </label>

          <loading-button class="mt-6" :is-loading="isLoading">Login</loading-button>
        </form>
      </div>
    </div>
  </div>
</template>
