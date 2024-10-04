import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import TaskItem from '../components/TaskItem';
import { RootState } from '../redux/types'; // Import the RootState type

export default function CompletedTasksScreen() {
  // Specify the state type for useSelector
  const completedTasks = useSelector((state: RootState) => state.tasks.completedTasks);

  return (
    <View style={styles.container}>
      {completedTasks.length === 0 ? (
        <Text style={styles.noTaskText}>No completed tasks yet</Text>
      ) : (
        <FlatList
          data={completedTasks}
          keyExtractor={(item) => item.id} // Use the task ID as the key
          renderItem={({ item }) => <TaskItem task={item} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
     backgroundColor:'#b89e2b'
  },
  noTaskText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});
