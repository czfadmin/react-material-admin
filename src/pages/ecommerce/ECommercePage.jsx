import { Container, withStyles, Grid } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import clsx from "clsx";
import ProductCallary from "../../components/ecommerce/ProductCallary";
import ShoppingBar from "../../components/ecommerce/ShoppingBar";

const styles = (theme) => ({
	root: {},
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
					<Pagination
						count={10}
						color="primary"
						size="small"
						className="mt-4"
					/>
				</div>
			</Container>
			<ShoppingBar />
		</>
	);
}
export default withStyles(styles)(ECommercePage);
