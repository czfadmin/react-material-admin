import React from "react";
import ProductInfoCard from "./ProductInfoCard";
export default function ProductCallery() {
	const [calleryState, setCalleryState] = useState([
		{
			id: 0,
			title: "Nike Air Force 1 NDESTRUKT",
			photo: "",
			price: "57",
		},
		{
			id: 1,
			title: "Nike Air Force 1 NDESTRUKT",
			photo: "",
			price: "57",
		},
		{
			id: 2,
			title: "Nike Air Force 1 NDESTRUKT",
			photo: "",
			price: "57",
		},
		{
			id: 3,
			title: "Nike Air Force 1 NDESTRUKT",
			photo: "",
			price: "57",
		},
		{
			id: 4,
			title: "Nike Air Force 1 NDESTRUKT",
			photo: "",
			price: "57",
		},
		{
			id: 5,
			title: "Nike Air Force 1 NDESTRUKT",
			photo: "",
			price: "57",
		},
		{
			id: 6,
			title: "Nike Air Force 1 NDESTRUKT",
			photo: "",
			price: "57",
		},
		{
			id: 7,
			title: "Nike Air Force 1 NDESTRUKT",
			photo: "",
			price: "57",
		},
		{
			id: 8,
			title: "Nike Air Force 1 NDESTRUKT",
			photo: "",
			price: "57",
		},
		{
			id: 9,
			title: "Nike Air Force 1 NDESTRUKT",
			photo: "",
			price: "57",
		},
		{
			id: 10,
			title: "Nike Air Force 1 NDESTRUKT",
			photo: "",
			price: "57",
		},
	]);
	return (
		<div>
			{calleryState.map((item) => (
				<ProductInfoCard data={item} key={item.id} />
			))}
		</div>
	);
}
