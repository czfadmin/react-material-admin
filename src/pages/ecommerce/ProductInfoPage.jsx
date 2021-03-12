import { useEffect, useState } from "react";
import {
	withStyles,
	Typography,
	Grid,
	TextField,
	Paper,
	SvgIcon,
	Tabs,
	Tab,
	Box,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import clsx from "clsx";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
// import FavoriteIcon from "@material-ui/icons/Favorite";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Comment from "../../components/common/Comment";
import StyledButton from "../../components/common/StyledButton";
import StyledIconButton from "../../components/common/StyledIconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import TabPanel from "../../components/common/TabPanel";
import loginSvg from "../../illustration_login.svg";
import logo from "../../logo.svg";
import clock from "../../svg/clock.svg";
import security from "../../svg/security.svg";
import right from "../../svg/right.svg";
import SocialShare from "../../components/common/SocialShare";
import ProductItemDesc from "../../components/ecommerce/ProductItemDesc";
import ProductMaterialIntro from "../../components/ecommerce/ProductMaterialIntro";
import ReviewInfo from "../../components/ecommerce/ReviewInfo";

const styles = (theme) => ({
	root: {},
	chip: {
		margin: "0.45rem",
	},
	divider: {
		display: "block",
		marginTop: "1rem",
		position: "relative",
		borderTop: "thin dotted rgb(145 158 171 / 69%)",
		transform: "translateY(50%)",
	},
	numericUpDown: {
		border: "thin solid rgb(145 158 171 / 69%)",
		padding: "1px",
	},
	textField: {
		border: "0 ",
		"&>div:before": {
			border: "0",
		},
		"&>div:focus": {
			border: 0,
		},
	},
	price: {
		marginLeft: "auto",
	},
	styledButton: {
		backgroundColor: "orange",
		color: "white",
		padding: "0.75rem",
		"&:disabled": {
			backgroundColor: "gray",
		},
		"&:hover": {
			backgroundColor: "#eaa018fa",
		},
	},
	styledButton2: {
		backgroundColor: "green",
		padding: "0.75rem",
		"&:focus": {
			backgroundColor: "green",
		},
		"&:disabled": {
			backgroundColor: "gray",
		},
		"&:hover": {
			backgroundColor: "#008000e0",
		},
	},
	loveButton: {
		marginLeft: "auto !important",
		marginRight: "0",
		textAlign: "right",
	},
	introductionContainer: {},
	papper: {},
	tabs: {
		"$ > button:focus": {
			outline: 0,
		},
	},
	gridItem: {
		padding: "0.5rem",
	},
});

function a11yProps(index) {
	return {
		id: `full-width-tab-${index}`,
		"aria-controls": `full-width-tabpanel-${index}`,
	};
}
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
		available: 80,
		comments: [
			{
				id: 1,
				label: "good",
				user: {
					username: "Tom",
					avatar: logo,
				},
				createTime: "2020-04-01",
				content: "Ut hic et excepturi quis veniam.",
				rating: 4,
			},
			{
				id: 2,
				label: "good",
				user: {
					username: "Tom",
					avatar: logo,
				},
				createTime: "2020-04-01",
				content:
					"Repudiandae accusamus repellendus dolor quia et dolorem distinctio qui. Nulla eaque dolor aut ipsa. Perspiciatis odio aut amet ut id atque architecto.",
				rating: 4,
			},
			{
				id: 3,
				label: "bad",
				user: {
					username: "Tom",
					avatar: logo,
				},
				createTime: "2020-04-01",
				content:
					"Adipisci quidem officiis itaque laudantium quidem voluptas esse. Officiis odio distinctio atque sunt neque doloremque officiis. Voluptas perspiciatis et et reprehenderit quia. Dolores similique ut sed sed et dolorem eos id. Unde ea veritatis",
				rating: 4,
			},
			{
				id: 4,
				label: "bad",
				user: {
					username: "Tom",
					avatar: logo,
				},
				createTime: "2020-04-01",
				content:
					"Quod id alias ipsa sed delectus corporis dolore. Dolores aut consequatur eos est architecto ullam optio. Dicta qui id placeat voluptas reprehenderit laboriosam porro. Nostrum sed amet voluptatem aut mollitia debitis distinctio id",
				rating: 1,
			},
			{
				id: 5,
				label: "good",
				user: {
					username: "Tom",
					avatar: logo,
				},
				createTime: "2020-04-01",
				content:
					"Laudantium quia quae illo illo aut recusandae nemo dolores dolor. Blanditiis sapiente rerum excepturi libero tempore officiis.",
				rating: 2,
			},
		],
		recommends: [
			{
				id: 1,
				title: "good",
				thumb: logo,
				merchants: "czfadmin",
				desc: "这双鞋子很不错,值得购买",
				rating: 4,
				price: 24,
				commentNum: 5,
			},
			{
				id: 2,
				title: "bad",
				thumb: logo,
				merchants: "czfadmin",
				desc: "这双鞋子很不错,值得购买",
				rating: 2,
				price: 24,
				commentNum: 3,
			},
			{
				id: 3,
				title: "good",
				thumb: logo,
				merchants: "czfadmin",
				desc: "这双鞋子很不错,值得购买",
				rating: 4,
				price: 24,
				commentNum: 2,
			},
			{
				id: 4,
				title: "good",
				thumb: logo,
				merchants: "czfadmin",
				desc: "这双鞋子很不错,值得购买",
				rating: 4,
				price: 24,
				commentNum: 8,
			},
			{
				id: 5,
				title: "good",
				thumb: logo,
				merchants: "czfadmin",
				desc: "这双鞋子很不错,值得购买",
				rating: 4,
				price: 24,
				commentNum: 9,
			},
			{
				id: 6,
				title: "good",
				thumb: logo,
				merchants: "czfadmin",
				desc: "这双鞋子很不错,值得购买",
				rating: 3,
				price: 34,
				commentNum: 11,
			},
		],
		descs: [
			{
				id: 0,
				title: "100% Original",
				desc:
					"100% Original Chocolate bar candy canes ice cream toffee cookie halvah.",
				icon: right,
			},
			{
				id: 1,
				title: "10 Day Replacement",
				desc: "Marshmallow biscuit donut dragée fruitcake wafer.",
				icon: clock,
			},
			{
				id: 2,
				title: "Year Warranty",
				desc: "Cotton candy gingerbread cake I love sugar sweet.",
				icon: security,
			},
		],
		materials: {
			specification: "Leather panels. Laces. Rounded toe. Rubber sole.",
			materials:
				"Shoeupper: 54% bovine leather,46% polyurethane. Lining: 65% polyester,35% cotton. Insole: 100% polyurethane. Sole: 100% thermoplastic. Fixing sole: 100% glued",
		},
	});
	const labels = [];
	const [tabPageValue, setTabPageValue] = useState(0);
	const handleTabChange = (event, newValue) => {
		setTabPageValue(newValue);
	};
	data.comments.map((it) => {
		if (labels.indexOf(it.label) !== -1) {
			return;
		}
		labels.push(it.label);
	});

	return (
		<div className="flex flex-col items-center p-4 container mx-auto min-h-full">
			<Grid
				container
				className={clsx(
					classes.productInfoContainer,
					"shadow-lg bg-gray-50 rounded-md p-2 min-w-full self-center",
				)}>
				<Grid
					item
					xs={12}
					sm={12}
					md={6}
					lg={6}
					className={classes.gridItem}>
					<img
						src={data.image}
						alt={data.title}
						className="bg-cover w-auto h-auto"
					/>
				</Grid>
				<Grid
					item
					xs={12}
					sm={12}
					md={6}
					lg={6}
					className={classes.gridItem}>
					<div className="flex flex-col items-start min-w-full">
						<div className="flex flex-row items-center min-w-full">
							<div className="flex flex-col items-start">
								<Typography
									component="p"
									variant="body2"
									className="text-red-600">
									LOW STOCK
								</Typography>
								<Typography component="h5" variant="h5">
									{data.title}
								</Typography>
							</div>
							<StyledIconButton className={classes.loveButton}>
								<FavoriteBorderIcon fontSize="default" />
							</StyledIconButton>
						</div>
						<div className="flex flex-row items-center min-w-full mt-2">
							<Rating
								name="rating"
								value={data.rating}
								precision={0.1}
								size="small"
								className="mr-1"
								readOnly
							/>
							<Typography
								component="p"
								variant="body1"
								className="text-center mx-1 text-gray-600">
								(42.18k reviews)
							</Typography>
							<Typography
								component="h6"
								variant="h6"
								className={clsx(classes.price, "text-center")}>
								${data.price}
							</Typography>
						</div>
						<span className={clsx(classes.divider, "min-w-full")} />
					</div>
					<div
						className={clsx(
							classes.controlContainer,
							"flex flex-row items-start mt-1",
						)}>
						<Typography component="p" variant="body1">
							Color
						</Typography>
					</div>
					<div
						className={clsx(
							classes.controlContainer,
							"flex flex-row items-start",
						)}>
						<Typography component="p" variant="body1">
							Size
						</Typography>
					</div>
					<div
						className={clsx(
							classes.controlContainer,
							"flex flex-row items-center min-w-full",
						)}>
						<Typography component="p" variant="body1">
							Quantity
						</Typography>
						<Box className="flex flex-col  items-end text-center ml-auto">
							<div
								className={clsx(
									classes.numericUpDown,
									"flex flex-row items-center ml-auto w-32 rounded-md border-2",
								)}>
								<StyledIconButton size="small">
									<RemoveIcon />
								</StyledIconButton>
								<TextField className={classes.textField} />
								<StyledIconButton size="small">
									<AddIcon />
								</StyledIconButton>
							</div>
							<Typography
								component="p"
								variant="body1"
								className="mx-2 text-center">
								{`Available: ${data.available}`}
							</Typography>
						</Box>
					</div>
					<span
						className={clsx(classes.divider, "min-w-full my-4")}
					/>
					<Grid container className="min-w-full my-4" spacing={2}>
						<Grid item xs={12} sm={12} md={6} lg={6}>
							<StyledButton
								className={clsx(
									classes.styledButton,
									"p-1 shadow-lg",
								)}
								fullWidth
								size="medium"
								startIcon={<ShoppingCartIcon />}>
								<Typography>Add to cart</Typography>
							</StyledButton>
						</Grid>
						<Grid item xs={12} sm={12} md={6} lg={6}>
							<StyledButton
								size="medium"
								fullWidth
								color="primary"
								variant="contained"
								className={clsx(
									classes.styledButton2,
									"p-1 shadow-lg",
								)}>
								Buy Now
							</StyledButton>
						</Grid>
					</Grid>
					<div className="flex flex-row justify-center self-center my-2">
						<SocialShare />
					</div>
				</Grid>
			</Grid>
			<Grid container className="my-2 min-w-full" spacing={2}>
				{data.descs.map((item) => (
					<Grid
						item
						xs={4}
						sm={4}
						md={4}
						lg={4}
						xl={4}
						key={item.id}
						className="rounded-md">
						<ProductItemDesc data={item} />
					</Grid>
				))}
			</Grid>

			<div
				className={clsx(
					classes.paper,
					" min-w-full h-auto mt-16 bg-gray-50 rounded-md shadow-lg",
				)}>
				<Tabs
					value={tabPageValue}
					onChange={handleTabChange}
					indicatorColor="primary"
					textColor="primary"
					className={classes.tabs}
					aria-label="Description and Reviews Tab Page">
					<Tab label="Descriptions" {...a11yProps(0)} />
					<Tab label="Review" {...a11yProps(1)} />
				</Tabs>
				<TabPanel index={0} value={tabPageValue}>
					<ProductMaterialIntro
						specification={data.materials.specification}
						materials={data.materials.materials}
					/>
				</TabPanel>
				<TabPanel index={1} value={tabPageValue}>
					<ReviewInfo />
					{data.comments.map((it) => (
						<Comment data={it} key={it.id} />
					))}
				</TabPanel>
			</div>
		</div>
	);
};
export default withStyles(styles)(ProductInfoPage);
