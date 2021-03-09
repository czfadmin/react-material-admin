import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "user",
	initialState: {
		idToken: "",
		refreshToken: "",
		expiresIn: "",
		email: "",
	},
	reducers: {},
});

export default userSlice.reducer;
