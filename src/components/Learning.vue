<template>
	<div class="my-2">
		<div class="-mt-2 flex items-center flex-col bg-blue-100">
			<div class="text-2xl">VUE MODEL EXERCISE</div>
			<p
				class="text-sm"
			>Vue v-model is a directive that provides two-way data binding between an input and form data or between two components</p>
		</div>
		<div class="ml-2">
			<div class="  text-xl">EXERCISES:</div>
			<input
					class="border-4 border-solid border-blue-400"
					v-model="newTodoText"
					placeholder="Add a todo"
				/>
				<div>{{ newTodoText }}</div>
		</div>
		
		<div class="flex items-center flex-col bg-blue-100">
			<div class="text-2xl">VUE BIND EXERCISE</div>
			<p
				class="text-sm"
			>The v-bind directive is a Vue. js directive used to bind one or more attributes, or a component prop to an element. If that attribute is bonded to our data defined in Vue instance then dynamically changes can be observed as data changes</p>
		</div>
		<div class="ml-2">
			<div class=" text-xl">EXERCISES:</div>
		<div
			@click="isActive = !isActive"
			:class="{ 'line-through': isActive }"
			class=""
		>TOGGLE LINE TROUGH WITH BINDING (there is also style binding)</div>

		</div>
		<div class="flex items-center flex-col bg-blue-100">
			<div class="text-2xl">VUE V-FOR EXERCISE</div>
			<p
				class="text-sm"
			>v-for directive is a Vue. js directive used to loop over a data usually an array or object.</p>
		</div>
		<div class="ml-2 ">
			<div class="text-xl">EXERCISES:</div>
			<ul>
				<div
					v-for="(todo, index) in todos"
					v-bind:key="todo.id"
					v-bind:title="todo.title"
				>{{ todo.title }}</div>
			</ul>
		</div>
		<div class="flex items-center flex-col bg-blue-100">
			<div class="text-2xl">VUE-ON EXERCISES</div>
			<p class="text-sm">v-on directive is how you run JavaScript in response to DOM events.</p>
		</div>
		<div class="ml-2 ">
			<div class=" text-xl">EXERCISES (shows output in console):</div>
			<input class="border-4 border-solid border-blue-400" v-on:keyup.enter="entered()" />
		</div>
		<div class="flex items-center flex-col bg-blue-100">
			<div class="text-2xl">VUE EMIT EXERCISE</div>
			<p class="text-sm"></p>
			<div class="flex items-center flex-col bg-blue-100">
				<p
					class="text-sm"
				>Vue $emit lets us emit, or send, custom events from a child component to its parent.</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
export default defineComponent({
	name: 'Todo',
	component: {},
	data() {
		return {
			isActive: true,
			newTodoText: '',
			todos: [
				{
					id: 1,
					title: 'Do the dishes',
				},
				{
					id: 2,
					title: 'Take out the trash',
				},
				{
					id: 3,
					title: 'Mow the lawn',
				}
			],
			nextTodoId: 4
		}
	},
	methods: {
		entered() {
			console.log("Just got entered")
		}
	}

});
</script>