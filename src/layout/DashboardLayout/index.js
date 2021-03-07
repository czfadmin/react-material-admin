import React, { useState, useEffect } from "react";

import clsx from "clsx";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { withStyles, Snackbar, Toolbar } from "@material-ui/core";

import DashboardHeader from "./DashboardHeader";
import Copyright from "../../components/common/Copyright";
import Alert from "../../components/common/Alert";
import { closeSnackbarAsync } from "../../features/snackbar/snackbarSlice";
const DashboardLayout = (props) => {
	const { classes } = props;
	const dispatch = useDispatch();
	const message = useSelector((state) => state.snackbar.message);
	const snackbarClosed = useSelector((state) => state.snackbar.open);

	const snackbarHandleClose = (timeout) => {
		dispatch(closeSnackbarAsync(timeout));
	};
	return (
		<div className={clsx(classes.root, "min-w-full")}>
			<DashboardHeader />
			<Toolbar className="h-16 sm:h-16" />
			<div
				className={clsx(
					classes.contentContainer,
					"flex flex-col items-center p-2 "
				)}>
				<Snackbar
					anchorOrigin={{
						vertical: "top",
						horizontal: "center",
					}}
					autoHideDuration={useSelector(
						(state) => state.snackbar.autoHideDuration
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
			</div>
			<Copyright />
		</div>
	);
};

export default withStyles((theme) => ({
	root: {
		background: "linear-gradient(45deg,red 30%,blue 75%)",
		// width: "100%",
	},
	contentContainer: {
		height: "100vh",
		overflow: "auto",
	},
	context: {
		overflow: "auto",
	},
}))(DashboardLayout);
