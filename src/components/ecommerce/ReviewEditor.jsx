import {
	withStyles,
	Grid,
	Typography,
	TextField,
	Box,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { useSelector, useDispatch } from "react-redux";
import clsx from "clsx";
import { toggleCommentReviewEditor } from "../../features/review/reviewSlice";
import StyledButton from "../common/StyledButton";
const styles = (theme) => ({
	styledButton: {
		padding: ".25rem",
		margin: ".25rem .25rem",
	},
	grid: {
		marginTop: ".25rem",
	},
	papper: {},
	hidden: {
		visibility: "hidden",
		height: "0",
		padding: 0,
		margin: 0,
	},
});
function ReviewEditor(props) {
	const { classes } = props;
	const dispatch = useDispatch();
	return (
		<Box
			className={clsx(
				classes.papper,
				"rounded-lg w-full bg-gray-100 mt-4 p-2 border",
				{
					[classes.hidden]: !useSelector(
						(state) => state.review.commentReviewIsOpen,
					),
				},
			)}>
			<Typography component="h6" variant="h6">
				Add your review
			</Typography>
			<Grid container className={clsx(classes.grid, "m-2")} spacing={2}>
				<Grid item xs={12} sm={3} md={3} lg={3}>
					<Typography
						component="p"
						variant="body1"
						className="text-left">
						Rating
					</Typography>
				</Grid>
				<Grid item xs={12} sm={9} md={9} lg={9}>
					<Rating
						precision={0.1}
						name="new-rating"
						max={5}
						size="medium"
					/>
				</Grid>
			</Grid>
			<TextField
				variant="outlined"
				margin="normal"
				fullWidth
				required
				name="content"
				label="content"
				autoFocus
				rows={4}
				multiline
			/>

			<div className="flex flex-row items-center justify-end ml-auto min-w-full pr-4">
				<StyledButton
					variant="outlined"
					color="primary"
					className={clsx(classes.styledButton, "my-2 p-1")}>
					Submit
				</StyledButton>
				<StyledButton
					variant="outlined"
					color="secondary"
					className={clsx(classes.styledButton, "my-2 p-1")}
					onClick={() => {
						dispatch(toggleCommentReviewEditor());
					}}>
					Cancel
				</StyledButton>
			</div>
		</Box>
	);
}
export default withStyles(styles)(ReviewEditor);
