import { Typography, withStyles, Box } from "@material-ui/core";
const styles = (theme) => ({});
function ProductMaterialIntro(props) {
	const { classes, specification, materials } = props;
	return (
		<div className="flex flex-col">
			<Box marginBottom={1}>
				<Typography
					variant="h5"
					component="div"
					className="font-medium">
					Specification
				</Typography>
				<Typography variant="body2" className="text-gray-600">
					{specification}
				</Typography>
			</Box>
			<Box marginBottom={1}>
				<Typography variant="h6" className="mt-2 font-medium">
					Materials And Other
				</Typography>
				<Typography variant="body2" className="text-gray-600">
					{materials}
				</Typography>
			</Box>
		</div>
	);
}
export default withStyles(styles)(ProductMaterialIntro);
