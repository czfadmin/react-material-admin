import {
	withStyles,
	Card,
	CardContent,
	Typography,
	Grid,
	Chip,
	Hidden,
} from "@material-ui/core";
import clsx from "clsx";
import { useEffect, useState } from "react";
import Comment from "../../components/common/Comment";
import loginSvg from "../../illustration_login.svg";
import logo from "../../logo.svg";
const styles = (theme) => ({
	root: {
		// width: "100vw",
	},
	chip: {
		margin: "0.45rem",
	},
});
const ProductInfoPage = (props) => {
	const { classes } = props;
	const [data, setData] = useState({
		id: 1,
		title: "Nike Shop",
		desc: "Good Good Good",
		price: 57,
		rating: 3,
		image: [loginSvg],
		volume: 100,
		comments: [
			{
				id: 1,
				label: "good",
				user: {
					username: "Tom",
					avatar: logo,
				},
				content: "这双鞋子很不错,值得购买",
				rating: 4,
			},
			{
				id: 2,
				label: "good",
				user: {
					username: "Tom",
					avatar: logo,
				},
				content: "这双鞋子很不错,值得购买",
				rating: 4,
			},
			{
				id: 3,
				label: "bad",
				user: {
					username: "Tom",
					avatar: logo,
				},
				content: "这双鞋子很不错,值得购买",
				rating: 4,
			},
			{
				id: 4,
				label: "bad",
				user: {
					username: "Tom",
					avatar: logo,
				},
				content: "这双鞋子很不错,值得购买",
				rating: 1,
			},
			{
				id: 5,
				label: "good",
				user: {
					username: "Tom",
					avatar: logo,
				},
				content: "这双鞋子很不错,值得购买",
				rating: 2,
			},
		],
	});
	const labels = [];
	data.comments.map((it) => {
		if (labels.indexOf(it.label) !== -1) {
			return;
		}
		labels.push(it.label);
	});
	return (
		<Grid
			className={clsx(
				classes.root,
				"flex flex-row items-center justify-around min-w-full  bg-gray-200"
			)}>
			<Grid
				item
				className=" flex flex-col items-stretch"
				xs={12}
				sm={12}
				md={8}
				lg={8}
				xs={8}>
				<div
					className={clsx(
						classes.imageContainer,
						"flex flex-row min-w-full border rounded-lg border-gray-300 m-2"
					)}>
					{/* 轮播 */}
					<Grid container>
						<Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
							<img
								src={data.image}
								alt={data.title}
								className="border rounded-md border-gray-300"
							/>
						</Grid>
						<Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
							<div className="container flex flex-col items-start mt-2 mx-2">
								<CardContent>
									<Typography variant="h6" component="h6">
										{data.title}
									</Typography>
									<Typography variant="subtitle2">
										{data.desc}
									</Typography>
									<div className="flex flex-row">
										<Typography
											component="p"
											variant="body2">
											{data.price}
										</Typography>
									</div>
								</CardContent>
							</div>
						</Grid>
					</Grid>
				</div>
				<div item className={clsx(classes.commentContainer, "m-2")}>
					<div className={clsx(classes.labelContainer, "m-2")}>
						{labels.map((it, index) => (
							<Chip
								className={clsx(classes.chip, "mx-2")}
								label={it}
								clickable
								size="medium"
								key={index}
								color={it === "good" ? "primary" : "secondary"}
							/>
						))}
					</div>
					{data.comments.map((item) => (
						<Comment data={item} key={item.id} />
					))}
				</div>
			</Grid>

			<Hidden smDown>
				<Grid item xs={12} sm={12} md={4} lg={4} xs={4}></Grid>
			</Hidden>
		</Grid>
	);
};
export default withStyles(styles)(ProductInfoPage);
