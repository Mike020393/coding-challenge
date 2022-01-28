<template>
  <div class="text-white bg-gray-600 w-2/4 max-w-2xl m-auto mt-12">
    <div class="text-center border-b-2 border-black py-4">
      <h1 class="text-3xl py-4">Your Todos</h1>

      <p class="text-xl p-2" v-if="openTodos.length > 0">
        Open Todos: {{ openTodos.length }}
      </p>
      <p class="text-xl p-2" v-else>Congrats: No Todos!</p>
      <div class="flex space-around">
        <input
          type="text"
          v-model="newTodo"
          class="py-2 px-2 text-black inline-block w-2/3"
        />
        <v-button
          :onClick="addTodo"
          :class="{ 'w-1/3 border-black border-2 bg-yellow-500': true }"
        >
          Add Todo
        </v-button>
      </div>
    </div>
    <div v-for="(todo, index) in todos" :key="todo.todo">
      <Todo
        :todoprop="todo"
        :todoindex="index"
        @toggledone-index="setDone"
        @delete-index="deleteTodo"
      />
    </div>
  </div>
</template>

<script>
import api from "./api";
import Todo from "./components/Todo";
import Btn from "./components/Btn";

export default {
  name: "App",
  components: {
    Todo,
    "v-button": Btn,
  },
  data() {
    return {
      newTodo: "",
      todos: [],
    };
  },
  async mounted() {
    const todos = await api.loadTodos();
    console.log("todos", todos);
    this.todos = todos.map((todos) => ({
      todo: todos.title,
      done: todos.completed,
    }));
  },
  methods: {
    async addTodo() {
      if (this.newTodo) {
        var newTododata = {
          title: this.newTodo,
          completed: false,
        };
        await api.post("todos", newTododata);
        this.todos.push({ todo: this.newTodo, done: false });
        this.newTodo = "";
      } else {
        alert("Please enter a todo");
      }
    },
    setDone(index) {
      this.todos[index].done = !this.todos[index].done;
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
  },
  computed: {
    openTodos() {
      const openTodos = this.todos.filter((todo) => {
        return !todo.done;
      });
      return openTodos;
    },
  },
};
</script>
