<template>
  <textarea
    v-model="model"
    class="outline-none w-8/12 resize-none focus:scale-110 transition-all border border-x-transparent border-t-transparent border-b-black"
    :rows="rows"
    :id="id"
    :placeholder="placeholder"
    wrap="off"
  ></textarea>
</template>

<script setup>
defineProps({
  id: String,
  placeholder: String,
  rows: Number
})

const model = defineModel()
</script>
