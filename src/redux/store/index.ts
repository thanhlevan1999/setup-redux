import { rootReducer } from './../rootReducer';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: () => AppDispatch = useDispatch