import React, { useState } from "react";
import { withStyles, Tabs, Tab } from "@material-ui/core";
import clsx from "clsx";
import TabPanel from "../../components/common/TabPanel";
import Comment from "../../components/common/Comment";
import ProductMaterialIntro from "../../components/ecommerce/ProductMaterialIntro";
import ReviewInfo from "../../components/ecommerce/ReviewInfo";
function a11yProps(index) {
	return {
		id: `full-width-tab-${index}`,
		"aria-controls": `full-width-tabpanel-${index}`,
	};
}
const styles = (theme) => ({
	papper: {},
	tabs: {
		"$ > button:focus": {
			outline: 0,
		},
	},
});
function ProductDescReviewInfo(props) {
	const { classes, materials, comments } = props;
	const [tabPageValue, setTabPageValue] = useState(0);
	const handleTabChange = (event, newValue) => {
		setTabPageValue(newValue);
	};
	return (
		<div
			className={clsx(
				classes.paper,
				" min-w-full h-auto mt-16 bg-gray-50 rounded-md shadow-lg"
			)}>
			<Tabs
				value={tabPageValue}
				onChange={handleTabChange}
				indicatorColor="primary"
				textColor="primary"
				className={classes.tabs}
				aria-label="Description and Reviews Tab Page">
				<Tab label="Descriptions" {...a11yProps(0)} />
				<Tab label="Review" {...a11yProps(1)} />
			</Tabs>
			<TabPanel index={0} value={tabPageValue}>
				<ProductMaterialIntro
					specification={materials.specification}
					materials={materials.materials}
				/>
			</TabPanel>
			<TabPanel index={1} value={tabPageValue}>
				<ReviewInfo />
				{comments.map((it) => (
					<Comment data={it} key={it.id} />
				))}
			</TabPanel>
		</div>
	);
}

export default withStyles(styles)(ProductDescReviewInfo);
