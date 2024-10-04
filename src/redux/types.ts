// src/redux/types.ts

export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

export interface RootState {
  tasks: {
    tasks: Task[];
    completedTasks: Task[];
  };
}
