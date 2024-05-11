<template>
  <div class="flex justify-center items-center h-screen">
    <div>
      <InputText id="title" type="text" placeholder="Project Title" />
      <InputText id="description" type="text" placeholder="Project Description" />
      <InputFile id="img_url" />
    </div>
  </div>
</template>

<script setup>
import InputText from '@/components/input/InputTextComponent.vue'
import InputFile from '@/components/input/InputFileComponent.vue'
</script>
