import { createSlice } from "@reduxjs/toolkit";
const reviewSlice = createSlice({
	name: "review",
	initialState: {
		commentReviewIsOpen: false,
	},
	reducers: {
		toggleCommentReviewEditor: (state) => {
			state.commentReviewIsOpen = !state.commentReviewIsOpen;
		},
	},
});
export const { toggleCommentReviewEditor } = reviewSlice.actions;
export default reviewSlice.reducer;
