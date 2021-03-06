import React from "react";
import { Typography } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import firebaselogo from "../../ic_firebase.png";
import SocialLogin from "../../components/common/SocialLogin";
function LoginInfoTitle(props) {
	return (
		<div className="flex flex-col items-center min-w-full">
			{/* <div className="">
				<RouterLink to="/">Home</RouterLink>
			</div> */}
			<div className="flex items-center w-3/4 sm:w-3/4 md:w-2/4 lg:w-2/4">
				<div className="flex-auto">
					<Typography variant="h5" component="h5">
						Sign up to React Material Admin
					</Typography>
					<Typography variant="body1" paragraph>
						Enter your deatils blew.
					</Typography>
				</div>
				<img
					src={firebaselogo}
					alt="firebase"
					className="h-10 w-10 my-auto"
				/>
			</div>
			<SocialLogin />
			<p component="h6" variant="h6" className="text-center mt-2">
				Or
			</p>
		</div>
	);
}
export default LoginInfoTitle;
