import propTypes from "prop-types";
function List(props) {
  const category = props.category;
  const itemList = props.items;
  //   const abjad = [
  //     { name: "a", urut: 1, cal: "a" },
  //     { name: "b", urut: 2, cal: "bb" },
  //     { name: "c", urut: 3, cal: "ccc" },
  //     { name: "d", urut: 4, cal: "dddd" },
  //   ];
  //   abjad.sort((a,b)=> a.name.localeCompare(b.name)) //alphabetical
  //   abjad.sort((a, b) => b.name.localeCompare(a.name)); //rev alphabetical
  //   abjad.sort((a,b) => a.urut - b.urut); //numerical
  //   abjad.sort((a,b) => b.urut - a.urut); //rev numerical

  //   const firstUrut = abjad.filter(abjad=>abjad.urut < 2)
  //   const latestUrut = abjad.filter(abjad=>abjad.urut > 2)
  const listItems = itemList.map((abjad) => (
    <li key={abjad.urut}>
      {abjad.name}: &nbsp; {abjad.cal}
    </li>
  ));
  return (
    <>
      {" "}
      <h3 className="list-cat">{category}</h3>{" "}
      <ol className="list-items">{listItems}</ol>
    </>
  );
}

List.propTypes = {
  category: propTypes.string,
  items: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string,
      urut: propTypes.number,
      cal: propTypes.string,
    })
  ),
};

List.defaultProps = {
  category: "Category",
  items: [],
};
export default List;
