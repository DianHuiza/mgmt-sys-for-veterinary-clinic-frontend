import {PayloadAction, createSlice} from '@reduxjs/toolkit'

export interface AuthState {
  status?: 'Authenticated' | 'Pending' | 'Unauthenticated'
  username: string
  role: string
}

const initialState: AuthState = {
  status: 'Pending',
  username: '',
  role: '',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<AuthState>) => {
      state.status = 'Authenticated'
      state.username = action.payload.username
      state.role = action.payload.role
    },
    logout: (state) => {
      state.status = 'Unauthenticated'
      state.username = ''
      state.role = ''
    },
  },
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
