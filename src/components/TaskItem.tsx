import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Task } from '../redux/types'; // Adjust the import path as necessary
import { useDispatch } from 'react-redux';
import { completeTask } from '../redux/slices/taskSlice'; // Import the completeTask action

interface TaskItemProps {
  task: Task; // Define the type of the task prop
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const dispatch = useDispatch(); // Hook to dispatch actions

  const handleComplete = () => {
    dispatch(completeTask(task.id)); // Dispatch completeTask with the task ID
  };

  return (
    <View style={styles.container}>
      <Text style={styles.taskName}>{task.title}</Text>
      {!task.completed && (
        <TouchableOpacity onPress={handleComplete} style={styles.completeButton}>
          <Text style={styles.completeButtonText}>Complete</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginVertical: 5,
  },
  taskName: {
    fontSize: 16,
    color: '#333',
  },
  completeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#4caf50', // Green background for completion
    borderRadius: 5,
    alignItems: 'center',
  },
  completeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default TaskItem;
