const UsersPanel = () => {
  return (
    <>
      <section className="max-w-screen-xl mx-auto p-2">
        <div className="flex justify-between items-center my-2 p-2">
          <h1 className="text-2xl font-bold text-gray-900">Users</h1>
          <button className="px-3 py-2 rounded-md bg-indigo-600 text-white shadow-sm hover:bg-indigo-500">
            Add User
          </button>
        </div>
        <div>
          <table className="min-w-full table-auto border-collapse divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="text-left px-3 py-3">Name</th>
                <th className="text-left px-3 py-3">Age</th>
                <th className="text-left px-3 py-3">Country</th>
                <th className="text-left px-3 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-3 py-3">Lindsay Walton</td>
                <td className="px-3 py-3">38</td>
                <td className="px-3 py-3">Singapore</td>
                <td className="text-right px-3 py-3">
                  <button className="px-4 py-2 rounded-md bg-gray-900 text-white shadow-sm hover:bg-gray-600">
                    View Details
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
export default UsersPanel;
