import propTypes from "prop-types";
function UserGreeting(props) {
  //   if (props.isLoggedIn) {
  //     return <h2>Hello {props.username}</h2>;
  //   }

  const welcomeMessage = (
    <h2 className="welcome-message">Hello {props.username}</h2>
  );
  const loginPrompt = (
    <h2 className="welcome-prompt"> Please login to continue</h2>
  );

  return props.isLoggedIn ? welcomeMessage : loginPrompt;
}

UserGreeting.propTypes = {
  isLoggedIn: propTypes.bool,
  username: propTypes.string,
};
UserGreeting.defaultProps = {
  username: "Guest",
};
export default UserGreeting;
