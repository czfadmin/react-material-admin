import { withStyles, Typography } from "@material-ui/core";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import clsx from "clsx";
import StyledIconButton from "../../components/common/StyledIconButton";
const styles = (theme) => ({
	root: {
		padding: 0,
		margin: ".25rem auto ",
	},
	styledButton: {
		padding: ".4rem",
	},
	typography: {
		padding: ".15rem",
	},
});
function StyledButtonWithValue(props) {
	const { classes, icon, value, size } = props;
	return (
		<div className={clsx(classes.root, "flex flex-row items-center")}>
			<StyledIconButton
				size="medium"
				size={size ? size : "medium"}
				className={clsx(classes.styledButton)}>
				{icon}
			</StyledIconButton>
			<Typography
				component="p"
				variant="body2"
				className={clsx(classes.typography, "text-gray-600")}>
				{value}
			</Typography>
		</div>
	);
}
export default withStyles(styles)(StyledButtonWithValue);
