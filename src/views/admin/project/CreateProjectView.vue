<template>
  <div class="flex justify-center items-center h-screen">
    <div class="w-10/12">
      <div class="flex">
        <InputText
          type="text"
          placeholder="Your Skills"
          @change="handleSkill"
          v-model="inputSkill"
        />
        <ButtonPrimary class="ml-16" type="button" text="Add" @event="handleSkill" />
      </div>
      <div class="flex flex-wrap w-10/12">
        <ButtonPrimary
          @event="deleteSkill"
          class="my-2 mx-1"
          v-for="(input, index) in inputSkills"
          :key="index.toString()"
          :id="index"
          :text="input"
        ></ButtonPrimary>
      </div>
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
      <ButtonPrimary
        :is-loading="isLoading"
        class="mt-5"
        @event="createProject"
        text="Submit"
        type="submit"
      />
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
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()

const inputSkills = ref([])

const inputSkill = ref('')
const inputTitle = ref('')
const inputDesc = ref('')
const inputSource = ref('')
const inputFile = ref(null)
let isLoading = ref(false)

const handleSkill = () => {
  if (inputSkill.value) {
    inputSkills.value.push(inputSkill.value)
    inputSkill.value = ''
  }
}

const handleFile = (value) => {
  inputFile.value = value
}

function deleteSkill(ref) {
  inputSkills.value.splice(ref.id, 1)
}

async function createProject() {
  isLoading.value = true
  const data = new FormData()
  data.append('skills', inputSkills.value)
  data.append('title', inputTitle.value)
  data.append('description', inputDesc.value)
  for (let i = 0; i < inputFile.value.length; i++) {
    data.append(`img_url[${i}]`, inputFile.value[i])
  }
  data.append('source', inputSource.value)

  await axios('/cms/project', {
    data: data,
    method: 'post',
    baseURL: import.meta.env.VITE_PROD_SERVER,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
    .then((res) => {
      inputTitle.value = ''
      inputDesc.value = ''
      inputSource.value = ''
      inputSkills.value = []
      console.log(res)
    })
    .catch((res) => {
      console.error(res)
    })
  isLoading.value = false
}
</script>
