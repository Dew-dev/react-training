//handle click event

function ProfilePicture() {
  const imageUrl = "./src/assets/ss.png";

  const handleClick = (e) => (e.target.style.display = "none");

  return <img onClick={(e) => handleClick(e)} src={imageUrl}></img>;
}

export default ProfilePicture;
