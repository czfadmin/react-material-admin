import { Grid, withStyles } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import StyledIconButton from "./StyledIconButton";
const styles = (theme) => ({
	root: {},
});
function SocialShare(props) {
	const { classes } = props;
	// TODO: Social Share
	return (
		<div className="flex flex-row justify-around items-center mx-2 my-2">
			<StyledIconButton color="primary">
				<FacebookIcon fontSize="large" />
			</StyledIconButton>
			<StyledIconButton color="primary">
				<TwitterIcon fontSize="large" />
			</StyledIconButton>
			<StyledIconButton color="secondary">
				<InstagramIcon fontSize="large" />
			</StyledIconButton>
			<StyledIconButton color="primary">
				<LinkedInIcon fontSize="large" />
			</StyledIconButton>
		</div>
	);
}
export default withStyles(styles)(SocialShare);
