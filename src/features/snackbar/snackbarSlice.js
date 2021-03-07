import { createSlice } from "@reduxjs/toolkit";

const snackbarSlice = createSlice({
	name: "snackbar",
	initialState: {
		open: false,
		vertical: "top",
		horizontal: "center",
		autoHideDuration: 3000,
		message: "",
		severity: "success",
	},
	reducers: {
		showSnackbar: (state, action) => {
			state.message = action.payload;
			state.open = true;
		},
		toggleSnackbar: (state) => {
			state.open = !state.open;
		},
		closeSnackbar: (state) => {
			state.open = false;
		},
	},
});

export const {
	showSnackbar,
	toggleSnackbar,
	closeSnackbar,
} = snackbarSlice.actions;
export const toggleSnackbarAsync = () => (dispatch) => {
	setTimeout(() => {
		dispatch(toggleSnackbar());
	}, 1000);
};

export const closeSnackbarAsync = (timeout) => (dispatch) => {
	setTimeout(() => {
		dispatch(closeSnackbar());
	}, timeout);
};
export default snackbarSlice.reducer;
