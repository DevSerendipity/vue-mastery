<template>
    <div class="w-full h-16 bg-primary text-black font-bold flex justify-center items-center">
        NOTE
    </div>
</template>

<script lang="ts">
 import { ref } from 'vue'

const tog = ref(false);

export default {
    name: 'Note',
    component: {},
    data() {
        return {
            hideTextInput: false,
            comments: [
                {
                    id: Math.random(),
                    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit praesentium, quasi amet recusandae laboriosam voluptas accusamus enim sequi et.',
                },
                {
                    id: Math.random(),
                    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit praesentium, quasi amet recusandae laboriosam voluptas accusamus enim sequi et.',
                },
                {
                    id: Math.random(),
                    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit praesentium, quasi amet recusandae laboriosam voluptas accusamus enim sequi et.',
                },
                {
                    id: Math.random(),
                    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit praesentium, quasi amet recusandae laboriosam voluptas accusamus enim sequi et.',
                },
            ],
            value: 'Hello World',
        }
    }
};

</script>