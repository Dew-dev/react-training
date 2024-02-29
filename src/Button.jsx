function Button(props) {
  const styles = {
    backgroundColor: "hsl(200, 100%, 50%)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };
  // let count = 0;
  // const handleClick = (name) => {
  //   if (count < 3) {
  //     count++;
  //     console.log(`${name} you clicked me ${count} times`);
  //   } else {
  //     console.log(`now stop ${name}`);
  //   }
  // };

  // const handleClick2 = (name) => console.log(`${name} please`);
  // return (
  //   <button onClick={() => handleClick("dew")} style={styles}>
  //     Click me
  //   </button>
  // );

  // const handleClick = (e) => (e.target.textContent = "OUCH!!");

  return (
    <button onClick={props.item} style={styles}>
      Click me
    </button>
  );
}

export default Button;
