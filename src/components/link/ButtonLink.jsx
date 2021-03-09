import React from "react";
import clsx from "clsx";
import { Button, withStyles } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
function ButtonLink(props) {
	const { classes, icon, color, variant, title, to, className } = props;
	const routerLink = React.useMemo(
		() =>
			React.forwardRef((itemProps, ref) => (
				<RouterLink to={to} {...itemProps} ref={ref} />
			)),
		[to],
	);
	return (
		<Button
			component={routerLink}
			className={clsx(classes.button, `${className}`)}
			color={color}
			variant={variant ? variant : "outlined"}
			startIcon={icon ? icon : null}>
			{title}
		</Button>
	);
}
ButtonLink.propTypes = {
	icon: PropTypes.element,
	label: PropTypes.string,
	color: PropTypes.string,
	to: PropTypes.string.isRequired,
};
export default withStyles((theme) => ({
	link: {},
	button: {
		"&:focus": {
			// border: 0,
		},
	},
}))(ButtonLink);
