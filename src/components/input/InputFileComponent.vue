<script setup>
import { ref } from 'vue'

defineProps({
  id: String
})

const isUploaded = ref(false)
const fileName = ref(null)
const fileString = ref(null)
const filePreview = ref(null)

function fileChange() {
  let temp = fileName.value.value.split('\\')

  fileString.value = temp[2]

  filePreview.value = URL.createObjectURL(fileName.value.files[0])

  isUploaded.value = true
}
</script>

<template>
  <label :for="id">
    <img class="w-96" v-show="isUploaded" :src="filePreview" alt="your_image" />
    <img v-if="!isUploaded" class="w-40" src="@/assets/imgs/upload.png" alt="upload_image" />
    <p v-show="isUploaded">{{ fileString }}</p>
    <input :id="id" ref="fileName" type="file" class="hidden" v-on:change="fileChange" />
  </label>
</template>
