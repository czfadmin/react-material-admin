import { Typography, withStyles } from "@material-ui/core";
import clsx from "clsx";
// import { green } from "@material-ui/core/colors";
import { ReactSVG } from "react-svg";
const styles = (theme) => ({
	root: {},
	svg: {
		borderRadius: "50%",
		width: "64px",
		height: "64px",
		backgroundColor: "rgba(0, 171, 85, 0.08)",
	},
});
function ProductItemDesc(props) {
	const { classes, data } = props;
	return (
		<div className="flex flex-col items-center mt-9 bg-gray-50 p-2 rounded-md min-h-full shadow-lg">
			<ReactSVG
				src={data.icon}
				className={clsx(
					classes.svg,
					"flex justify-center my-4 text-green-500 items-center",
				)}
			/>
			<Typography component="h6" variant="h6">
				{data.title}
			</Typography>
			<Typography
				component="p"
				variant="body1"
				className="text-gray-500 text-center w-auto my-2 text-md">
				{data.desc}
			</Typography>
		</div>
	);
}
export default withStyles(styles)(ProductItemDesc);
