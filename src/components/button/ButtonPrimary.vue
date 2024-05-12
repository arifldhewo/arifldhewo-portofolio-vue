<template>
  <button
    @click="$emit('event')"
    class="w-32 hover:scale-110 transition-all ease-in-out text-slate-100 h-10 rounded-md bg-gradient-to-r from-[#7fb6ff] to-[#568cff]"
    :type="type"
  >
    {{ text }}
  </button>
</template>

<script setup>
defineProps({
  text: String,
  type: String
})
</script>
