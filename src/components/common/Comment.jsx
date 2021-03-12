import React, { useState } from "react";

import { Avatar, Box, Typography, withStyles } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import CommentIcon from "@material-ui/icons/Comment";
import clsx from "clsx";

import StyledIconButton from "../common/StyledIconButton";
import StyledButtonWithValue from "./StyledButtonWithValue";
import CommentEditor from "../ecommerce/CommentEditor";
function Comment(props) {
	const { classes, data } = props;
	const [isCommentEditorOpen, setCommentEditorState] = useState(false);
	const toggleCommentEditor = () => {
		setCommentEditorState(!isCommentEditorOpen);
	};
	return (
		<div className="flew flex-center border-b-2 rounded-md">
			<div className="flex flex-row items-center text-center p-1">
				<Avatar
					src={data.user.avatar}
					className={clsx(classes.avatar, "mx-2")}
				/>
				<Box p={1} className="flex flex-col items-start justify-start">
					<Box className="flex flex-row items-center w-auto">
						<Typography
							className={clsx(
								"text-xs text-center text-gray-600 mx-2"
							)}
							component="h6"
							variant="h6">
							{data.user.username}
						</Typography>
						<Typography
							className={clsx(
								classes.typography,
								"text-xs text-center text-gray-500 mx-2"
							)}
							component="p"
							variant="subtitle2">
							{data.createTime}
						</Typography>
						<Rating
							value={data.rating}
							precision={0.1}
							readOnly
							size="small"
							className="mx-0"
						/>
					</Box>
					<Typography
						component="p"
						variant="body2"
						className={
							(classes.content, "text-sm text-left text-gray-700")
						}>
						{data.content}
					</Typography>
				</Box>
				<div className="flex flex-row mx-2 items-center ml-auto">
					<StyledButtonWithValue
						icon={<ThumbUpIcon fontSize="small" size="medium" />}
						value={120}
					/>
					<StyledButtonWithValue
						icon={<ThumbDownIcon fontSize="small" size="medium" />}
						value={120}
					/>
					<StyledIconButton onClick={toggleCommentEditor}>
						<CommentIcon fontSize="small" />
					</StyledIconButton>
				</div>
			</div>
			<CommentEditor isOpen={isCommentEditorOpen} />
		</div>
	);
}
export default withStyles((theme) => ({
	typography: {
		margin: "auto 0.5rem",
		textAlign: "text-center",
		fontSize: "0.9rem",
	},

	avatar: {
		borderRadius: "50%",
		width: "48px",
		height: "48px",
		backgroundColor: "rgba(0, 171, 85, 0.08)",
	},
}))(Comment);
