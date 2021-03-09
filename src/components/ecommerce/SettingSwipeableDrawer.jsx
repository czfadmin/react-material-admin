import {
	withStyles,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Divider,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

import StyledSwipeableDrawer from "../common/StyledSwipeableDrawer";
import { toggleSwipeableDrawer } from "../../features/drawer/drawerSlice";
const SettingSwipeableDrawer = withStyles((theme) => ({
	root: {},
	contentContainer: {
		backgroundColor: "#e8eaece3",
	},
}))((props) => {
	const { classes } = props;
	const anchor = useSelector((state) => state.drawer.anchor);
	const isOpen = useSelector((state) => state.drawer.open);
	const dispatch = useDispatch();
	const toggleDrawer = (open) => (event) => {
		if (
			event &&
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}
		dispatch(toggleSwipeableDrawer());
	};
	return (
		<StyledSwipeableDrawer
			anchor={anchor}
			open={isOpen}
			onClose={toggleDrawer(false)}
			onOpen={toggleDrawer(true)}>
			<div
				className={clsx(
					classes.contentContainer,
					"flex flex-col items-center border rounded-lg justify-center self-center",
				)}>
				<List>
					{["Inbox", "Starred", "Send email", "Drafts"].map(
						(text, index) => (
							<ListItem button key={text}>
								<ListItemIcon>
									{index % 2 === 0 ? (
										<InboxIcon />
									) : (
										<MailIcon />
									)}
								</ListItemIcon>
								<ListItemText primary={text} />
							</ListItem>
						),
					)}
				</List>
				<Divider />
				<List>
					{["Inbox", "Starred", "Send email", "Drafts"].map(
						(text, index) => (
							<ListItem button key={text}>
								<ListItemIcon>
									{index % 2 === 0 ? (
										<InboxIcon />
									) : (
										<MailIcon />
									)}
								</ListItemIcon>
								<ListItemText primary={text} />
							</ListItem>
						),
					)}
				</List>
			</div>
		</StyledSwipeableDrawer>
	);
});

export default SettingSwipeableDrawer;
