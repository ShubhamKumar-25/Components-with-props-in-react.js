import UserCard from "./components/UserCard";
import "./App.css";
import rohan from "./assets/rohan.jpg";
import rahul from "./assets/rahul.jpg";
import rohit from "./assets/rohit.jpg";
import sagar from "./assets/sagar.jpg";
function App() {
  return (
    <div className="container">
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
        desc="Currently i studing in 9th class"
        img={rohit}
      />
      <UserCard name="Sagar Gupta" desc="I am a School Boy" img={sagar} />
    </div>
  );
}

export default App;
