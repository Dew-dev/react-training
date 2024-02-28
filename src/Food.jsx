function Food() {
  const food1 = "Nasi Goreng";
  const food2 = "Bubur Ayam";
  return (
    <ul>
      <li>Uduk</li>
      <li>{food1}</li>
      <li>{food2.toUpperCase()}</li>
    </ul>
  );
}

export default Food;
