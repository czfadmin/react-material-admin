import React, { useState } from "react";

import { withStyles, Typography, TextField, Box } from "@material-ui/core";
import clsx from "clsx";
import StyledButton from "../common/StyledButton";
const styles = (theme) => ({
	styledButton: {
		padding: ".25rem",
		margin: ".25rem .25rem",
	},
	grid: {
		marginTop: ".25rem",
	},
	papper: {},
	hidden: {
		visibility: "hidden",
		height: "0",
		padding: 0,
		margin: 0,
	},
});
function ReviewEditor(props) {
	const { classes, isOpen } = props;
	const [isOpened, setCommentEditorState] = useState(isOpen);
	return (
		<Box
			className={clsx(
				classes.papper,
				"rounded-md w-full bg-gray-100 mt-1 py-0 px-2 border shadow-md",
				{
					[classes.hidden]: !isOpen,
				}
			)}>
			<TextField
				variant="outlined"
				margin="normal"
				fullWidth
				name="content"
				label="comment"
				autoFocus
				rows={5}
				multiline
			/>

			<div className="flex flex-row items-center justify-end ml-auto min-w-full">
				<StyledButton
					variant="outlined"
					color="primary"
					className={clsx(classes.styledButton, "my-2 p-1")}>
					Submit
				</StyledButton>
			</div>
		</Box>
	);
}
export default withStyles(styles)(ReviewEditor);
