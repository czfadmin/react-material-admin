import { Outlet } from "react-router-dom";
import { Container, Hidden, Toolbar, withStyles } from "@material-ui/core";
import RmaHeader from "../../components/common/RmaHeader";
const styles = (theme) => ({});
const MainLayout = (props) => {
	const { classes } = props;
	return (
		<>
			<RmaHeader />
			<div className="flex flex-col min-h-screen">
				<Hidden smDown>
					<Toolbar />
				</Hidden>

				<Outlet />
			</div>
		</>
	);
};
export default withStyles(styles)(MainLayout);
