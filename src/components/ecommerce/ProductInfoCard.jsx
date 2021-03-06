import { withStyles } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
const styles = (theme) => ({

});
function ProductInfoCard(props) {
	const { classes } = props;
	return (
		<CardHeader
			avatar={
				<Avatar aria-label="">

				</Avatar>
			}
			action={
				<IconButton aria-label="">
					<MoreVertIcon />
				</IconButton>
			}
			title=""
			subheader=""

		/>
	);
}

export default withStyles(styles)(ProductInfoCard);