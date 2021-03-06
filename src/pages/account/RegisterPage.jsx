import React from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
	withStyles,
	Grid,
	TextField,
	Button,
	Typography,
	Hidden,
	Checkbox,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";

import LoginInfoCard from "../../components/common/LoginInfoCard";
import LoginInfoTitle from "../../components/common/LoginInfoTitle";

const styles = (theme) => ({
	root: {
		height: "100vh",
		overflow: "auto",
		paddding: 0,
	},
	paper: {
		margin: "0 auto",
	},
	disabled: {
		disabled: "true",
	},
	registerContainer: {},
});
function RegisterPage(props) {
	const { classes } = props;
	return (
		<Grid
			container
			spacing={3}
			justify="center"
			className={clsx(classes.root, "shadow-sm")}>
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
				validationSchema={Yup.object({
					password_confirm: Yup.string()
						.max(15, "Must be 15 characters or less")
						.required(""),
					password: Yup.string()
						.max(20, "Must be 20 characters or less")
						.required(""),
					email: Yup.string()
						.email("Invalid email address")
						.required(""),
					agree: Yup.bool().required(),
				})}
				// validate={(values) => {
				// 	const errors = {};
				// 	if (!values.email) {
				// 		errors.email = "Required";
				// 	} else if (
				// 		!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
				// 			values.email
				// 		)
				// 	) {
				// 		errors.email = "Invaliad email address";
				// 	}
				// 	return errors;
				// }}
				onSubmit={(values, { setSumitting }) => {
					// setTimeout(() => {
					// 	setSumitting(false);
					// }, 400);

					alert(JSON.stringify(values, null, 2));
					setSumitting(false);
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
						className={clsx(
							classes.registerContainer,
							"flex self-center"
						)}>
						<div className="w-3/4 lg:w-2/4 md:w-2/4 sm:w-3/4 xl:3/4 flex flex-col items-center min-w-full sm:min-h-full justify-center">
							<LoginInfoTitle />
							<div
								className={clsx(
									classes.paper,
									"p-2 self-center w-3/4 lg:w-2/4 md:3/4 sm:w-3/4 xl:3/4"
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
										autoFocus
										onChange={handleChange}
										onBlur={handleBlur}
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
										autoComplete="current-password"
									/>
									<ErrorMessage
										name="password"
										component="div"
									/>
									<TextField
										variant="outlined"
										margin="normal"
										fullWidth
										required
										onChange={handleChange}
										onBlur={handleBlur}
										id="password_confirm"
										name="password_confirm"
										label="Confirm Password"
										type="password"
										autoComplete="current-password"
									/>
									<ErrorMessage
										name="password_confirm"
										component="div"
									/>
									<Grid container className="mt-2">
										<Grid item xs={1}>
											<Checkbox
												value="agree"
												id="agree"
												color="primary"
												onChange={handleChange}
												onBlur={handleBlur}
											/>
										</Grid>
										<Grid item xs={11}>
											<Typography
												paragraph
												className="text-sm text-gray-700">
												When the user ticks, consent is
												represented{" "}
												<RouterLink
													to="/privacy"
													className="text-sm text-blue-400">
													React Material Admin Mail
													Terms of Service and Resume
													Privacy Policy
												</RouterLink>
											</Typography>
										</Grid>
									</Grid>
									<Button
										type="submit"
										fullWidth
										size="large"
										variant="outlined"
										color="primary"
										disabled={isSubmitting}
										className={classes.submit}>
										Sign up
									</Button>
									<Grid container className="mt-2">
										<Grid item xs>
											<RouterLink
												to="/login"
												variant="body2"
												className="text-sm text-blue-400">
												{
													"Already have an account? Go sign in"
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

RegisterPage.propTypes = {};

export default withStyles(styles)(RegisterPage);
