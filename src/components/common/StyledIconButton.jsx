import { IconButton, withStyles } from "@material-ui/core";

const StyledIconButton = withStyles((theme) => ({
	root: {
		"&:focus": {
			outline: 0,
			border: 0,
		},
		marginLeft: "0.25rem",
		marginRight: "0.25rem",
	},
}))(IconButton);

export default StyledIconButton;
