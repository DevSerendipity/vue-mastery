        <!----https://css-tricks.com/
        https://tailwindui.com/
        https://heropatterns.com/
        https://heroicons.com/
        https://headlessui.dev/
        https://tailwindui.com/
        https://www.refactoringui.com/-->
<template>
    <div class="lg:bg-sky-200 w-full h-screen">
        <div class="lg:flex lg:w-full lg:h-min lg:justify-evenly">
            <div class="lg:w-3/5 lg:h-min ml-16">
                <div
                    class="w-fit h-min text-xl ml-16 md:ml-[5.8rem] lg:ml-0 lg:mt-4 lg:mb-2 font-bold"
                >
                    <p>Payment information</p>
                </div>
                <div class="lg:h-min lg:w-full bg-white lg:rounded-lg">
                    <div class="flex justify-center h-44 w-full items-center">
                        <div
                            class="h-44 w-96 bg-blue-900 rounded-2xl shadow-xl drop-shadow-xl overflow-hidden mt-12"
                        >
                            <div class="absolute w-max h-44">
                                <div class="bg-card bg-cover h-44 w-96 mix-blend-overlay"></div>
                            </div>
                            <div class="absolute w-max h-12">
                                <div
                                    class="relative bg-chip bg-cover h-10 w-12 rounded-sm ml-4 mt-4"
                                ></div>
                            </div>
                            <div class="w-96 h-min flex mt-16 pl-4 pr-10">
                                <div class="flex justify-between w-full h-full text-white">
                                    <div>{{ numberSplit(0) }}</div>
                                    <div>{{ numberSplit(1) }}</div>
                                    <div>{{ numberSplit(2) }}</div>
                                    <div>{{ numberSplit(3) }}</div>
                                </div>
                            </div>
                            <div class="h-20 w-full flex items-end text-white">
                                <div class="w-full h-min pl-4">
                                    <div>
                                        <div>Card Holder</div>
                                        <div v-if="cardHolderName === ''">FULL NAME</div>
                                        <div v-else="nameAuth === true">{{ cardHolderAuth }}</div>
                                    </div>
                                </div>
                                <div class="w-max h-min pr-4">
                                    <div>
                                        <div>Expires</div>
                                        <div>  {{month}}/{{year}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form
                        class="w-full h-min flex justify-center mt-16 lg:h-min lg:w-full lg:flex lg:flex-col lg:justify-center lg:items-center lg:mt-10"
                    >
                        <div class="w-4/5 md:w-3/4 mt-10">
                            <p>Name on card</p>
                            <input
                                v-model.lazy="cardHolderName"
                                class="w-full h-min mt-2 p-1 outline-none border border-solid border-black rounded-md"
                            />
                            <fa
                                class="text-green-500"
                                v-if="cardHolderName !== ''"
                                icon="check-square"
                                placeholder="okay"
                            ></fa>
                            <p class="mt-2">Card number</p>
                            <input
                                v-model.lazy="cardNumber"
                                class="w-full h-min mt-2 p-1 outline-none border border-solid border-black rounded-md"
                            />
                            <div class="flex justify-between mt-2">
                                <p>Expiration Date</p>
                                <p class="pr-2 lg:pr-12">CVC/CVV</p>
                            </div>
                            <div class="flex w-full h-min">
                                <input
                                    v-model="month"
                                    class="h-8 w-20 mr-6 mt-2 pl-2 lg:w-20 lg:mr-6 outline-none border border-solid border-black rounded-md"
                                    type="number"
                                    min="1"
                                    max="12"
                                    placeholder="Month"
                                />
                                <div class="w-full h-min flex justify-between">
                                    <input
                                        v-model="year"
                                        class="h-8 w-20 mt-2 md:ml-2 lg:w-20 outline-no border border-solid border-black rounded-md pl-2"
                                        type="number"
                                        min="2000"
                                        max="2032"
                                        placeholder="Year"
                                    />
                                    <input
                                        class="h-8 w-20 mt-2 p-1 outline-none border border-solid border-black rounded-md"
                                    />
                                </div>
                            </div>
                            <div class>
                                <div class="flex justify-end">
                                    <p class="font-bold mt-4 mb-3 lg:mb-4 lg:mt-3">950US</p>
                                </div>
                                <div class>
                                    <button
                                        class="text-white font-bold bg-sky-500 w-full h-10 mb-10 lg:mb-6 rounded-lg"
                                    >CONFIRM PAYEMENT</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="w-full lg:w-2/5 h-min lg:flex lg:flex-col">
                <div
                    class="w-fit h-min text-xl ml-32 md:ml-[9.4rem] lg:ml-16 lg:mt-4 lg:mb-2 font-bold"
                >
                    <p class>Order Summary</p>
                </div>
                <div class="pl-24 pr-12 md:pr-16 md:pl-[7.3rem] lg:pl-16 lg:pr-20">
                    <div class="bg-white h-72 rounded-lg w-full">
                        <div v-if="test1" class="flex pl-8 pt-5">
                            <div class="w-24 h-16 bg-gray-500 rounded-md"></div>
                            <div class="h-16 w-24 pl-2 mt-0">
                                <p class="text-sm font-bold">Title 1</p>
                                <p class="text-xs">something</p>
                                <p class="text-sm">350 USD</p>
                            </div>
                            <fa
                                icon="times"
                                @click="test1 = !test1"
                                class="flex w-full text-gray-500 text-sm ml-auto mr-5"
                            />
                        </div>
                        <div v-if="test2" class="flex pl-8 pt-5">
                            <div class="w-24 h-16 bg-gray-500 rounded-md"></div>
                            <div class="h-16 w-24 pl-2 mt-0">
                                <p class="text-sm font-bold">Title 2</p>
                                <p class="text-xs">something</p>
                                <p class="text-sm">250 USD</p>
                            </div>
                            <fa
                                icon="times"
                                @click="test2 = !test2"
                                class="flex w-full text-gray-500 text-sm ml-auto mr-5"
                            />
                        </div>
                        <div v-if="test3" class="flex pl-8 pt-5">
                            <div class="w-24 h-16 bg-gray-500 rounded-md"></div>
                            <div class="h-16 w-24 pl-2 mt-0">
                                <p class="text-sm font-bold">Title 3</p>
                                <p class="text-xs">something</p>
                                <p class="text-sm">150 USD</p>
                            </div>
                            <fa
                                icon="times"
                                @click="test3 = !test3"
                                class="flex text-gray-500 w-full text-sm ml-auto mr-5"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'CheckoutForm',
    data() {
        return {
            test1: true,
            test2: true,
            test3: true,
            cardHolderName: '',
            nameAuth: false,
            cardNumberAuth: false,
            cardNumber: '---',
            month: '',
            year: ''
        }
    },
    computed: {
        cardHolderAuth(): string {
            if (this.cardHolderName.match(/^[A-Za-z\s]*$/g)) {
                this.nameAuth = true;
                return this.cardHolderName;
            } else {
                this.nameAuth = false;
                return this.cardHolderName = '';
            }
        },
    },
    methods: {
        generate4RandomNumbers(): number {
            return Math.floor(1000 + Math.random() * 9000)
        },
        numberSplit(index: number) {
            let str = this.cardNumber.split('-');
            console.log( str[index].match(/^[A-Za-z\s]*$/g)?.some);
            console.log( str[index]);
            if (str[index].length > 4 || str[index].length < 4 || str[index].match(/\D+/gm)) {
                return "INVALID"
            }
            return str[index];
        }
    },

});
</script>