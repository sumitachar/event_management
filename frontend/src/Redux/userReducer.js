import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from './axiosInstance'; // Adjust the path as necessary

// // Async thunk for sign-up
export const signUpUser = createAsyncThunk('user/signUpUser', async (signUpDetails, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post('/signup', signUpDetails);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Async thunk for login
export const loginUser = createAsyncThunk('user/loginUser', async (loginDetails, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post('/login', loginDetails);
    const token = response.data.token;

    // Store the token in local storage
    localStorage.setItem('token', token);

    // console.log('Login response data:', response.data); // Add this line for debugging

    return response.data;
  } catch (error) {
    // Ensure the error message is a string
    const errorMessage = error.response?.data?.message || 'An unknown error occurred';
    return rejectWithValue({ error: errorMessage });
  }
});

const userReducer = createSlice({
  name: 'user',
  initialState: {
    user: null,
    signUpStatus: null,
    loginStatus: null,
    error: null,
  },
  reducers: {
    clearState: (state) => {
      state.signUpStatus = null;
      state.loginStatus = null;
      state.error = null;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.signUpStatus = 'loading';
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.signUpStatus = 'succeeded';
        state.user = action.payload;
        state.error = null;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.signUpStatus = 'failed';
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.loginStatus = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loginStatus = 'succeeded';
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loginStatus = 'failed';
        state.error = action.payload;
      });
  },
});




export const { clearState, setUser  } = userReducer.actions;

export default userReducer.reducer;








