import React, { useState } from "react";
import { Grid } from "@material-ui/core";

import ProductInfoCard from "./ProductInfoCard";
export default function ProductCallary() {
	const [callaryState] = useState([
		{
			id: 0,
			title: "Nike Air Force 1 NDESTRUKT",
			photo: "",
			price: "57",
			image: "",
			rating: 4.5,
			url: "",
			desc: "product desc",
		},
		{
			id: 1,
			title: "Nike Air Force 1 NDESTRUKT",
			photo: "",
			price: "50",
			image: "",
			rating: 4,
			url: "",
			desc: "product desc",
		},
		{
			id: 2,
			title: "Nike Air Force 1 NDESTRUKT",
			photo: "",
			price: "52",
			image: "",
			rating: 3.1,
			url: "",
			desc: "product desc",
		},
		{
			id: 3,
			title: "Nike Air Force 1 NDESTRUKT",
			photo: "",
			price: "37",
			image: "",
			rating: 5,
			url: "",
			desc: "product desc",
		},
		{
			id: 4,
			title: "Nike Air Force 1 NDESTRUKT",
			photo: "",
			price: "27",
			image: "",
			rating: 2,
			url: "",
			desc: "product desc",
		},
		{
			id: 5,
			title: "Nike Air Force 1 NDESTRUKT",
			photo: "",
			price: "17",
			image: "",
			rating: 3,
			url: "",
			desc: "product desc",
		},
		{
			id: 6,
			title: "Nike Air Force 1 NDESTRUKT",
			photo: "",
			price: "54",
			image: "",
			rating: 2.5,
			url: "",
			desc: "product desc",
		},
		{
			id: 7,
			title: "Nike Air Force 1 NDESTRUKT",
			photo: "",
			price: "53",
			image: "",
			rating: 0.5,
			url: "",
			desc: "product desc",
		},
		{
			id: 8,
			title: "Nike Air Force 1 NDESTRUKT",
			photo: "",
			price: "52",
			image: "",
			rating: 1.5,
			url: "",
			desc: "product desc",
		},
		{
			id: 9,
			title: "Nike Air Force 1 NDESTRUKT",
			photo: "",
			price: "51",
			image: "",
			rating: 4.5,
			url: "",
			desc: "product desc",
		},
		{
			id: 10,
			title: "Nike Air Force 1 NDESTRUKT",
			photo: "",
			price: "10",
			image: "",
			rating: 0.5,
			url: "",
			desc: "product desc",
		},
	]);
	return (
		<>
			{callaryState.map((item) => (
				<Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={item.id}>
					<ProductInfoCard data={item} />
				</Grid>
			))}
		</>
	);
}
