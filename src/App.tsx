import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = [
    "New York",
    "Karachi",
    "San Francisco",
    "Tokyo",
    "London",
    "Paris",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />

      <Alert>
        <span>Hello World!</span>
      </Alert>

      <Button text="Click Me!" />
    </div>
  );
}

export default App;
