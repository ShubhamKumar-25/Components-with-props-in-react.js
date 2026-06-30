import { useState } from "react";
import "./Liked.css";

const Liked = () => {
  const [like, setLike] = useState(false);

  return (
    <div className="liked-container">
      <h1>This is my Like Button</h1>

      <h2>{like ? "❤️ Liked" : "🤍 Like"}</h2>

      <button className="like-btn" onClick={() => setLike(!like)}>
        Click
      </button>
    </div>
  );
};

export default Liked;
