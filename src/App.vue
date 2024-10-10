<template>
  <div id="app">
    <h1>To-Do List</h1>
    <!-- Input para adicionar uma nova tarefa -->
    <input v-model="newTask" placeholder="Add a new task" />
    <button class="add_btn" @click="addNewTask">Add Task</button>

    <ul>
      <!-- Loop para listar todas as tarefas -->
      <li v-for="(task, index) in allTasks" :key="index">
        <span class="tasks_words" :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">
          {{ task.name }}
        </span>
        <button class="toggle_btn" @click="toggleTask(index)">Toggle Complete</button>
        <button class="remove_btn" @click="removeTask(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      newTask: '' // Armazena o valor do input para adicionar novas tarefas
    };
  },
  computed: {
    ...mapGetters(['allTasks']) // Mapeando o getter do Vuex para pegar todas as tarefas
  },
  methods: {
    ...mapActions(['addTask', 'removeTask', 'toggleTask']), // Métodos Vuex para manipular as tarefas
    addNewTask() {
      if (this.newTask.trim() !== '') {
        this.addTask({ name: this.newTask, completed: false }); // Adiciona uma nova tarefa
        this.newTask = ''; // Limpa o input após adicionar a tarefa
      }
    }
  }
};
</script>


<style>

ul{
  background-color: rgb(64, 177, 208);
  width: 30rem;
  height: 80px;
  padding: 10px;
  list-style: none;
}

li{
    display: flex;
    flex-direction: row;
    gap: 10px; 
    margin-top: 10px;
}

.add_btn{
  background-color: rgb(39, 163, 245);
  margin: 10px;
  padding: 5px 20px;
  border-radius: 10px;
  cursor: pointer;
}

.tasks_words{
  width: 17rem;
}

</style>
