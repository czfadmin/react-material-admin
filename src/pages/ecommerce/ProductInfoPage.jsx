import { withStyles, Card, CardContent, Typography } from "@material-ui/core";
import clsx from "clsx";
import { useEffect, useState } from "react";
import loginSvg from "../../illustration_login.svg";
import logo from "../../logo.svg";
const styles = (theme) => ({});
const ProductInfoPage = (props) => {
	const { classes } = props;
	const [data, setData] = useState({});
	useEffect(() => {
		setTimeout(() => {
			setData({
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
				],
			});
		}, 1000);
	}, []);
	return (
		<div className={clsx(classes.root, "flex items-center")}>
			<div className="card flex flex-row items-stretch">
				{/* 轮播 */}
				<div className={clsx(classes.imageContainer)}>
					<img src={data.image[0]} alt={data.title} />
				</div>

				<div className="container">
					<CardContent>
						<Typography variant="h6" component="h6">
							{data.title}
						</Typography>
						<Typography variant="subtitle2">{data.desc}</Typography>
					</CardContent>
				</div>
			</div>
			<div className={clsx(classes.commentContainer)}></div>
		</div>
	);
};
export default withStyles(styles)(ProductInfoPage);
