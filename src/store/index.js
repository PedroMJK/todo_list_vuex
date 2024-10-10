import { createStore } from 'vuex';

const store = createStore({
  state: {
    tasks: [] // Inicializa a lista de tarefas
  },
  getters: {
    allTasks: state => state.tasks // Getter para retornar todas as tarefas
  },
  mutations: {
    ADD_TASK(state, task) {
      state.tasks.push(task); // Adiciona uma nova tarefa
    },
    REMOVE_TASK(state, taskIndex) {
      state.tasks.splice(taskIndex, 1); // Remove uma tarefa com base no índice
    },
    TOGGLE_TASK(state, taskIndex) {
      state.tasks[taskIndex].completed = !state.tasks[taskIndex].completed; // Alterna o status de conclusão da tarefa
    }
  },
  actions: {
    addTask({ commit }, task) {
      commit('ADD_TASK', task); // Dispara a mutação para adicionar uma nova tarefa
    },
    removeTask({ commit }, taskIndex) {
      commit('REMOVE_TASK', taskIndex); // Dispara a mutação para remover a tarefa
    },
    toggleTask({ commit }, taskIndex) {
      commit('TOGGLE_TASK', taskIndex); // Dispara a mutação para alternar a conclusão da tarefa
    }
  }
});

export default store;
