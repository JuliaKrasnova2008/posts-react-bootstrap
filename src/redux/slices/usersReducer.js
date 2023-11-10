import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};
export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      let users = action.payload;
      state.users = users;
    },
  },
});

export default usersSlice.reducer;
export const { setUsers } = usersSlice.actions;
