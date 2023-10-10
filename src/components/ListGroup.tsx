function ListGroup() {
  let items = [
    "New York",
    "Karachi",
    "San Francisco",
    "Tokyo",
    "London",
    "Paris",
  ];
  //   items = [];

  // Event Handler
  const HandleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>My List</h1>
      {items.length === 0 && <p>No Item Found!</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={HandleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
