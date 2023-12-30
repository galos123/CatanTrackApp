import { useState } from "react";
import "./Tile.css"; // Import your CSS file
import { TileType } from "../../Types/Types";

interface Props {
	item: TileType;
}

const Tile = (props: Props) => {
	const [isFlipped, setIsFlipped] = useState(false);
	const this_tile = props.item;

	const handleClick = () => {
		setIsFlipped(!isFlipped);
	};

	return (
		<div className="flip-image-container" onClick={handleClick}>
			<div className={`flip-image-inner ${isFlipped ? "flipped" : ""}`}>
				<img src={this_tile.image1} className="flip-image-front" alt="Image 1" />
				<img src={this_tile.image2} className="flip-image-back" alt="Image 2" />
			</div>
		</div>
	);
};

export default Tile;
