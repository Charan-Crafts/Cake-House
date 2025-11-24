import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import api from "../api"
const initialState = {
    isAuthenticated: false,
    user: null,
    loading: false,
}

export const checkAuthStatus = createAsyncThunk("auth/checkAuthStatus", async (_, { rejectWithValues }) => {

    try {

        const response = await api.get("/auth/check-auth", {
            withCredentials: true,
        })

        return response.data;

    } catch (error) {
        console.log("Error in checking auth status:", error.response.data.message);
        let message = error.response.data.message;
        return rejectWithValues(message);
    }
})


export const userRegistration = createAsyncThunk("auth/registerUser", async (userData, { rejectWithValues }) => {

    try {
        const response = await api.post("/auth/register", userData, {
            withCredentials: true,
            headers: {
                "Cache-Control": "no-cache,no-store,must-revalidate,proxy-revalidate,max-stale=0,post-check=0,pre-check=0"
            }
        })

        return response.data;
    } catch (error) {

        console.log("Error in user registration:", error);

    }
})

export const userLogin = createAsyncThunk("auth/loginUser", async (loginData, { rejectWithValues }) => {

    try {

        const response = await api.post("/auth/login", loginData, {
            withCredentials: true,
            headers: {
                "Cache-Control": "no-cache,no-store,must-revalidate,proxy-revalidate,max-stale=0,post-check=0,pre-check=0"
            }
        })

        return response.data;

    } catch (error) {
        console.log("Error in user login:", error);
        let message = error.response.data.message;
        return rejectWithValues(message);
    }
})

export const userLogout = createAsyncThunk("auth/logoutUser", async (_, { rejectWithValues }) => {
    try {

        const response = await api.post("/auth/logout",{},{
            withCredentials: true,
            headers: {
                "Cache-Control": "no-cache,no-store,must-revalidate,proxy-revalidate,max-stale=0,post-check=0,pre-check=0"
            }
        })
        
        return response.data;
    } catch (error) {
        console.log("Error in user logout:", error);
        let message = error.response.data.message;
        return rejectWithValues(message);
    }
});
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder

            // Check Auth Status
            .addCase(checkAuthStatus.pending, (state) => {
                state.loading = true;
            })
            .addCase(checkAuthStatus.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                // console.log("Auth status:", action.payload);
                state.user = action.payload.user;
            })
            .addCase(checkAuthStatus.rejected, (state, action) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.user = null;
            })

            // User Registration
            .addCase(userRegistration.pending, (state) => {
                state.loading = true;
            })
            .addCase(userRegistration.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                // console.log("Registration successful:", action.payload);
                state.user = action.payload.user;
            })
            .addCase(userRegistration.rejected, (state, action) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.user = null;
            })

            // User Login

            .addCase(userLogin.pending, (state) => {
                state.loading = true;
            })
            .addCase(userLogin.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload.user;
            })
            .addCase(userLogin.rejected, (state, action) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.user = null;
            })

            // User Logout
            .addCase(userLogout.pending, (state) => {
                state.loading = true;
            })
            .addCase(userLogout.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.user = null;
            })
            .addCase(userLogout.rejected, (state, action) => {
                state.loading = false;
            });

    }
})

export default authSlice.reducer;