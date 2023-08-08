// ./redux/formSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchFormData = createAsyncThunk('form/fetchFormData', async (_, { getState }) => {
    const state = getState().form;
    // You can further process or filter the state data if needed
    return state;
});

const formSlice = createSlice({
  name: 'form',
  initialState: {
    step: 1,
    name: '',
    email: '',
    dob: '',
    phoneNumber: '',
    subscriptionPlan: '',
  },
  reducers: {
    setStep(state, action) {
      state.step = action.payload;
    },
    setName(state, action) {
      state.name = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setDOB(state, action) {
      state.dob = action.payload;
    },
    setPhoneNumber(state, action) {
      state.phoneNumber = action.payload;
    },
    setSubscriptionPlan(state, action) {
      state.subscriptionPlan = action.payload;
    },
  },
});

export const {
  setStep,
  setName,
  setEmail,
  setDOB,
  setPhoneNumber,
  setSubscriptionPlan,
} = formSlice.actions;

export default formSlice.reducer;