const { createSlice } = require("@reduxjs/toolkit");

const tokenSlice = createSlice({
	name: 'token',
	initialState: {

	},
	reducers: {
		setToken: (state) => {

		},
		removeToken: (state) => {

		},
		getToken: (state) => {

		}
	},
});

export const { setToken, removeToken } = tokenSlice.actions;

// export selector = state => state.token.;
export default tokenSlice.reducer;