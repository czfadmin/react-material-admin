import { withStyles } from "@material-ui/core";
import clsx from "clsx";

const styles = (theme) => ({});
function DashboardPage(props) {
	const { classes } = props;
	return <div className={clsx(classes.root, "")}>Dashboard Page</div>;
}
export default withStyles(styles)(DashboardPage);
