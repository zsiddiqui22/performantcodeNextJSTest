// ./redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import formReducer from './formSlice';

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export default store;
 
// src/store/index.js
// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunkMiddleware from 'redux-thunk';
// import rootReducer from './reducers'; // Replace this with your actual root reducer

// const middleware = [thunkMiddleware];
// const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });
// const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(...middleware))
// );

// export default store;