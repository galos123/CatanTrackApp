// import { useState } from "react";
import "./TileHolder.css"; // Import your CSS file
import Tile from "../Tile/Tile";

interface TileType {
	image1: string;
	image2: string;
	title: string;
	dice1?: number;
	dice2?: number;
}

interface Props {
	images: TileType[];
}

const TileHolder = (props: Props) => {
	// const [isFlipped, setIsFlipped] = useState(false);
	console.log(props.images);
	const gridFill = Array(6).fill(null);

	return (
		<>
			<div className={"parent"}>
				{gridFill.map((_, index) => {
					console.log(index);
					if (index !== 3) {
						return (
							<Tile
								key={index}
								image1="https://th.bing.com/th/id/OIG.ey_KYrwhZnirAkSgDhmg"
								image2="https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg"
							/>
						);
					} else {
						return <div style={{ backgroundColor: "red" }}></div>;
					}
				})}
			</div>
		</>
	);
};

export default TileHolder;
