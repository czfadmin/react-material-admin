import React from "react";
import PropTypes from "prop-types";
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core";
const styles = (theme) => ({

});
function RmaHeader(props) {
	const { classes } = props;
	return <AppBar position="fixed" color="primary">
		<Toolbar>
			<IconButton edge="start" color="inherit" aria-label="menu">
				<MenuIcon />
			</IconButton>
			<Typography variant="h6">
				React Material Admin
			</Typography>
		</Toolbar>
	</AppBar>;
}

RmaHeader.propTypes = {};

export default withStyles(styles)(RmaHeader);
