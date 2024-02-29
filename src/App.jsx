import Header from "./header";
import Footer from "./footer";
import Food from "./Food";
import Card from "./Card";
import Button from "./Button";
import Student from "./Student";
import UserGreeting from "./UserGreeting";
import List from "./List";
import ProfilePicture from "./ProfilePicture";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import OnChange from "./OnChange";
import ColorPicker from "./ColorPicker";
import UpdateObject from "./updateObject";
import UpdateArray from "./UpdateArray";
import UpdateArrayOfObjects from "./UpdateArrayOfObjects";
// props
function App() {
  //listting in react
  // const abjad = [
  //   { name: "a", urut: 1, cal: "a" },
  //   { name: "b", urut: 2, cal: "bb" },
  //   { name: "c", urut: 3, cal: "ccc" },
  //   { name: "d", urut: 4, cal: "dddd" },
  // ];
  // const abjadb = [
  //   { name: "e", urut: 5, cal: "e" },
  //   { name: "f", urut: 4, cal: "ff" },
  //   { name: "g", urut: 7, cal: "ggg" },
  //   { name: "h", urut: 8, cal: "hhhh" },
  // ];
  return (
    <>
      {/*Props
       <Student name="Dew" age={20} isStudent={true} />
      <Student name="Joko" age={21} isStudent={false} />
      <Student name="Bagong" age={23} isStudent={true} />
      <Student name="dong"/> */}

      {/*Conditional rendering
       <UserGreeting isLoggedIn={true} username="Deweewww" />
      <UserGreeting isLoggedIn={true} /> */}
      {/* listing in react 
      {abjad.length > 0 && <List items={abjad} category="abjad" />}
      {abjadb.length > 0 && <List items={abjadb} category="abjadb" />} */}

      {/* <Button /> */}
      {/* <ProfilePicture /> */}
      {/* <MyComponent /> */}
      {/* <UpdateObject /> */}
      {/* <Counter /> */}
      {/* <OnChange /> */}
      {/* <ColorPicker /> */}
      {/* <UpdateArray /> */}
      <UpdateArrayOfObjects />
    </>
  );
}

export default App;
