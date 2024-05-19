<template>
  <button
    ref="childRef"
    @click="$emit('event', childRef)"
    :class="{ 'cursor-not-allowed': isLoading }"
    class="w-32 hover:scale-110 flex justify-evenly items-center transition-all ease-in-out text-slate-100 h-10 rounded-md bg-gradient-to-r from-[#7fb6ff] to-[#568cff]"
    :type="type"
    :disabled="isLoading"
  >
    <img v-if="isLoading" class="animate-spin w-9" src="@/assets/imgs/loading.png" alt="" />
    {{ text }}
  </button>
</template>

<script setup>
import { ref } from 'vue'
const childRef = ref(null)

defineProps({
  text: String,
  type: String,
  isLoading: Boolean
})
</script>
