import { useState } from "react";
import { ThumbsUp } from "lucide-react";

function likeButton() {
	const [likes, setLikes] = useState(Math.floor(Math.random() * 100));
	const [liked, setLiked] = useState(false);

	const handleClick = () => {
		setLiked(!liked);
		setLikes(liked ? likes - 1 : likes + 1);
	};

	return (
			<button onClick={handleClick} className="like_button white">
				<ThumbsUp size={20} color={liked ? "gray" : "white"} />
				<p>{likes}</p>
			</button>
	);
}

export default likeButton;