import { configureStore } from '@reduxjs/toolkit';  // This will also bundle getDefaultMiddleware automatically
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import taskReducer from './slices/taskSlice';

// Persist configuration
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, taskReducer);

// Configure the store with middleware to ignore non-serializable values
export const store = configureStore({
  reducer: {
    tasks: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        ignoredPaths: ['register', 'tasks.register'],
      },
    }),
});

// Persist the store
export const persistor = persistStore(store);
