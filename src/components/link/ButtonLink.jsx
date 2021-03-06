import React from "react";

import { withStyles } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
function ButtonLink(props) {
	const {
		classes,
		label,
		icon,
		primary,
		color,
		clickable,
		variant,
		to,
	} = props;
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
			label={label}
			variant={variant ? variant : "outlined"}
			color={color ? color : "primary"}
			clickable={clickable ? clickable : true}
		/>
	);
}
ButtonLink.propTypes = {
	icon: PropTypes.element,
	label: PropTypes.string,
	color: PropTypes.string,
	primary: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
	classes: PropTypes.string,
};
export default withStyles((theme) => ({}))(ButtonLink);
