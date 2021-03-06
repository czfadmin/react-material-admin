import {
	AppBar,
	Toolbar,
	withStyles,
	IconButton,
	Typography,
	Avatar,
	Menu,
	MenuItem,
	Paper,
} from "@material-ui/core";
import clsx from "clsx";
import avatar from "../../../logo.svg";
import { Menu as MenuIcon } from "@material-ui/icons";
import { useState } from "react";

const DashboardHeader = (props) => {
	const { classes } = props;
	const [anchorEl, setAnchorEl] = useState(null);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<AppBar position="fixed" color="inherit">
			<Toolbar>
				<IconButton edge="start" color="inherit" aria-label="menu">
					<MenuIcon />
				</IconButton>
				<Typography variant="h6"> React Material</Typography>
				<div className="ml-auto">
					<IconButton
						edge="end"
						color="inherit"
						onClick={handleClick}>
						<Avatar src={avatar} />
					</IconButton>
				</div>
			</Toolbar>
			<Menu
				id="user-menu"
				keepMounted
				elevation={0}
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				getContentAnchorEl={null}
				onClose={handleClose}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "center",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "center",
				}}>
				<Paper className="bg-gray-900">
					<MenuItem onClick={handleClose}>Profile</MenuItem>
					<MenuItem onClick={handleClose}>Setting</MenuItem>
					<MenuItem onClick={handleClose}>Logout</MenuItem>
				</Paper>
			</Menu>
		</AppBar>
	);
};

export default withStyles((theme) => ({
	appBar: {},
}))(DashboardHeader);
