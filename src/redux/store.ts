import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

// features
import actionReducer from './features/action';
import authReducer from './features/auth';
import galleryReducer from './features/gallery';
import productReducer from './features/products';
import userReducer from './features/user';
import categoryReducer from './features/category';
import blogReducer from './features/blog';

export const store = configureStore({
  reducer: {
    action: actionReducer,
    auth: authReducer,
    user: userReducer,
    gallery: galleryReducer, 
    products: productReducer,
    category: categoryReducer,
    blogs: blogReducer,
  },
});

// Infer types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Custom Hooks for TypeScript
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
