<script setup>
defineProps({
  id: String,
  placeholder: String,
  type: String
})

const model = defineModel()
</script>

<template>
  <input
    v-model="model"
    class="block w-8/12 focus:scale-110 transition-all outline-none border border-x-transparent border-t-transparent border-b-black"
    :type="type"
    :placeholder="placeholder"
    :id="id"
  />
</template>
