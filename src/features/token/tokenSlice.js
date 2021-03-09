const { createSlice } = require("@reduxjs/toolkit");

const tokenSlice = createSlice({
	name: "token",
	initialState: {},
	reducers: {
		setToken: (state) => {},
		removeToken: (state) => {},
		getToken: (state) => {},
	},
});

export const { setToken, removeToken } = tokenSlice.actions;

export default tokenSlice.reducer;
