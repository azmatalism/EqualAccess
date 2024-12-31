import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  userInfo: {},
};
const userInfoSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});
export const {setUserDetails} = userInfoSlice.actions;
export default userInfoSlice.reducer;
