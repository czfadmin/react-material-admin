import React from "react";
import { Typography, Link, withStyles } from "@material-ui/core";
function Copyright(props) {
	const { classes } = props;
	return (
		<Typography
			variant="body2"
			color="textSecondary"
			align="center"
			className={ classes.footer }>
			{"Copyright @" }
			<Link color="inherit" href="/">
				czfadmin
			</Link>
			{"" }
			{new Date().getFullYear() }
			{"." }
		</Typography>
	);
}

export default withStyles((theme) => ({
	footer: {
		margin: "0 auto",
	},
}))(Copyright);
