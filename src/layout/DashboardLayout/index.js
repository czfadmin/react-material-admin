import { Outlet } from "react-router-dom";
import { Container, withStyles } from "@material-ui/core";
import DashboardHeader from "./DashboardHeader";
import clsx from "clsx";
import Copyright from "../../components/common/Copyright";
const DashboardLayout = (props) => {
	const { classes } = props;
	return (
		<Container>
			<DashboardHeader />
			<div
				className={clsx(classes.contentContainer, "flex items-center")}>
				<Outlet />
			</div>
			<Copyright />
		</Container>
	);
};

export default withStyles((theme) => ({
	contentContainer: {
		height: "100vh",
		overflow: "auto",
	},
}))(DashboardLayout);
