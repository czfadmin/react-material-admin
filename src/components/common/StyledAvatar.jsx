import { Avatar, withStyles } from "@material-ui/core";

const StyledAvatar = withStyles((theme) => ({
	root: {
		width: theme.spacing(3),
		height: theme.spacing(3),
	},
}))(Avatar);
export default StyledAvatar;
