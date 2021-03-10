import {
	ListItemIcon,
	ListItemText,
	Typography,
	withStyles,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import React from "react";
import ListItemLink from "../link/ListItemLink";
const styles = (theme) => ({
	root: {},
	inline: {},
});
function RecommendsProduct(props) {
	const { classes, item } = props;
	return (
		<ListItemLink alignItems="flex-start">
			<ListItemIcon>
				<img src={item.thumb} alt={item.title} className="bg-cover" />
			</ListItemIcon>
			<ListItemText
				primary={item.title}
				secondary={
					<React.Fragment>
						<Typography
							component="span"
							variant="body1"
							className={classes.inline}
							color="textPrimary">
							{item.merchants}
						</Typography>
						<span className="flex flex-row items-center">
							<Typography component="span" variant="body2">
								{item.price}
							</Typography>
							<Rating
								name="recommend-rating"
								precision={0.1}
								value={item.rating}
								max={5}
								size="small"
							/>
						</span>
					</React.Fragment>
				}
			/>
		</ListItemLink>
	);
}

export default withStyles(styles)(RecommendsProduct);
