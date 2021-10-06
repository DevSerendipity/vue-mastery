<template>
    <div class="w-full h-16 bg-primary text-black font-bold flex justify-center items-center">NOTE
        <p class="absolute w-full h-16 flex justify-end items-end ">
            <router-link v-if="$route.path != '/'"        class="" to="/">Go to Home</router-link>
            <router-link v-if="$route.path != '/note'"    class=""      to="/note">Go to Note</router-link>
            <router-link v-if="$route.path != '/profile'" class="mx-16" to="/profile">Go to Profile</router-link>
        </p>
    </div>
    
    <div class="w-full h-full flex flex-col">
        <div class="w-full h-full flex">
            <div class="flex w-screen m-8 p-2 h-40 bg-primary rounded-t-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque animi doloribus similique optio nihil? Ea exercitationem modi dignissimos voluptatem rem necessitatibus corporis sint dolores suscipit laborum in, facilis explicabo sed reiciendis deserunt dolorem? Consectetur non excepturi aut suscipit officiis fugiat impedit porro unde asperiores ducimus sunt earum magnam repudiandae, neque minima deleniti voluptatem eius saepe cumque illo! Optio dolor eaque facere? Accusamus.</div>
        </div>
        <div class="flex flex-col items-center">
            <div class="w-4/5 h-20 bg-primary m-4 p-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit praesentium, quasi amet recusandae laboriosam voluptas accusamus enim sequi et. </div>
            <div class="w-4/5 h-20 bg-primary m-4 p-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit praesentium, quasi amet recusandae laboriosam voluptas accusamus enim sequi et. </div>
            <div class="w-4/5 h-20 bg-primary m-4 p-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit praesentium, quasi amet recusandae laboriosam voluptas accusamus enim sequi et. </div>
            <div class="w-4/5 h-20 bg-primary m-4 p-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit praesentium, quasi amet recusandae laboriosam voluptas accusamus enim sequi et. </div>
            <div class="w-4/5 h-20 bg-primary m-4 p-2 rounded-b-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit praesentium, quasi amet recusandae laboriosam voluptas accusamus enim sequi et.</div>
        </div>
    </div>
</template>