<script setup>
    defineProps({
        type: String
    })
</script>

<template>
    <button :type="type" class="w-10 h-10 font-bold text-center text-3xl">
        +
    </button>
</template>