<template>
  <button
    ref="childRef"
    @click="$emit('event', childRef)"
    class="w-32 hover:scale-110 transition-all ease-in-out text-slate-100 h-10 rounded-md bg-gradient-to-r from-[#7fb6ff] to-[#568cff]"
    :type="type"
    :id="id"
  >
    {{ text }}
  </button>
</template>

<script setup>
import { ref } from 'vue';
const childRef = ref(null)

defineProps({
  text: String,
  type: String,
  id: String,
})
</script>
