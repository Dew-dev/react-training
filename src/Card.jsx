import profilePicture from "./assets/react.svg";

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilePicture} alt="profile pic"></img>
      <h2 className="card-title"> Dewew</h2>
      <p className="card-text"> Learning React and still suck at it</p>
    </div>
  );
}

export default Card;
