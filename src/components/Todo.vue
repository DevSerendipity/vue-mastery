<template>
	<div class="w-full h-max">
		<div class="w-full h-full">
			<form
				class="w-full h-full flex flex-col sm:flex-row sm:text-5xl sm:mx-auto sm:w-9/12 sm:justify-between sm:mt-20 lg:mt-24 2xl:mt-36 2xl:my-8"
				v-on:submit.prevent="addNewTodo"
			>
				<input
					class="w-auto h-full font-extralight outline-none break-all mb-6 sm:text-small sm:mb-0 sm:mx-12 sm:mr-4 sm:w-7/12 lg:w-full"
					v-model="newTodoText"
					placeholder="Add a todo"
				/>
				<button
					class="w-auto h-full text-5xl sm:mx-4 sm: md:w-auto md:h-auto hover:text-sky-400 2xl:w-1/12 2xl:mx-0 2xl:flex 2xl:justify-center 2xl:items-center "
				>+</button>
			</form>
			<br />
			<div class="mx-5 sm:mx-auto sm:w-4/12 md:w-1/2 py-2">
				<div
					class="flex w-full justify-between font-thin p-1 border-4 border-solid hover:border-blue-400 my-8 md:my-16 break-all md:text-2xl md:text-3xl 2xl:my-20"
					v-for="(todo, index) in todos"
					v-on:click="todo.isTodoFinished = !todo.isTodoFinished"
					v-bind:key="todo.id"
					:class="{ 'bg-sky-300': todo.isTodoFinished }"
					v-bind:title="todo.title"
					v-on:remove="todos.splice(index, 1)"
				>
					{{ todo.title }}
					<div class="font-thin w-max ml-auto">
						<fa icon="check" v-if="todo.isTodoFinished" />
						<fa icon="minus" v-if="!todo.isTodoFinished" v-on:click="deleteFromList(index)" />
					</div>
				</div>
			</div>
		</div>
	</div>
	<p class="font-medium w-full flex justify-center">TODOS</p>
	<div class="flex flex-col items-center">
		<p>every day inspiration quotes or the user can enter a list of quotes that he wants but that could be premium</p>
		<p>Have a side bar where it shows tasks from yesterday , today and tomorrow that could be planned</p>
		<p>Bounce animation to check when a task is completed</p>
		<p>State saving / retrieval of todos and quotes</p>
		<p>Arrow effect on larger routes with lots of content</p>
		<p>What about having todos in full screen, where in one screen there can be a of todos and each todo has inner todos and percentage of that one large taks completed with lots of inner tasks</p>
		<p>adding like check mark on check list when all inner tasks are completed, need to have atleast once</p>
		<p>layout 2 sve se ko puni, i kad se napuni , efekat od dole prema gore se puni i onda to se sve prekri i pretvori ko akvarium i imaju male ribice u tom ko akvarijumu, a kada 2 jedan pored drugog completaju spoje se u jedan itd</p>
		<p> sve se ko puni u layout 1 preko cijele kartice samo ne preko slova </p>
		<p>find some other font this kidna sucks</p>
		<p>fix the title , it should be input there and not some random title</p>
		<p>il need to do the router thingy with the ids so that i can click any card and gegt to that id</p>
		<p>okay so i guess it can't exactly be on the card, if the user clicks the card and completes one so it won't see it, maybe we can make a sidebar within the card which would track the progress and fill the card accordingly with little bit of wiggle</p>

