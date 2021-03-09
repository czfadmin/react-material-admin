import { withStyles, Typography, Card, CardContent } from "@material-ui/core";
import clsx from "clsx";
import { Rating } from "@material-ui/lab";
import StyledBadge from "../common/StyledBadge";
import StyledAvatar from "../common/StyledAvatar";
import StyledAvatarGroup from "../common/StyledAvatarGroup";
import illustration from "../../illustration_login.svg";
const styles = (theme) => ({
	card: {
		backdropFilter: "blur(8px)",
		backgroundColor: "rgba(255, 255, 255, 0.72) !important",
	},
	avatarGroup: {
		"& > *": {},
	},
	cardContent: {
		marginBottom: 0,
	},
});
function ProductInfoCard(props) {
	const { classes, data } = props;
	return (
		<Card className={clsx(classes.card, "shadow-xl h-auto")}>
			<div
				className={clsx(
					classes.contentContainer,
					"flex flex-col items-stretch self-center",
				)}>
				<img
					src={illustration}
					className="bg-cover opacity-100 h-48 w-auto"
					alt={data.title}
				/>
				<CardContent className={clsx(classes.cardContent, "")}>
					<div className="flex flex-col min-w-full text-justify">
						{/* <Link> */}
						<Typography
							color="textPrimary"
							variant="subtitle1"
							className="font-bold text-md mx-0">
							{data.title}
						</Typography>

						<Typography
							color="textSecondary"
							variant="subtitle2"
							className="text-sm w-auto truncate mx-0">
							{data.desc}
						</Typography>
						{/* </Link> */}
					</div>
					<div
						className={clsx(
							classes.bottomContainer,
							"flex flex-row justify-between mt-2",
						)}>
						<div className="flex flex-col items-stretch">
							<div className="flex flex-row">
								<StyledAvatarGroup
									max={3}
									className={classes.avatarGroup}
									spacing={4}>
									<StyledBadge
										overlap="circle"
										variant="dot"
										anchorOrigin={{
											vertical: "bottom",
											horizontal: "right",
										}}>
										<StyledAvatar
											width={12}
											height={12}
											alt="Remy Sharp"
											className="bg-gray-500"
										/>
									</StyledBadge>
									<StyledBadge
										overlap="circle"
										variant="dot"
										anchorOrigin={{
											vertical: "bottom",
											horizontal: "right",
										}}>
										<StyledAvatar
											width={12}
											height={12}
											alt="Remy Sharp"
											className="bg-gray-500"
										/>
									</StyledBadge>
									<StyledBadge
										overlap="circle"
										variant="dot"
										anchorOrigin={{
											vertical: "bottom",
											horizontal: "right",
										}}>
										<StyledAvatar
											width={12}
											height={12}
											alt="Remy Sharp"
											className="bg-gray-500"
										/>
									</StyledBadge>
									<StyledBadge
										overlap="circle"
										variant="dot"
										anchorOrigin={{
											vertical: "bottom",
											horizontal: "right",
										}}>
										<StyledAvatar
											width={12}
											height={12}
											alt="Remy Sharp"
											className="bg-gray-500"
										/>
									</StyledBadge>
								</StyledAvatarGroup>
							</div>
							<Rating
								max={5}
								value={data.rating}
								readOnly
								size="small"
								precision={0.1}
								className="my-2"
							/>
						</div>

						<div className="flex flex-col items-center justify-center">
							<Typography
								color="textPrimary"
								className="text-sm text-gray-600">
								{`$${data.price}`}
							</Typography>
						</div>
					</div>
				</CardContent>
			</div>
		</Card>
	);
}

export default withStyles(styles)(ProductInfoCard);
