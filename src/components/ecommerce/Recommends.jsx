import { withStyles, List, ListItem, Paper } from "@material-ui/core";
import RecommendsProduct from "./RecommendsProduct";

const styles = (theme) => ({
	paper: {},
});
function Recommends(props) {
	const { classes, recommends } = props;

	return (
		<Paper className={classes.paper}>
			<List>
				{recommends.map((item) => (
					<RecommendsProduct item={item} key={item.id} />
				))}
			</List>
		</Paper>
	);
}

export default withStyles(styles)(Recommends);
