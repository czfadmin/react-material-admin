import { withStyles } from "@material-ui/core";

// const styles = (theme) => ({});
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
const styles = (theme) => ({});

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
			className="min-w-full">
			{value === index && <Box p={2}>{children}</Box>}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

export default withStyles(styles)(TabPanel);
