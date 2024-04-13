import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: null,
  username: null,
  followers: null,
  publicRepositories: null,
  image: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { name, login, followers, public_repos, avatar_url } = action.payload;
      state.name = name;
      state.username = login;
      state.followers = followers;
      state.publicRepositories = public_repos,
      state.image = avatar_url
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;