</div>
	<div class="flex flex-wrap">
		<div class="border-4 border-sky-300 w-80 h-36 rounded-lg m-10 ml-auto mr-auto divide-y-2">
			<div class="h-full w-full flex flex-col items-center justify-center ">
				 <input class="w-11/12 h-max outline-none bg-sky-100 text-center truncate">
				<p class="absolute mt-28 ml-[17rem] opacity-40 h-min w-auto ">% {{ todos.length }}</p>
			</div>
		</div>
		<div class="border-4 border-sky-300 w-80 h-36 rounded-lg m-10 ml-auto mr-auto divide-y-2">
			<div class="h-full w-full flex justify-center items-center">
				 <input class="absolutew-11/12 h-max outline-none bg-sky-100 text-center truncate">
			</div>
		</div>
		<div class="border-4 border-sky-300 w-80 h-36 rounded-lg m-10 ml-auto mr-auto divide-y-2">
			<p class="mt-2 mb-1 w-full flex justify-center h-max">LAYOUT 1</p>
			<div class="h-[6.2rem] w-full flex justify-center items-center">
				 <input class="w-11/12 h-max outline-none bg-sky-100 ">
				 <input type="checkbox" class="accent-pink-500 size-8" checked>
			</div>
		</div>
		<div class="bg-sky-300 w-80 h-36 rounded-lg m-10 ml-auto mr-auto divide-y-2">
			<p class="mt-2 mb-1 w-full flex justify-center h-max">LAYOUT 2</p>
			<div class="h-16 flex justify-center items-center w-full">
				 <input class="w-11/12 text-sky-500">
			</div>
			<div class="h-max flex justify-center items-center">
				<div class="rounded-b-lg border-4 bg-white border-solid border-sky-400 w-full h-[2.8rem] -mt-1 ml-auto"></div>
			</div>
		</div>
		<div class="hover:animate-pulse bg-sky-300 w-80 h-36 rounded-lg m-10 ml-auto mr-auto divide-y-2">
			<p class="mt-2 mb-1 w-full flex justify-center h-max">LAYOUT 3</p>
			<div class="h-16 flex justify-center items-center w-full">
				 <input class="w-11/12">
			</div>
			<div class="h-max flex justify-center items-center">
				<div class="h-max w-full ">
					<div class="w-full h-min flex justify-evenly ">
						<fa icon="check" class="text-sky-500" />
						<fa icon="minus" />
					</div>
					<div class="w-full h-max flex justify-evenly ">
						<p>{{ nextTodoId}}</p>
						<p>{{ nextTodoId}}</p>
					</div>
				</div>
				<div class="rounded-lg bg-red-300 w-8 h-8 ml-auto mt-1 mr-1 "></div>
			</div>
		</div>
		<div class="hover:animate-bounce  bg-sky-300 w-80 h-36 rounded-lg m-10 ml-auto mr-auto divide-y-2">
			<p class="mt-2 mb-1 w-full flex justify-center h-max">LAYOUT 4</p>
			<div class="h-16 flex justify-center items-center w-full">
				 <input class="w-11/12">
			</div>
			<div class="h-max flex justify-center items-center">
				<div class="rounded-b-lg bg-red-300  w-full h-[2.8rem] -mt-1 ml-auto"></div>
			</div>
		</div>

		<div class="bg-sky-300 w-80 h-36 rounded-lg m-10 ml-auto mr-auto"></div>
		<div class="bg-sky-300 w-80 h-36 rounded-lg m-10 ml-auto mr-auto"></div>
		<div class="bg-sky-300 w-80 h-36 rounded-lg m-10 ml-auto mr-auto"></div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Todo from '../components/Todo.vue'
export default defineComponent({
	name: 'Todo',
	component: {},
	props: {
		title: String,
		index: Number
	},
	data() {
		return {
			newTodoText: '',
			todos: [
				{
					id: 1,
					title: 'Do the dishes',
					isTodoFinished: false
				},
				{
					id: 2,
					title: 'Take out the trash',
					isTodoFinished: false
				},
				{
					id: 3,
					title: 'Mow the lawn',
					isTodoFinished: false
				}
			],
			nextTodoId: 4
		}
	},
	methods: {
		addNewTodo() {
			this.todos.push({
				id: this.nextTodoId++,
				title: this.newTodoText,
				isTodoFinished: false
			})
			this.newTodoText = ''
		},
		deleteFromList(index: any) {
			this.todos.splice(index, 1);
		},
	},

});


</script>