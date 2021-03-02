import { withStyles } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import { Link as RouterLink } from "@reach/router";
function ChipLink(props) {
	const { classes, label, icon, primary, color, clickable, to } = props;
	const routerLink = React.useMemo(() =>
		React.forwardRef(
			(itemProps, ref) => (
				<RouterLink
					to={to}
					{...itemProps}
					ref={ref}
					className="no-underline"
				/>
			),
			[to]
		)
	);
	return (
		<Chip
			component={routerLink}
			primary={primary}
			icon={icon}
			color={color ? color : "primary"}
			label={label}
			clickable={clickable ? clickable : true}
		/>
	);
}
ChipLink.propTypes = {
	icon: PropTypes.element,
	label: PropTypes.string,
	color: PropTypes.string,
	primary: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
	classes: PropTypes.string,
};
export default withStyles((theme) => ({}))(ChipLink);
