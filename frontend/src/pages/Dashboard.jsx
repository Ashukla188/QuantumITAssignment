import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.clear(); // As soon as we logout , localStorage is cleared;
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-blue-100 flex flex-col items-center py-12 px-4">
      {/* Header */}
      <div className="w-full max-w-5xl flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-indigo-700">
          Welcome, {user?.name?.split(" ")[0] || "User"} 
        </h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200"
        >
          Logout
        </button>
      </div>

      {/* Table Card */}
      <div className="bg-white w-full max-w-5xl rounded-2xl shadow-lg p-8 border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Registered User Details
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-indigo-50 border-b border-gray-300">
                <th className="text-left px-6 py-3 text-gray-700 font-semibold text-sm uppercase tracking-wide">
                  #
                </th>
                <th className="text-left px-6 py-3 text-gray-700 font-semibold text-sm uppercase tracking-wide">
                  Name
                </th>
                <th className="text-left px-6 py-3 text-gray-700 font-semibold text-sm uppercase tracking-wide">
                  Date of Birth
                </th>
                <th className="text-left px-6 py-3 text-gray-700 font-semibold text-sm uppercase tracking-wide">
                  Email
                </th>
                <th className="text-left px-6 py-3 text-gray-700 font-semibold text-sm uppercase tracking-wide">
                  Password
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-indigo-50 transition-all duration-150">
                <td className="px-6 py-3 text-gray-600">1</td>
                <td className="px-6 py-3 font-medium text-gray-800">
                  {user?.name}
                </td>
                <td className="px-6 py-3 text-gray-600">
                  {new Date(user?.dob).toLocaleDateString()}
                </td>
                <td className="px-6 py-3 text-gray-600">{user?.email}</td>
                <td className="px-6 py-3 text-gray-600">
                  {user?.password || "••••••"}
                </td>
              </tr>

              {/* Example static data rows for design preview */}
              <tr className="hover:bg-indigo-50 transition-all duration-150">
                <td className="px-6 py-3 text-gray-600">2</td>
                <td className="px-6 py-3 font-medium text-gray-800">
                  Micheal Holtz
                </td>
                <td className="px-6 py-3 text-gray-600">17/05/1941</td>
                <td className="px-6 py-3 text-gray-600">micheal@example.com</td>
                <td className="px-6 py-3 text-gray-600">••••••</td>
              </tr>

              <tr className="hover:bg-indigo-50 transition-all duration-150">
                <td className="px-6 py-3 text-gray-600">3</td>
                <td className="px-6 py-3 font-medium text-gray-800">
                  Paula Wilson
                </td>
                <td className="px-6 py-3 text-gray-600">23/12/2002</td>
                <td className="px-6 py-3 text-gray-600">paula@mail.com</td>
                <td className="px-6 py-3 text-gray-600">••••••</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
