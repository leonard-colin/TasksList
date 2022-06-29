// Selectors: sélectionner une partie de notre store
export const getTasks = store => store.taskList;
export const getCompletedTasks = store =>
  store.taskList.filter(task => task.isCompleted);
