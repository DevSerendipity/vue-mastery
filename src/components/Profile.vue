<template>
    <div
        class="w-full h-16 bg-primary text-black font-bold flex justify-center items-center"
    >USER PROFILE
    <p class="absolute w-full h-16 flex justify-end items-end ">
            <router-link v-if="$route.path != '/'"                      to="/">Go to Home</router-link>
            <router-link v-if="$route.path != '/note'"    class="mx-16" to="/note">Go to Note</router-link>
            <router-link v-if="$route.path != '/profile'" class=""      to="/profile">Go to Profile</router-link>
        </p>
    </div>
    <div class="w-full h-full flex justify-center items-center mt-10 sm:mt-5 md:mt-8 lg:mt-10 xl:mt-16 2xl:mt-20">
        <img
            class="w-max h-20 sm:h-24 md:h-28 lg:h-36 xl:h-44 2xl:h-72 mb-5"
            src="src/assets/UserProfileImage.jpg"
            alt="Profile Image"
        />
    </div>

    <div class="flex flex-row w-full h-full">
        <div class="w-full h-full flex flex-col justify-center items-center 2xl:mx-20">
            <div class="w-4/6 h-10 bg-primary m-4 rounded flex justify-center items-center my-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div class="w-4/6 h-10 bg-primary m-4 rounded flex justify-center items-center my-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div class="w-4/6 h-10 bg-primary m-4 rounded flex justify-center items-center my-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
        </div>
        <div class="w-full h-full flex flex-col justify-center items-center 2xl:mx-20">
            <div class="w-4/6 h-10 bg-primary m-4 rounded flex justify-center items-center my-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div class="w-4/6 h-10 bg-primary m-4 rounded flex justify-center items-center my-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div class="w-4/6 h-10 bg-primary m-4 rounded flex justify-center items-center my-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
        </div>
    </div>
    <div class="w-full h-max flex justify-around my-10 mb-20 ">
        <div
            class="w-full mx-11 sm:mx-14 md:mx-16 lg:mx-20 xl:mx-28 2xl:mx-48 h-10 bg-primary rounded flex justify-center items-center"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nobis labore fuga maiores molestias aut natus velit odit omnis? Dolores molestias impedit quae illum fuga sed enim est, dolor eveniet!</div>
    </div>
</template>