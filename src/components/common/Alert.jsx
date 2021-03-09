import MuiAlert from "@material-ui/lab/Alert";
export default function Alert(props) {
	return (
		<MuiAlert
			elevation={6}
			variant="filled"
			{...props}
			// className="w-24 sm:w-16 xs:w-16"
		/>
	);
}
