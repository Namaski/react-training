import { useEffect, useState } from "react";
import ListGroup from "./components/ListGroup";
import ThemeSwitch from "./components/ThemeSwitch";
import Alert from "./components/Alert";
import MyButton from "./components/MyButton";
import MyCloseAlert from "./components/MyCloseAlert";

function App() {
  let items = ["New York", "San Fransisco", "Tokyo", "London", "Paris"];
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [alertVisible, setAlertVisible] = useState(false);

  const handleSelectItem = (item: string) => {
    console.log(item);
    setSelectedItem(item);
  };

  const handleClickButton = () => {
    setAlertVisible(true);
  };

  const handleCloseAlert = () => {
    setAlertVisible(false);
  };

  return (
    <>
      <div className="wrapper">
        <header>
          <ThemeSwitch />
          <nav>
            <ListGroup
              items={items}
              heading="Cities"
              onSelectItem={handleSelectItem}
            />
          </nav>
        </header>
        <div>
          <Alert className="mt-5">
            <span>Hello World</span>
          </Alert>
        </div>
        <MyButton
          text="Click me !"
          className="mt-5"
          onClickButton={handleClickButton}
        />

        {alertVisible && (
          <MyCloseAlert onClose={handleCloseAlert}>New alert !</MyCloseAlert>
        )}
      </div>
    </>
  );
}

export default App;
