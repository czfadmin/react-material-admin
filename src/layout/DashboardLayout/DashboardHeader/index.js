import { useState } from "react";
import {
	AppBar,
	Toolbar,
	withStyles,
	IconButton,
	Typography,
	Avatar,
	Menu,
	MenuItem,
	Badge,
	ListItemText,
	Hidden,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { FirebaseAuthConsumer } from "@react-firebase/auth";
import clsx from "clsx";
import firebase from "firebase/app";
import { Menu as MenuIcon } from "@material-ui/icons";
import SettingsIcon from "@material-ui/icons/Settings";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import NotificationsIcon from "@material-ui/icons/Notifications";
import StyledIconButton from "../../../components/common/StyledIconButton";
import ButtonLink from "../../../components/link/ButtonLink";
import avatar from "../../../logo.svg";
import { showSnackbar } from "../../../features/snackbar/snackbarSlice";
import { toggleSwipeableDrawer } from "../../../features/drawer/drawerSlice";
import SearchBar from "../../../components/common/Searchbar";
const StyleMenu = withStyles({
	paper: {
		background: "#eeeeee;",
	},
})((props) => (
	<Menu
		elevation={0}
		getContentAnchorEl={null}
		anchorOrigin={{
			vertical: "bottom",
			horizontal: "center",
		}}
		transformOrigin={{
			vertical: "top",
			horizontal: "center",
		}}
		{...props}
	/>
));

const StyledMenuItem = withStyles((theme) => ({
	root: {
		"&:focus": {
			backgroundColor: theme.palette.primary.light,
			"& .MuiListItemIcon-root, & .MuiListItemText-primary": {
				color: theme.palette.common.white,
			},
		},
	},
}))(MenuItem);
function DashboardHeader(props) {
	const { classes } = props;
	const [anchorEl, setAnchorEl] = useState(null);
	const dispatch = useDispatch();
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const openSettingDrawer = () => {
		dispatch(toggleSwipeableDrawer());
	};
	return (
		<AppBar
			position="fixed"
			color="inherit"
			className={clsx(classes.appbar, "")}>
			<Toolbar
				className={clsx(
					classes.toolbar,
					"flex flex-row  justify-start items-center mx-2",
				)}>
				<div className="flex items-center">
					<IconButton
						edge="start"
						color="inherit"
						aria-label="menu"
						className={clsx(classes.iconButton)}>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap>
						{" "}
						React Material Admin
					</Typography>
				</div>

				<div className="ml-auto">
					<FirebaseAuthConsumer>
						{({ isSignedIn, user, providerId }) => {
							return (
								<>
									<div className="flex flex-row items-center">
										<SearchBar />
										<StyledIconButton
											edge="end"
											color="primary"
											className="mx-5"
											onClick={openSettingDrawer}>
											<Badge
												badgeContent={6}
												color="primary">
												<SettingsIcon />
											</Badge>
										</StyledIconButton>
										{isSignedIn ? (
											<Hidden xsDown>
												<StyledIconButton
													edge="end"
													color="primary"
													className="mx-4">
													<Badge
														badgeContent={6}
														color="primary">
														<ShoppingCartIcon />
													</Badge>
												</StyledIconButton>
												<StyledIconButton
													edge="end"
													color="inherit"
													className="mx-4">
													<Badge
														badgeContent={5}
														color="primary">
														<NotificationsIcon color="primary" />
													</Badge>
												</StyledIconButton>

												<StyledIconButton
													edge="end"
													color="inherit"
													onClick={handleClick}
													className="mx-4">
													<Badge
														badgeContent={4}
														color="primary">
														<Avatar src={avatar} />
													</Badge>
												</StyledIconButton>
											</Hidden>
										) : (
											<ButtonLink
												to="/login"
												color="primary"
												title="Login"
												className={clsx(
													classes.button,
													"mx-2",
												)}
											/>
										)}
									</div>
								</>
							);
						}}
					</FirebaseAuthConsumer>
				</div>
			</Toolbar>
			<StyleMenu
				id="user-menu"
				keepMounted
				elevation={0}
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				getContentAnchorEl={null}
				onClose={handleClose}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "center",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "center",
				}}>
				<StyledMenuItem>
					<ListItemText onClick={handleClose}>Profile</ListItemText>
				</StyledMenuItem>
				<StyledMenuItem>
					<ListItemText onClick={handleClose}>Setting</ListItemText>
				</StyledMenuItem>
				<StyledMenuItem>
					<ListItemText
						onClick={() => {
							dispatch(showSnackbar("Logout Successfully"));
							firebase.auth().signOut();
							setAnchorEl(null);
						}}>
						Logout
					</ListItemText>
				</StyledMenuItem>
			</StyleMenu>
			<Hidden xsUp>
				<div className="flex flex-col items-stretch min-w-full">
					<FirebaseAuthConsumer>
						{({ isSignedIn, user, providerId }) => {
							return (
								<>
									{isSignedIn ? (
										<ButtonLink to="/login" />
									) : (
										<ButtonLink to="/about" />
									)}
								</>
							);
						}}
					</FirebaseAuthConsumer>
				</div>
			</Hidden>
		</AppBar>
	);
}

export default withStyles((theme) => ({
	appbar: {
		backdropFilter: "blur(8px)",
		backgroundColor: "rgba(255, 255, 255, 0.72)",

		// backgroundColor: "#ccd7e0ad;",
	},
	toolbar: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-stretch",
		padding: theme.spacing(0, 1),
		...theme.mixins.toolbar,
		paddingBottom: theme.spacing(0, 1),
		zIndex: theme.zIndex.drawer + 1,
	},
	button: {},
	iconButton: {
		"&:focus": {
			outline: 0,
			border: 0,
		},
	},
}))(DashboardHeader);
