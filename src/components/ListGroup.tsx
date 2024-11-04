function ListGroup() {
  return (
    <div className="w-full text-sm font-medium text-gray-900 bg-card border border-gray-200 ">
      <div className="flex justify-end w-full px-4 py-2 text-text bg-background border-b border-gray-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="black"
          className="text-white"
        >
          <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z" />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="white"
          className="text-white"
        >
          <path d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Z" />
        </svg>
      </div>

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
