// import { useState } from "react";
import "./TileHolder.css"; // Import your CSS file
import Tile from "../Tile/Tile";
import { TileType } from "../../Types/Types";

interface Props {
	items: TileType[];
	backGroundImage: string;
}

const TileHolder = (props: Props) => {
	let { items, backGroundImage } = props;
	console.log(backGroundImage);
	const gridFill = Array(6).fill(null);
	// const space: TileType = { image1: "test", image2: "test" };
	// items.splice(3, 0, space);
	console.log(items);

	const backgroundStyle = {
		backgroundImage: `url("${backGroundImage}")`,
		// Add any other dynamic styles if needed
	};

	return (
		<>
			<div className={"parent"} style={backgroundStyle}>
				{gridFill.map((_, index) => {
					console.log(index);

					if (index !== 3) {
						return <Tile key={index} item={items[index]} />;
					} else {
						// return <div style={{ backgroundColor: "red" }}></div>;
						return <div></div>;
					}
				})}
			</div>
		</>
	);
};

export default TileHolder;
