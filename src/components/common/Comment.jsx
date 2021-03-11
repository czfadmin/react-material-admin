import { Avatar, Box, Typography, withStyles } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

import StyledIconButton from "../common/StyledIconButton";
function Comment(props) {
	const { classes, data } = props;
	return (
		<div className="flex flex-row items-center text-center p-4 rounded-md border-md">
			<Avatar src={data.user.avatar} className="mx-2" />
			<Box p={2} className="flex flex-col items-start justify-start">
				<Box className="flex flex-row items-center w-auto">
					<Typography
						className="mx-2 text-md font-medium text-center"
						component="h6"
						variant="h6">
						{data.user.username}
					</Typography>
					<Typography
						className="text-sm text-center text-gray-600 mx-2"
						component="p"
						variant="subtitle2">
						{data.createTime}
					</Typography>
					<Rating
						value={data.rating}
						precision={0.1}
						readOnly
						size="small"
						className="mx-2"
					/>
				</Box>
				<Typography component="p" variant="body1" className="text-md">
					{data.content}
				</Typography>
			</Box>
			<div className="flex flex-row mx-2 items-center ml-auto">
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
