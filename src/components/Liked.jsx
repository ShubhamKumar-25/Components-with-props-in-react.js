import React, { useState } from "react";

const Liked = () => {
  const [like, setLike] = useState("false");

  return (
    <div className="Container">
      <h2 id="head">{like ? "❤️ Like" : "🤍 dislike"}</h2>

      <button onClick={() => setLike(!like)}>click</button>
    </div>
  );
};

export default Liked;
