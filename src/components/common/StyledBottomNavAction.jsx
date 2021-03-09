import { BottomNavigationAction, withStyles } from "@material-ui/core";

const StyledBottomNavAction = withStyles((theme) => ({
	root: {
		"&:focus": {
			outline: 0,
			border: 0,
		},
	},
}))(BottomNavigationAction);

export default StyledBottomNavAction;
