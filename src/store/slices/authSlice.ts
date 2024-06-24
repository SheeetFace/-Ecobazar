import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

import { firebaseSignOutService } from '../../services/auth/firebaseSignOutService';

import type { UserDataType } from '../../types/userTypes';

interface AuthState{
    user: UserDataType|null;
    isUser:boolean,
    isCustomer1:boolean;
    loading: boolean;
    error: string|null;
}

const initialState: AuthState ={
    user: null,
    isUser:false,
    isCustomer1:true,
    loading: true,
    error: null,
};

export const logout = createAsyncThunk('auth/logout', async (_, { rejectWithValue })=>{

    const res = await firebaseSignOutService();

    if(!res.error.status && !res.error.message) return true;
    else return rejectWithValue(res.error.message); 
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        updateUserData(state, action: PayloadAction<UserDataType|null>){
            console.log(state.user)
            state.user = action.payload;
            state.isCustomer1 = action.payload?.accountSettings.displayName === 'customer1' || false;
            state.isUser = action.payload !== null;
        },
        clearError(state){
            state.error = null;
        },
        setLoading(state, action: PayloadAction<boolean>){
            state.loading = action.payload;
        },
        setError(state, action: PayloadAction<string|null>){
            state.error = action.payload;
        },
    },
    extraReducers:(builder)=>{
        builder
            .addCase(logout.pending, (state)=>{
                state.loading = true;
            })
            .addCase(logout.fulfilled, (state)=>{
                state.user = null;
                state.isUser = false;
                state.isCustomer1 = false;
                state.error = null;
                state.loading = false;
            })
            .addCase(logout.rejected, (state, action)=>{
                state.error = action.payload as string;
                state.loading = false;
            });
    }
});

export const { updateUserData, clearError, setLoading, setError } = authSlice.actions;
export default authSlice.reducer;