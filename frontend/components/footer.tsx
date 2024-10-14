export default function Footer() {
  return (
    <footer className="flex justify-between bg-gray-500 p-5">
      <div className="flex items-center pr-5 text-2xl text-white/50">
        TravelNote
      </div>
      <div className="flex text-white">
        <div className="px-5">
          <h2 className="font-semibold">Travel Note</h2>
          <ul>
            <li>
              <a href="#">Main Page</a>
            </li>
            <li>
              <a href="#">Last Notes</a>
            </li>
          </ul>
        </div>
        <div className="px-5">
          <h2 className="font-semibold">Helpful links</h2>
          <ul>
            <li>
              <a href="http://www.skyscanner.net/">Skyscanner</a>
            </li>
            <li>
              <a href="#">Eightydays.Me</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
