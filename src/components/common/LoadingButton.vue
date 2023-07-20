<script setup lang="ts">
interface Props {
  isLoading: boolean;
}

defineProps<Props>();
</script>

<template>
  <button class="w-full" :disabled="isLoading">
    <span v-show="isLoading" class="animate-spin inline-block mr-3">↺</span>
    <slot></slot>
  </button>
</template>
