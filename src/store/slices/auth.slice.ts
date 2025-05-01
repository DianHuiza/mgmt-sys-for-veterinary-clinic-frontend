import {PayloadAction, createSlice} from '@reduxjs/toolkit'

export interface AuthState {
  status?: 'Authenticated' | 'Pending' | 'Unauthenticated'
  name: string
  role: string
}

const initialState: AuthState = {
  status: 'Pending',
  name: '',
  role: '',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<AuthState>) => {
      state.status = 'Authenticated'
      state.name = action.payload.name
      state.role = action.payload.role
    },
    logout: (state) => {
      state.status = 'Unauthenticated'
      state.name = ''
      state.role = ''
    },
  },
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
