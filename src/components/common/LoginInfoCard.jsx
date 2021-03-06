import React from "react";
import { Typography } from "@material-ui/core";
import loginsvg from "../../illustration_login.svg";
function LoginInfoCard(props) {
	return (
		<div
			className="min-h-full
						min-w-full lg:self-center
						justify-items-center
						flex
						flex-col
						justify-center">
			<Typography variant="h4" className="text-center m-2 p-2">
				Hi,Welcome Back!
			</Typography>
			<img
				src={loginsvg}
				alt="login"
				className="self-center bg-cover min-h-full min-w-full"
			/>
		</div>
	);
}

export default LoginInfoCard;
