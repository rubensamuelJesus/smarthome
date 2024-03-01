import DataTable from '@/components/DataTable';
import Sidebar from '@/components/Sidebar';

const Users = () => {
  const filters = {
   // role: 'admin',
    //status: 'active'
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col justify-between p-6 w-full">
        <h1 className="text-3xl font-semibold mb-6">Users Data Table</h1>
        <div className="flex-grow">
          <DataTable endpoint="/users/api" filters={filters} />
        </div>
      </div>
    </div>
  );
};

export default Users;