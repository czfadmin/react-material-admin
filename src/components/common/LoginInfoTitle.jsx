import React from "react";
import { Typography, withStyles } from "@material-ui/core";
import firebaselogo from "../../ic_firebase.png";
import SocialLogin from "../../components/common/SocialLogin";
import clsx from "clsx";
function LoginInfoTitle(props) {
	const { classes } = props;
	return (
		<div className="flex flex-col items-center min-w-full">
			<div className="flex items-center w-3/4 sm:w-3/4 md:w-2/4 lg:w-2/4">
				<div className="flex-auto">
					<Typography variant="h5" component="h5">
						Sign up to React Material Admin
					</Typography>
					<Typography variant="body1" paragraph>
						Enter your details blew.
					</Typography>
				</div>
				<img
					src={firebaselogo}
					alt="firebase"
					className="h-10 w-10 my-auto"
				/>
			</div>
			<SocialLogin />
			<div
				className={clsx(
					classes.divider,
					"flex flex-row w-3/4 sm:w-3/4 justify-center",
				)}>
				<Typography
					variant="body2"
					className={clsx(classes.p, "text-center my-2 mx-4")}>
					OR
				</Typography>
			</div>
		</div>
	);
}
export default withStyles((theme) => ({
	p: {
		// "&:before": {
		// 	content: "-",
		// },
		margin: "1rem",
	},
	divider: {
		"&:before": {
			content: "",
			width: "100%",
		},
		"&:after": {
			content: ``,
			width: "100%",
		},
	},
}))(LoginInfoTitle);
