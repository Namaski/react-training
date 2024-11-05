function ListGroup() {
  const items = ["New York", "San Fransisco", "Tokyo", "London", "Paris"];

  const message = items.length === 0 ? <p> No item found</p> : null;

  return (
    <>
      <h1 className="mx-4 my-2 font-bold">The List :</h1>

      {/*CONDITIONAL RENDERING : I DONT KNOW TOTAL NOSENSE FOR ME => (TRUE && 'hello') return 'hello' ??? */}
      {items.length === 0 && <p>No item found</p>}

      <div className="w-full text-sm font-medium text-gray-900 bg-card border border-gray-200 ">
        {/* RENDERING A LIST : LIKE A FOREACH */}
        {items.map((item) => (
          <a
            key={item}
            href="#"
            className="block w-full px-4 py-2 border-b text-text border-gray-200 cursor-pointer hover:bg-card_secondary hover:font-bold hover:text-cta focus:outline-none focus:ring-2 focus:ring-cta focus:text-cta"
          >
            {item}
          </a>
        ))}

        <a
          href="#"
          aria-current="true"
          className="block w-full px-4 py-2 text-cta font-bold bg-card_secondary border-b border-gray-200 cursor-pointer"
        >
          First Element
        </a>
      </div>
    </>
  );
}

export default ListGroup;
