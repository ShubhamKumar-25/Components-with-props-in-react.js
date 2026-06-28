import UserCard from "./components/UserCard";
import "./App.css";

import rohan from "./assets/rohan.jpg";
import rahul from "./assets/rahul.jpg";
import rohit from "./assets/rohit.jpg";
import sagar from "./assets/sagar.jpg";

import Liked from "./components/Liked";

function App() {
  return (
    <div className="app">
      {/* User Cards */}
      <div className="card-container">
        <UserCard
          name="Rohan Gupta"
          desc="I am a software developer"
          img={rohan}
        />

        <UserCard
          name="Rahul Gupta"
          desc="I am preparing govt exam"
          img={rahul}
        />

        <UserCard
          name="Rohit Gupta"
          desc="Currently I am studying in 9th class"
          img={rohit}
        />

        <UserCard name="Sagar Gupta" desc="I am a School Boy" img={sagar} />
      </div>

      {/* New Components */}
      <div className="feature-section">
        <Liked />

        {/* Future */}
        {/* <Counter /> */}
        {/* <Todo /> */}
      </div>
    </div>
  );
}

export default App;
