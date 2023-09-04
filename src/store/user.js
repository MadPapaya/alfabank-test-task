import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

export const fetchUser = createAsyncThunk('user/fetchUser', () => {
    return fetch('docs/userInfo.json')
      .then(response => response.json())
  }
)

const initialState = {
  user: {
    phoneNumber: "",
    userName: "",
    email: "",
    bio: "",
    defaultPhotoUrl: 'images/defaultPhotos/noPhoto.png',
    recentPayments: []
  },
  loading: true,
  error: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updatePhoto: (state, action) => {
      state.user.defaultPhotoUrl = action.payload
    },
    updateLogin: (state, action) => {
      state.user.userName = action.payload
    },
    updateEmail: (state, action) => {
      state.user.email = action.payload
    },
    updatePhone: (state, action) => {
      state.user.phoneNumber = action.payload
    },
    updateBio: (state, action) => {
      state.user.bio = action.payload
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchUser.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload.user
      state.loading = false
    })
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.user = {}
      state.loading = false
      state.error = action.error.message
      console.error(action.error.message)
    })
  }
})

export const { updatePhoto, updateLogin, updateEmail, updatePhone, updateBio } = userSlice.actions
export const selectUser = (state) => state.user.user
export const selectIsUserLoading = (state) => state.user.loading
export default userSlice.reducer
