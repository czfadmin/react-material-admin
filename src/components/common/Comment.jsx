import { Avatar, TextField, Typography, withStyles } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

import StyledIconButton from "../common/StyledIconButton";
function Comment(props) {
	const { classes, data } = props;
	return (
		<div className="flex flex-row items-center text-center min-w-full mx-2 p-4 shadow-md  rounded-md border-md">
			<Avatar src={data.user.avatar} className="mx-2 " />
			<div className="flex flex-col items-stretch">
				<Typography
					component="p"
					variant="body2"
					className="mx-2 text-xs ">
					{data.content}
				</Typography>
				<Rating
					value={data.rating}
					readOnly
					precision={0.1}
					className="mx-0"
					size="small"
				/>
			</div>
			<div className="flex flex-row mx-2 items-center my-auto ml-auto">
				<StyledIconButton size="small">
					<ThumbUpIcon fontSize="small" />
				</StyledIconButton>
				<StyledIconButton size="small">
					<ThumbDownIcon fontSize="small" />
				</StyledIconButton>
			</div>
		</div>
	);
}
export default withStyles((theme) => ({}))(Comment);
