import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="bg-gray-800 text-gray-100 w-64 rounded-lg overflow-hidden shadow-lg ml-4 mt-4 mb-4" style={{ height: "calc(100vh - 2rem)" }}>
      <div className="p-5">
        <h2 className="text-2xl font-semibold mb-4">Menu</h2>
        <hr className="border-gray-700 my-4" />
        <ul>
          <li>
            <Link href="/">
              <div className="block py-2 px-4 hover:bg-gray-700 cursor-pointer rounded-md">Dashboard</div>
            </Link>
          </li>
          <li>
            <Link href="/signin">
              <div className="block py-2 px-4 hover:bg-gray-700 cursor-pointer rounded-md">signin</div>
            </Link>
          </li>
          <li>
            <Link href="/users">
              <div className="block py-2 px-4 hover:bg-gray-700 cursor-pointer rounded-md">Users</div>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
