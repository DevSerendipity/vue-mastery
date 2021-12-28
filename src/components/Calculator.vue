<template>
    <div class="bg-[#42b883]">
        <div class="h-[100vh]">
            <div class="h-full w-full flex justify-center items-center">
                <div class="w-56 h-max border-4 border-black">
                    <div class="bg-sky-100 w-full h-12 justify-end">
                        <div
                            v-if="firstNumber != '' || secondNumber != ''"
                            class="text-sm text-black h-max w-full flex justify-end pr-2"
                        >{{ firstNumber }} {{ outputSign }}{{ secondNumber }}</div>
                        <div
                            v-if="willReverse"
                            class="bg-green-100 w-full flex justify-end pr-2"
                        >-{{ sampleNumberOutput }}</div>
                        <div
                            v-else
                            
                            class="bg-green-100 w-full flex justify-end pr-2"
                        >{{ sampleNumberOutput }}</div>
                    </div>
                    <div class="flex border-t-2 border-black">
                        <button
                            @click="clearAll()"
                            class="bg-gray-500 w-1/4 h-14 flex justify-center items-center"
                        >{{ 'C' }}</button>
                        <button
                            v-on:click="willReverse = !willReverse"
                            class="bg-gray-500 w-1/4 h-14 border-l-2 border-black flex justify-center items-center"
                        >{{ '+/-' }}</button>
                        <button
                            @click="addValues(' % ')"
                            class="bg-gray-500 w-1/4 h-14 border-l-2 border-black flex justify-center items-center"
                        >{{ ' % ' }}</button>
                        <button
                            @click="addValues(' / ')"
                            class="bg-green-500 w-1/4 h-14 border-l-2 border-black flex justify-center items-center"
                        >{{ ' / ' }}</button>
                    </div>
                    <div class="flex border-t-2 border-black">
                        <button
                            @click="addValues('7')"
                            class="bg-gray-100 w-1/4 h-14 border-black flex justify-center items-center"
                        >{{ 7 }}</button>
                        <button
                            @click="addValues('8')"
                            class="bg-gray-100 w-1/4 h-14 border-l-2 border-black flex justify-center items-center"
                        >{{ 8 }}</button>
                        <button
                            @click="addValues('9')"
                            class="bg-gray-100 w-1/4 h-14 border-l-2 border-black flex justify-center items-center"
                        >{{ 9 }}</button>
                        <button
                            @click="addValues(' * ')"
                            class="bg-green-500 w-1/4 h-14 border-l-2 border-black flex justify-center items-center text-2xl"
                        >{{ ' * ' }}</button>
                    </div>
                    <div class="flex border-t-2 border-black">
                        <button
                            @click="addValues('4')"
                            class="bg-gray-100 w-1/4 h-14 border-black flex justify-center items-center"
                        >{{ 4 }}</button>
                        <button
                            @click="addValues('5')"
                            class="bg-gray-100 w-1/4 h-14 border-l-2 border-black flex justify-center items-center"
                        >{{ 5 }}</button>
                        <button
                            @click="addValues('6')"
                            class="bg-gray-100 w-1/4 h-14 border-l-2 border-black flex justify-center items-center"
                        >{{ 6 }}</button>
                        <button
                            @click="addValues(' - ')"
                            class="bg-green-500 w-1/4 h-14 border-l-2 border-black flex justify-center items-center text-2xl"
                        >{{ ' - ' }}</button>
                    </div>
                    <div class="flex border-t-2 border-black">
                        <button
                            @click="addValues('1')"
                            class="bg-gray-100 w-1/4 h-14 border-black flex justify-center items-center"
                        >{{ 1 }}</button>
                        <button
                            @click="addValues('2')"
                            class="bg-gray-100 w-1/4 h-14 border-l-2 border-black flex justify-center items-center"
                        >{{ 2 }}</button>
                        <button
                            @click="addValues('3')"
                            class="bg-gray-100 w-1/4 h-14 border-l-2 border-black flex justify-center items-center"
                        >{{ 3 }}</button>
                        <button
                            @click="addValues(' + ')"
                            class="bg-green-500 w-1/4 h-14 border-l-2 border-black flex justify-center items-center text-2xl"
                        >{{ ' + ' }}</button>
                    </div>
                    <div class="flex border-t-2 border-black">
                        <button
                            @click="addValues('0')"
                            class="bg-gray-100 w-1/2 h-14 border-black flex justify-center items-center"
                        >{{ 0 }}</button>
                        <button
                            @click="addValues('.')"
                            class="bg-gray-500 w-1/4 h-14 border-l-2 border-black flex justify-center items-center text-2xl"
                        >{{ '.' }}</button>
                        <button
                            @click="addValues('=')"
                            class="bg-green-500 w-1/4 h-14 border-l-2 border-black flex justify-center items-center text-xl"
                        >{{ '=' }}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
    name: 'Todo',
    component: {},

    mounted(){
        this
    },
    data() {
        return {
            sampleNumberOutput: 0,
            firstNumber: '',
            secondNumber: '',
            outputSign: '',
            willReverse: false,
            items: [] as string[]
        }
    },
    methods: {
        clearAll() {
            this.sampleNumberOutput = 0;
            this.firstNumber = '';
            this.secondNumber = '';
    
        },
        handleSigns(str: string, sign: string) {
                this.outputSign = sign;
                console.log('Just a string ' + str);
                str = str.replaceAll('=', '');
                this.firstNumber = str.split(sign)[0];
                console.log("First number " + this.firstNumber);

                this.secondNumber = str.split(sign)[1];
                this.items.splice(0, this.items.length - 1);
                console.log('second number ' + this.secondNumber);
        },
        addValues(value: string) {
            this.items.push(value);
            let str = '';
            for (let element of this.items) {
                str += element
            }
            if (value === '=') {
                if (str.includes(' + ')) {
                    this.handleSigns(str,' + ');
                    return this.sampleNumberOutput = parseInt(this.firstNumber)  + parseInt(this.secondNumber);
                } else if (str.includes(' - ')) {
                    this.handleSigns(str,' - ');
                    return this.sampleNumberOutput = parseInt(this.firstNumber) - parseInt(this.secondNumber);
                } else if (str.includes(' / ')) {
                    this.handleSigns(str,' / ');
                    return this.sampleNumberOutput = parseInt(this.firstNumber) / parseInt(this.secondNumber);
                } else if (str.includes(' % ')) {
                    this.handleSigns(str,' % ');
                    return this.sampleNumberOutput = parseInt(this.firstNumber) % parseInt(this.secondNumber);
                } else if (str.includes(' * ')) {
                    this.handleSigns(str,' * ');
                    return this.sampleNumberOutput = parseInt(this.firstNumber) * parseInt(this.secondNumber);
                }
            }
        }
    },
});

</script>