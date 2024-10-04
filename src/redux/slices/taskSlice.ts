import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../types';

interface TaskState {
  tasks: Task[];
  completedTasks: Task[];
}

const initialState: TaskState = {
  tasks: [],
  completedTasks: [],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    completeTask: (state, action: PayloadAction<string>) => {
      const taskIndex = state.tasks.findIndex(task => task.id === action.payload);
      if (taskIndex !== -1) {
        const completedTask = state.tasks[taskIndex];
        completedTask.completed = true; // Mark as completed
        state.completedTasks.push(completedTask); // Add to completed tasks
        state.tasks.splice(taskIndex, 1); // Remove from the active tasks
      }
    },
  },
});

export const { addTask, completeTask } = taskSlice.actions;
export default taskSlice.reducer;
