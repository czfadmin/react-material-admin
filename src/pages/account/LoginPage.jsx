import React from "react";
import { Formik, ErrorMessage } from "formik";
import {
	withStyles,
	Grid,
	TextField,
	FormControlLabel,
	Checkbox,
	Button,
	Hidden,
} from "@material-ui/core";
import firebase from "firebase/app";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import LoginInfoCard from "../../components/common/LoginInfoCard";
import LoginInfoTitle from "../../components/common/LoginInfoTitle";
import { showSnackbar } from "../../features/snackbar/snackbarSlice";
const styles = (theme) => ({
	root: {
		height: "100vh",
		overflow: "auto",
		padding: 0,
	},
	paper: {
		margin: "0 auto",
	},
	disabled: {
		disabled: "true",
	},
	loginContainer: {
		display: "flex",
	},
});
function LoginPage(props) {
	const { classes } = props;
	const location = useNavigate();
	const dispatch = useDispatch();
	const signInAnonymously = (event) => {
		event.preventDefault();
		firebase
			.auth()
			.signInAnonymously()
			.then((data) => {
				// {
				//   "kind": "",
				//   "idToken": "",
				//   "refreshToken": "",
				//   "expiresIn": "3600",
				//   "localId": ""
				// }
				if (data) {
					// const { idToken, refreshToken, localId } = data;
				}
				dispatch(showSnackbar("Login successful"));

				location("/");
			})
			.catch((error) => {
				var errorCode = error.code;
				// var errorMessage = error.message;

				if (errorCode === "auth/operation-not-allowed") {
					alert(
						"You must enable Anonymous auth in the Firebase Console.",
					);
				} else {
					console.error(error);
				}
			});
	};
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
					className="flex flex-col shadow-xl items-center">
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
							values.email,
						)
					) {
						errors.email = "Invalid email address";
					}
					return errors;
				}}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						setSubmitting(false);
						firebase
							.auth()
							.signInWithEmailAndPassword(
								values.email,
								values.password,
							)
							.then((data) => {
								dispatch(showSnackbar("Login successful"));
								location("/");
							})
							.catch((error) => {
								// if (
								// 	error.code ==
								// 	"auth/multi-factor-auth-required"
								// ) {
								// 	var resolver = error.resolver;
								// 	var multiFactorHints = resolver.hints;
								// } else {
								// }
								dispatch(showSnackbar(`Error:${error.code}`));
							});
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
									"p-0 self-center w-3/4 lg:w-2/4 md:2/4 sm:w-3/4 xl:3/4",
								)}>
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
										onChange={handleChange}
										onBlur={handleBlur}
										autoFocus
										value={values.email}
										className="text-white"
									/>
									<ErrorMessage
										name="email"
										component="div"
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
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.password}
										autoComplete="current-password"
									/>
									<ErrorMessage
										name="password"
										component="div"
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
									<Grid container spacing={1}>
										<Grid
											item
											xs={12}
											md={8}
											lg={8}
											sm={12}>
											<Button
												size="medium"
												variant="outlined"
												color="primary"
												fullWidth
												onClick={signInAnonymously}>
												Sign in Anonymously
											</Button>
										</Grid>
										<Grid
											item
											xs={12}
											md={4}
											lg={4}
											sm={12}
											className="sm:mt-2">
											<Button
												type="submit"
												size="medium"
												variant="outlined"
												color="primary"
												fullWidth
												disabled={isSubmitting}
												className={classes.submit}>
												Sign In
											</Button>
										</Grid>
									</Grid>

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
