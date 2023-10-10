import { useState } from "react";

function ListGroup() {
  let items = [
    "New York",
    "Karachi",
    "San Francisco",
    "Tokyo",
    "London",
    "Paris",
  ];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Event Handler
  const HandleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>My List</h1>
      {items.length === 0 && <p>No Item Found!</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
