import { useEffect } from "react";
import ListGroup from "./components/ListGroup";
import ThemeSwitch from "./components/ThemeSwitch";
import Alert from "./components/Alert";

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

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <header>
        <ThemeSwitch />
        <nav className="">
          <ListGroup
            items={items}
            heading="Cities"
            onSelectItem={handleSelectItem}
          />
        </nav>
      </header>
      <div>
        <Alert>
          <span>Hello World</span>
        </Alert>
      </div>
    </>
  );
}

export default App;
