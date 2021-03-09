import { createSlice } from "@reduxjs/toolkit";

const drawerSlice = createSlice({
	name: "drawer",
	initialState: {
		open: false,
		anchor: "right",
	},
	reducers: {
		toggleSwipeableDrawer: (state) => {
			state.open = !state.open;
		},
	},
});

export const { toggleSwipeableDrawer } = drawerSlice.actions;
export default drawerSlice.reducer;
