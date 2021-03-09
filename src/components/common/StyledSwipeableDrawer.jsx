import { withStyles } from "@material-ui/core";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
const StyledSwipeableDrawer = withStyles((theme) => ({
	root: {
		backdropFilter: "blur(6px)",
	},
	paper: {
		display: "flex",
		justifyContent: "center",
		backgroundColor: "#ffffff00",
		"box-shadow":
			"0px 0px 0px 0px rgb(0 0 0 / 20%), 0px 0px 0px 0px rgb(0 0 0 / 14%), 0px 0px 0px 0px rgb(0 0 0 / 12%);",
	},
}))(SwipeableDrawer);
export default StyledSwipeableDrawer;
