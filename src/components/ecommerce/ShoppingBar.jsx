import React from "react";
import { withStyles } from "@material-ui/core";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import FolderIcon from "@material-ui/icons/Folder";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import clsx from "clsx";

import StyledBottomNavAction from "../common/StyledBottomNavAction";
const styles = (theme) => ({
	root: {
		position: "absolute",
		bottom: 0,
		right: 0,
		margin: 0,
		padding: 0,
		overflow: "hidden",
		backdropFilter: "blur(6px)",
		backgroundColor: "#ccd7e0ad",
	},
});

// TODO:将其于router关联
function ShoppingBar(props) {
	const { classes } = props;
	const value = 1;
	const handleChange = () => {};
	return (
		<BottomNavigation
			value={value}
			onChange={handleChange}
			className={clsx(
				classes.root,
				"flex flex-row min-w-full justify-center text-center self-center items-start",
			)}>
			<StyledBottomNavAction
				label="Recents"
				value="recents"
				icon={<RestoreIcon />}
			/>
			<StyledBottomNavAction
				label="Favorites"
				value="favorites"
				icon={<FavoriteIcon />}
			/>
			<StyledBottomNavAction
				label="Nearby"
				value="nearby"
				icon={<LocationOnIcon />}
			/>
			<StyledBottomNavAction
				label="Folder"
				value="folder"
				icon={<FolderIcon />}
			/>
		</BottomNavigation>
	);
}

export default withStyles(styles)(ShoppingBar);
