import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';


const store = configureStore({
    reducer:reducer
});

const persister = 'Free';

export { store, persister };


