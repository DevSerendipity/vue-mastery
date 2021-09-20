<template>
    <div>Home</div>
    <p>Name in the store is : {{ name }} </p>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore()

const name = computed(() => {
    return store.state.user.name
})
</script>