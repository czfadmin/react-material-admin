import { Outlet } from "react-router-dom";
import { Container, Hidden, Toolbar, withStyles } from "@material-ui/core";
import RmaHeader from "../../components/common/RmaHeader";
import clsx from "clsx";
const styles = (theme) => ({
	root: {
		backgroud: "linear-gradient(45deg,red 30%,blue 40%) !important",
	},
});
const MainLayout = (props) => {
	const { classes } = props;
	return (
		<Container component="main" className={clsx(classes.root, "flex")}>
			<RmaHeader />
			<div className="flex flex-col min-h-screen">
				<Hidden smDown>
					<Toolbar />
				</Hidden>

				<Outlet />
			</div>
		</Container>
	);
};
export default withStyles(styles)(MainLayout);
