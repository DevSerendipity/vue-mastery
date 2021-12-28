<template>
    <div class="w-full h-full">
        <div class="text-6xl w-full h-full flex justify-center">VUEX</div>
        <div>
            For just displaying the value ( commented out )
            <!---{{ countPlusLocalState() }} -->
        </div>
        <div>
            For Incrementing Local storage (commented out)
           <!----- <button @click="incrementLocally()">+{{ localCount }}</button> --->
        </div>
        <div>
            For Incrementing by amount {{ }}
            <button @click="incrementBy()">+{{ count }}</button>
        </div>
            <button @click="toggleCount = !toggleCount">DISPALY COUNT</button>
            <div v-if=toggleCount> {{ returnSeshStorage() }}</div>
        <div>
            <button  class="bg-black text-white" @click="addCountToStorage()">Add Count To Storage </button>
        </div>
            <button  @click="removeCountFromStorage()">Remove Count from Storage </button>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import store from '../store/index';
import { mapState } from 'vuex';

export default defineComponent({
    name: 'VuexPractice',
    component: {},

    data() {
        return {
            toggleCount: false
        }
    },
    computed: mapState([
        'count',

    ]),
    methods: {
        /* countPlusLocalState() {
             // we made this 0 so it does not count anymore but to do it just change the value here
             // and there in the store if you want to count those 2 up
             return store.state.count + this.localCount
         },*/
        increment() {
            store.commit('increment');
        },
        incrementBy() {
            store.commit({
                type: 'incrementBy',
                amount: 40
            })
        },
        incrementLocally() {
           // this.localCount++
        },
        addCountToStorage(){
            sessionStorage.setItem('Storage', this.count);
        },
        returnSeshStorage(){
            console.log("Get " + sessionStorage.getItem('Storage'))
            return sessionStorage.getItem('Storage');
        },
        removeCountFromStorage(){
            sessionStorage.removeItem('Storage');
        }
    }
});

</script>