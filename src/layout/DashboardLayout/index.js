import React from "react";

import clsx from "clsx";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { withStyles, Snackbar } from "@material-ui/core";

import DashboardHeader from "./DashboardHeader";
import Copyright from "../../components/common/Copyright";
import Alert from "../../components/common/Alert";
import { closeSnackbarAsync } from "../../features/snackbar/snackbarSlice";
import SettingSwipeableDrawer from "../../components/ecommerce/SettingSwipeableDrawer";
const DashboardLayout = (props) => {
	const { classes } = props;
	const dispatch = useDispatch();
	const message = useSelector((state) => state.snackbar.message);
	const snackbarClosed = useSelector((state) => state.snackbar.open);

	const snackbarHandleClose = (timeout) => {
		dispatch(closeSnackbarAsync(timeout));
	};
	return (
		<div className={clsx(classes.root, "bg-gray-200")}>
			<DashboardHeader />
			<div
				className={clsx(
					classes.contentContainer,
					"flex flex-col  sm:pt-2 mt-2",
				)}>
				<Snackbar
					anchorOrigin={{
						vertical: "top",
						horizontal: "center",
					}}
					autoHideDuration={useSelector(
						(state) => state.snackbar.autoHideDuration,
					)}
					open={snackbarClosed}
					onClose={() => snackbarHandleClose(1000)}
					key={"top-center"}>
					<Alert
						onClose={() => snackbarHandleClose(0)}
						severity="success">
						{message}
					</Alert>
				</Snackbar>

				<Outlet />
				<Copyright />
			</div>
			<SettingSwipeableDrawer />
		</div>
	);
};

export default withStyles((theme) => ({
	root: {
		height: "100vh",
		overflow: "auto",
		paddingTop: 52,
	},
	contentContainer: {
		width: "100%",
	},
}))(DashboardLayout);
