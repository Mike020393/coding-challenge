<template>
  <div
    class="flex justify-between items-center py-4 px-2 border-t-2 border-black"
    :class="{ 'bg-green-600': this.todo.done, 'bg-red-500': !this.todo.done }"
  >
    <input
      type="checkbox"
      id="checkbox"
      v-model="tododone"
      class="cursor-pointer"
      @change="toggleTodo()"
      ref="tododone"
    />
    <p
      class="todo_text"
      :class="{
        'line-through': this.todo.done,
        'no-line-through': !this.todo.done,
      }"
    >
      {{ todo.todo }}
    </p>
    <button class="py-2 px-4 bg-black rounded" @click="handleDeleteTodo()">
      Delete Todo
    </button>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: ["todoprop", "todoindex"],
  data() {
    return {
      todo: this.todoprop,
    };
  },
  methods: {
    toggleTodo() {
      if (this.$refs.tododone.checked == false) {
        this.$emit("toggledone-index", this.todoindex);
      }
      if (this.$refs.tododone.checked == true) {
        this.$emit("toggledone-index", this.todoindex);
      }
    },
    handleDeleteTodo() {
      this.$emit("delete-index", this.todoindex);
    },
  },
};
</script>
