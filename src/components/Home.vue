<template>
    <div class=" relative w-full h-16 bg-primary text-black font-bold flex justify-center items-center">
        Home
        <p class="absolute w-full h-16 flex justify-end items-end ">
            <router-link class="mx-10" to="/">Go to Home</router-link>
            <router-link class="mx-10" to="/note">Go to Note</router-link>
            <router-link class="mx-10" to="/profile">Go to Profile</router-link>
        </p>
    </div>

    <div class="w-full flex md:justify-end">
        <input
            class="w-screen h-10 m-4 border-8 border-primary hover:underline md:w-3/12 md:border-white"
            type="text"
            placeholder="Topics.."
        />
    </div>
    <div class="w-full h-full md:flex md:flex-row md:px-5 md:mt-12 lg:px-10">
        <div
            class="w-full h-full items-center justify-center flex-col md:w-11/12 md:justify-center md:items-center md:flex-col 2xl:w-9/12 2xl:mx-10"
        >
            <div
                class="m-4 p-2 bg-primary rounded-lg md:w-10/12 md:mb-10 h-36 lg:mb-14 lg:h-40 xl:h-44 2xl:mb-20"
            >okay</div>
            <div
                class="m-4 p-2 bg-primary rounded-lg md:w-10/12 md:mb-10 h-36 lg:mb-14 lg:h-40 xl:h-44 2xl:mb-20"
            >okay</div>
            <div
                class="m-4 p-2 bg-primary rounded-lg md:w-10/12 md:mb-10 h-36 lg:mb-14 lg:h-40 xl:h-44 2xl:mb-20"
            >okay</div>
            <div
                class="m-4 p-2 bg-primary rounded-lg md:w-10/12 md:mb-10 h-36 lg:mb-14 lg:h-40 xl:h-44 2xl:mb-20"
            >okay</div>
            <div
                class="m-4 p-2 bg-primary rounded-lg md:w-10/12 md:mb-10 h-36 lg:mb-14 lg:h-40 xl:h-44 2xl:mb-20"
            >okay</div>
        </div>
        <div
            class="h-36 m-4 p-2 bg-primary rounded-lg divide-y-2 divide-white-500 md:w-3/12 md:h-36 lg:h-40 xl:h-44 2xl:w-1/5 2xl:mx-10"
        >
            <p class="flex justify-center mb-2">USER PROFILE</p>
            <div class="flex justify-start items-center h-11 w-full lg:h-12 2xl:h-14">POSTS MADE:</div>
            <div class="flex justify-start items-center h-11 w-full lg:h-12 2xl:h-14">TOTAL LIKES:</div>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>