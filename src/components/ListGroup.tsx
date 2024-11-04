function ListGroup() {
  return (
    <div className="w-full text-sm font-medium text-gray-900 bg-card border border-gray-200 ">
     
      <a
        href="#"
        aria-current="true"
        className="block w-full px-4 py-2 text-cta font-bold bg-card_secondary border-b border-gray-200 cursor-pointer"
      >
        First Element
      </a>
      <a
        href="#"
        className="block w-full px-4 py-2 border-b text-text border-gray-200 cursor-pointer hover:bg-card_secondary hover:font-bold hover:text-cta focus:outline-none focus:ring-2 focus:ring-cta focus:text-cta"
      >
        Second Element
      </a>
      <a
        href="#"
        className="block w-full px-4 py-2 border-b text-text border-gray-200 cursor-pointer hover:bg-card_secondary hover:font-bold hover:text-cta focus:outline-none focus:ring-2 focus:ring-cta focus:text-cta"
      >
        Third Element
      </a>
      <a
        href="#"
        className="block w-full px-4 py-2 cursor-pointer text-text hover:bg-card_secondary hover:text-cta hover:font-bold focus:outline-none focus:ring-2 focus:ring-cta focus:text-cta"
      >
        Fourth Element
      </a>
    </div>
  );
}

export default ListGroup;
