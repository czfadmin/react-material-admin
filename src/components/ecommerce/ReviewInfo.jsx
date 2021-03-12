import { withStyles, Grid, Box, Paper } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import EditIcon from "@material-ui/icons/Edit";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { toggleCommentReviewEditor } from "../../features/review/reviewSlice";

import StyledButton from "../common/StyledButton";
import ReviewEditor from "./ReviewEditor";
const styles = (theme) => ({
	hidden: {
		visibility: "hidden",
	},
	gridItem: {
		marginLeft: "auto",
	},
});
function ReviewInfo(props) {
	const { classes, data } = props;
	const dispatch = useDispatch();
	return (
		<Box p={1}>
			<Grid className="flex flex-row w-full">
				<Grid item xs={12} sm={4} md={4} lg={4}>
					<Rating
						// value={data.rating}
						name="review-average-rating"
						precision={0.1}
						readOnly
					/>
				</Grid>
				{/* 统计 */}
				<Grid item xs={12} sm={5} md={5} lg={5}>
					<Rating
						// value={data.rating}
						name="review-rating"
						precision={0.1}
						readOnly
					/>
				</Grid>
				<Grid
					item
					xs={12}
					sm={3}
					md={3}
					lg={3}
					className={clsx(classes.gridItem, "justify-end text-right")}
					onClick={() => {
						dispatch(toggleCommentReviewEditor());
					}}>
					<StyledButton size="medium" startIcon={<EditIcon />}>
						Write your reviews!
					</StyledButton>
				</Grid>
			</Grid>
			<ReviewEditor />
		</Box>
	);
}
export default withStyles(styles)(ReviewInfo);
