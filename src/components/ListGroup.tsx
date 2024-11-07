// {items: [], heading: string}
// Interface is for the input or argument passed to a componen
interface Props {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void;
}

import { MouseEvent, useState } from "react";

function ListGroup({ items, heading, onSelectItem }: Props) {

  // hook: for a component with data that can change over time, exemple :
  // useState is for the internal data managed by a component or data that can change over time
  const arr = useState(-1);
  // It return :
  arr[0]; // variable (selected index)
  arr[1]; // updater function

  // Event Handler : we have to type the event, it return the dom
  const handleClick = (event: MouseEvent) => console.log(event);

  // variable and function
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1 className="mx-4 my-2 font-bold">{heading}</h1>

      {/*CONDITIONAL RENDERING : I DONT KNOW TOTAL NOSENSE FOR ME => (TRUE && 'hello') return 'hello' ??? */}
      {items.length === 0 && <p>No item found</p>}

      <div className="w-full text-sm font-medium text-gray-900 bg-card border border-gray-200 ">
        {/* RENDERING A LIST : LIKE A FOREACH */}
        {items.map((item, index) => (
          <a
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            aria-current={selectedIndex === index && "true"}
            href="#"
            className={`block w-full px-4 py-2 border-b text-text border-gray-200 cursor-pointer hover:bg-card_secondary hover:font-bold hover:text-cta focus:outline-none focus:ring-2 focus:ring-cta focus:text-cta ${
              selectedIndex === index && "selected"
            }`}
          >
            {item}
          </a>
        ))}
      </div>
    </>
  );
}

export default ListGroup;
