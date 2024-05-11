<script setup>
defineProps({
  id: String,
  placeholder: String,
  type: String
})
</script>

<template>
  <input
    class="block w-40 outline-none border border-x-transparent border-t-transparent border-b-black"
    :type="type"
    :placeholder="placeholder"
    :id="id"
  />
</template>
