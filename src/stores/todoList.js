import { defineStore } from "pinia";

export const useTodoListStore = defineStore('todoList', {
  state: () => ({
    todoList: [],
    id: 0
  }),
  actions: {
    addTodo(item) {
      this.todoList.push({ id: this.id++, item, completed: false })
    },
    deleteTodo(itemId) {
      this.todoList = this.todoList.filter(({ id }) => id !== itemId)
    },
    toggleCompleted(itemId) {
      const item = this.todoList.find(({ id }) => id === itemId);
      if (!item) return;
      item.completed = !item.completed;
    }
  }
});
