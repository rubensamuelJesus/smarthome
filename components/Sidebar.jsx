import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="fixed inset-y-0 left-0 flex-wrap items-center justify-between block bg-gray-800 w-full p-0 my-4 overflow-y-auto transition-all duration-200 ease-in-out -translate-x-full border-0 shadow-xl dark:shadow-none xl:ml-6 dark:bg-slate-850 z-9999 max-w-64 rounded-2xl xl:translate-x-0 ps" id="sidenav-main" style={{ zIndex: 9999 }}>
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
