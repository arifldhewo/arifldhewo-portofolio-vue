<script setup>
import { ref } from 'vue'
const emit = defineEmits(['passing-file'])

defineProps({
  id: String
})

const isUploaded = ref(false)
const fileString = ref(null)
const filePreview = ref(null)

function fileChange(event) {
  if (event.target.value != '') {
    fileString.value = event.target.value.split('\\')[2]

    filePreview.value = URL.createObjectURL(event.target.files[0])

    isUploaded.value = true

    emit('passing-file', event.target.files)
  }
}
</script>

<template>
  <div class="hover:scale-110 w-fit transition-all ease-in-out">
    <label :for="id">
      <div class="w-fit">
        <img v-if="!isUploaded" class="w-40" src="@/assets/imgs/upload.png" alt="upload_image" />
        <p v-if="!isUploaded" class="text-center">Upload Your Image</p>
      </div>

      <div class="w-fit">
        <img class="w-96" v-show="isUploaded" :src="filePreview" alt="your_image" />
        <p class="text-center" v-show="isUploaded">{{ fileString }}</p>
      </div>
      <input :id="id" type="file" class="hidden" @change="fileChange" multiple />
    </label>
  </div>
</template>
