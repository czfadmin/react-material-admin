import React, { useState } from "react";

import { Chip, withStyles } from "@material-ui/core";
import clsx from "clsx";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Facebook as FacebookIcon } from "@material-ui/icons";
const styles = (theme) => ({
	chip: {
		margin: ".25rem",
	},
});
function SocialLogin(props) {
	const { classes } = props;
	const [socialItems, setSocialItems] = useState([
		{
			id: 0,
			title: "Twitter",
			icon: <TwitterIcon />,
			url: "",
			primary: "primary",
			color: "secondary",
		},
		{
			id: 1,
			title: "Github",
			icon: <GitHubIcon />,
			url: "",
			primary: "primary",
			color: "primary",
		},
		{
			id: 2,
			title: "Facebook",
			icon: <FacebookIcon />,
			url: "",
			primary: "primary",
			color: "default",
		},
	]);
	return (
		<div className="flex flex-row items-start min-w-full justify-center">
			{socialItems.map((item) => (
				// <ChipLink
				// 	key={item.id}
				// 	label={item.title}
				// 	primary={item.primary}
				// 	icon={item.icon}
				// 	to={item.url}
				// />
				<Chip
					className={clsx(classes.chip, "ml-2 mr-2 p-2")}
					label={item.title}
					clickable
					icon={item.icon}
					key={item.id}
					primary={item.primary}
					color={item.color}
				/>
			))}
		</div>
	);
}

export default withStyles(styles)(SocialLogin);
