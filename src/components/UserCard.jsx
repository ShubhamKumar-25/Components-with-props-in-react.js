import "./UserCard.css";

const UserCard = ({ name, desc, img }) => {
  return (
    <div className="user-container">
      <p className="user-name">{name}</p>

      <img className="user-img" src={img} alt={name} />

      <p className="user-desc">{desc}</p>
    </div>
  );
};

export default UserCard;
