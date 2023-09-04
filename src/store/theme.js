import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  theme: {
    backgroundColor: '#ffffff',
    backgroundColorSecondary: '#f5f5f7',
    textColor: '#222222',
    textColorSecondary: '#111111',
    textColorAccent: '#f03226',
    type: 'light'
  }
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      if (action.payload === 'dark') {
        state.theme = {
          backgroundColor: '#222222',
          backgroundColorSecondary: '#2e2f30',
          textColor: '#ffffff',
          textColorSecondary: '#959595',
          textColorAccent: '#f03226',
          type: action.payload
        }
      } else {
        state.theme = {
          backgroundColor: '#ffffff',
          backgroundColorSecondary: '#f5f5f7',
          textColor: '#222222',
          textColorSecondary: '#111111',
          textColorAccent: '#f03226',
          type: action.payload
        }
      }
    }
  },
})

export const { setTheme } = themeSlice.actions
export const selectTheme = (state) => state.theme.theme
export default themeSlice.reducer
