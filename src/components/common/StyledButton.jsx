import { Button, withStyles } from "@material-ui/core";

const StyledButton = withStyles((theme) => ({
	root: {
		"&:focus": {
			outline: "0",
		},
	},
}))(Button);

export default StyledButton;
