import { Container, withStyles, Grid } from "@material-ui/core";

import clsx from "clsx";
import ProductCallary from "../../components/ecommerce/ProductCallary";
import ShoppingBar from "../../components/ecommerce/ShoppingBar";
import StyledPagination from "../../components/common/StyledPagination";
const styles = (theme) => ({
	root: {},
	pagination: {
		"&> *": {
			outline: 0,
			border: 0,
		},
	},
});
function ECommercePage(props) {
	const { classes } = props;
	return (
		<>
			<Container
				component="main"
				maxWidth={false}
				className="flex flex-center items-center min-h-full mb-11">
				<div
					className={clsx(
						classes.root,
						"flex flex-col items-center mx-2",
					)}>
					<Grid container spacing={3}>
						<ProductCallary />
					</Grid>
					<StyledPagination
						count={10}
						color="primary"
						size="medium"
						className={clsx(classes.pagination, "my-2")}
					/>
				</div>
			</Container>
			<ShoppingBar />
		</>
	);
}
export default withStyles(styles)(ECommercePage);
