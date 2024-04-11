<script setup>
import { onMounted, ref } from 'vue';
import { fetchTodoList } from '../api/TodoListAPI';

const loading = ref(true)
const todoList = ref("")

onMounted(async () =>{
  try{
    todoList.value = await fetchTodoList()
    console.log(todoList.value)
  }catch (error){
    console.log(error)
  }finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="todo-list">
    <h1>This is a todo list</h1>
    <ul>
      <li v-for="todo in todoList.data" :key="todo._id">
        {{ todo.title }}
      </li>
    </ul>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .todo-list {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
