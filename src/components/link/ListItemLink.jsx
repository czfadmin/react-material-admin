import { ListItem } from "@material-ui/core";
function ListItemLink(props) {
	return <ListItem button component="a" {...props} />;
}

export default ListItemLink;
