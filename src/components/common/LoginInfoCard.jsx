import React from "react";
import { Typography } from "@material-ui/core";
import loginsvg from "../../illustration_login.svg";
function LoginInfoCard(props) {
	return (
		<div
			className="min-h-full
						min-w-full
						flex
						flex-col
						self-center
						justify-center">
			<Typography variant="h4" className="text-center m-2 p-2">
				Hi,Welcome Back!
			</Typography>
			<img
				src={loginsvg}
				alt="login"
				className="self-center bg-cover min-w-full mt-8 "
			/>
		</div>
	);
}

export default LoginInfoCard;
