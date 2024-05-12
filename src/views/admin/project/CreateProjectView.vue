<template>
  <div class="flex justify-center items-center h-screen">
    <div class="w-10/12">
      <InputText
        class="mt-5"
        id="title"
        type="text"
        placeholder="Project Title"
        v-model="inputTitle"
      />
      <TextArea
        id="description"
        placeholder="Project Description"
        class="mt-5"
        v-model="inputDesc"
      ></TextArea>
      <InputText
        class="my-5"
        id="source"
        type="text"
        placeholder="Source e.g Github"
        v-model="inputSource"
      />
      <InputFile id="img_url" @passing-file="handleFile" />
      <ButtonPrimary class="mt-5" @event="createProject" text="Submit" type="submit" />
    </div>
  </div>
</template>

<script setup>
import InputText from '@/components/input/InputTextComponent.vue'
import InputFile from '@/components/input/InputFileComponent.vue'
import TextArea from '@/components/input/TextAreaComponent.vue'
import ButtonPrimary from '@/components/button/ButtonPrimary.vue'
import axios from 'axios'
import { ref } from 'vue'

const inputTitle = ref('')
const inputDesc = ref('')
const inputSource = ref('')
const inputFile = ref(null)

const handleFile = (value) => {
  inputFile.value = value
}

async function createProject() {
  const data = new FormData()
  data.append('skills', 'Ntar Yah, susah ini.')
  data.append('title', inputTitle.value)
  data.append('description', inputDesc.value)
  data.append('img_url', inputFile.value)
  data.append('source', inputSource.value)

  await axios('/cms/project', {
    data: data,
    method: 'post',
    baseURL: import.meta.env.VITE_LOCAL_SERVER,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
    .then((res) => {
      console.log(res)
    })
    .catch((res) => {
      console.error(res)
    })
}
</script>
