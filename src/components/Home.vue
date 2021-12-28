<template>
    <div>
        <div
            class="relative w-full h-16 bg-primary text-black font-bold flex justify-center items-center"
        >Home</div>
    </div>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import { computed } from 'vue'
const store = useStore()

const name = computed(() => {
    return store.state.user.name
})
export default {
    name: 'Home',
    component: {},
    data() {
        return {
        }
    }
};

</script>