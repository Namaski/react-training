import { useEffect, useState } from "react";
import ListGroup from "./components/ListGroup";
import ThemeSwitch from "./components/ThemeSwitch";
import Alert from "./components/Alert";
import MyButton from "./components/MyButton";

function App() {
  // useEffect(() => {
  //   // RESET CLASSNAME
  //   document.body.className = "";

  //   // SET THEME BY DEFAULT // REMOVE AFTER ITS JUST TO TEST THE THEME
  //   localStorage.setItem("theme", "dark");

  //   // GET THE SELECTED THEME
  //   const selectedTheme = localStorage.getItem("theme");

  //   if (selectedTheme) {
  //     // IF THERE IS A SELECTED THEME APPLY IT
  //     document.body.classList.add(selectedTheme);
  //   } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  //     // IF THERE IS NO SELECTED THEME CHECK THE SYSTEME PREFERENCE AND APPLY DARK
  //     document.body.classList.add("dark");
  //   } else {
  //     // BY DEFAULT APPLY THE LIGHT THEME
  //     document.body.classList.add("light");
  //   }
  // }, []);

  let items = ["New York", "San Fransisco", "Tokyo", "London", "Paris"];
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleSelectItem = (item: string) => {
    console.log(item);
    setSelectedItem(item);
  };

  const handleClickButton = () => {
    if (selectedItem) {
      console.log("Button clicked with selected item:", selectedItem);
    } else {
      console.log("Button clicked without selected item");
    }
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
      </div>
    </>
  );
}

export default App;
