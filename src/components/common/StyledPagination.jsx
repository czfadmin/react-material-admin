import { withStyles } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
const StyledPagination = withStyles((theme) => ({
	root: {
		"&>ul>li>button:focus": {
			border: 0,
			outline: 0,
		},
	},
}))(Pagination);
export default StyledPagination;
