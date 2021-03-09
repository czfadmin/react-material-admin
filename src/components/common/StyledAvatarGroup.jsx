import { withStyles } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";

const StyledAvatarGroup = withStyles((theme) => ({
	root: {
		width: theme.spacing(3),
		height: theme.spacing(3),
	},
	avatar: {
		fontSize: "1rem",
		width: theme.spacing(3),
		height: theme.spacing(3),
		minHeight: theme.spacing(3),
		minWidth: theme.spacing(3),
	},
}))(AvatarGroup);
export default StyledAvatarGroup;
