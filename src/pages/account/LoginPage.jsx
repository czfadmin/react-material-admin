import React from "react";
import { Formik } from "formik";
import {
	withStyles,
	Grid,
	TextField,
	FormControlLabel,
	Checkbox,
	Button,
	Typography,
	Hidden,
} from "@material-ui/core";
import clsx from "clsx";
import { Link as RouterLink } from "react-router-dom";
import firebaselogo from "../../ic_firebase.png";
import SocialLogin from "../../components/common/SocialLogin";
import LoginInfoCard from "../../components/common/LoginInfoCard";
import LoginInfoTitle from "../../components/common/LoginInfoTitle";

const styles = (theme) => ({
	root: {
		height: "100vh",
		overflow: "auto",
		paddding: 0,
	},
	paper: {
		// margin:
		margin: "0 auto",
	},
	disabled: {
		disabled: "true",
	},
	loginContainer: {
		display: "flex",

		// margin: ,
	},
});
function LoginPage(props) {
	const { classes } = props;
	return (
		<Grid
			container
			spacing={3}
			justify="center"
			className={clsx(classes.root, "shadow-xm")}>
			<Hidden smDown>
				<Grid
					item
					xs={false}
					sm={false}
					lg={5}
					md={5}
					className="flex shadow-xl">
					<LoginInfoCard />
				</Grid>
			</Hidden>
			<Formik
				initialValues={{
					email: "",
					password: "",
				}}
				validate={(values) => {
					const errors = {};
					if (!values.email) {
						errors.email = "Required";
					} else if (
						!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
							values.email
						)
					) {
						errors.email = "Invaliad email address";
					}
					return errors;
				}}
				onSubmit={(values, { setSumitting }) => {
					setTimeout(() => {
						setSumitting(false);
					}, 400);
				}}>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting,
				}) => (
					<Grid
						item
						xs={12}
						sm={false}
						lg={7}
						md={7}
						className={clsx(classes.loginContainer, "")}>
						<div className="w-3/4 lg:w-2/4 md:w-2/4 sm:w-3/4 xl:3/4 flex flex-col items-center min-w-full sm:min-h-full justify-center">
							<LoginInfoTitle />

							<div
								className={clsx(
									classes.paper,
									"p-2 self-center w-3/4 lg:w-2/4 md:2/4 sm:w-3/4 xl:3/4"
								)}>
								<div className="flex flex-col items-stretch"></div>
								<form onSubmit={handleSubmit}>
									<TextField
										variant="outlined"
										margin="normal"
										fullWidth
										required
										id="email"
										name="email"
										label="Email Address"
										autoComplete="email"
										autoFocus
										className="text-white"
									/>
									<TextField
										variant="outlined"
										margin="normal"
										fullWidth
										required
										id="password"
										name="password"
										label="Password"
										type="password"
										autoComplete="current-password"
									/>
									<FormControlLabel
										control={
											<Checkbox
												value="remember"
												color="primary"
											/>
										}
										label="Remember me"
									/>
									<Button
										type="submit"
										fullWidth
										size="large"
										variant="contained"
										color="primary"
										disabled={isSubmitting}
										className={classes.submit}>
										Sign In
									</Button>
									<Grid container className="mt-2">
										<Grid item xs>
											<RouterLink
												to="/forget-pwd"
												variant="body2"
												className="text-sm text-blue-400">
												Forgot password?
											</RouterLink>
										</Grid>
										<Grid item xs>
											<RouterLink
												to="/register"
												variant="body2"
												className="text-sm text-blue-400">
												{
													"Don't have an account? Sign Up"
												}
											</RouterLink>
										</Grid>
									</Grid>
								</form>
							</div>
						</div>
					</Grid>
				)}
			</Formik>
		</Grid>
	);
}

LoginPage.propTypes = {};

export default withStyles(styles)(LoginPage);
