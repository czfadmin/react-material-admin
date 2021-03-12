import React from "react";
import { Hidden } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const styles = (theme) => ({
	root: {
		display: "flex",
		alignItems: "center",
		width: "auto",
		// backdropFilter: "blur(8px)",
		// backgroundColor: "rgba(255, 255, 255, 0.72)",
	},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1,
		backdropFilter: "blur(8px)",
		backgroundColor: "rgba(255, 255, 255, 0.72)",
	},
	iconButton: {
		padding: 8,
	},
});

function Searchbar(props) {
	const { classes } = props;

	return (
		<Hidden xsDown>
			<div component="form" className={classes.root}>
				<InputBase
					className={classes.input}
					placeholder="Search"
					inputProps={{ "aria-label": "search bar" }}
				/>
				<IconButton
					type="submit"
					className={classes.iconButton}
					aria-label="search">
					<SearchIcon />
				</IconButton>
			</div>
		</Hidden>
	);
}

export default withStyles(styles)(Searchbar);
