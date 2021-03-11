import { withStyles } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
const styles = (theme) => ({});
function ReviewInfo(props) {
	const { classes, data } = props;
	return (
		<Grid className="flex flex-row">
			<Grid item xs={12} sm={4} md={4} lg={4}>
				<Rating
					value={data.rating}
					name="review-rating"
					precision={0.1}
					readOnly
				/>
			</Grid>
			{/* 统计 */}
			<Grid item xs={12} sm={4} md={4} lg={4}>
				<Rating
					value={data.rating}
					name="review-rating"
					precision={0.1}
					readOnly
				/>
			</Grid>
			<Grid item xs={12} sm={4} md={4} lg={4}>
				<Rating
					value={data.rating}
					name="review-rating"
					precision={0.1}
					readOnly
				/>
			</Grid>
		</Grid>
	);
}
export default withStyles(styles)(ReviewInfo);
