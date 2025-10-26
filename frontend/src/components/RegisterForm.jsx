import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { API } from "../api";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/register", formData);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-indigo-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Create Account
        </h2>

        {error && (
          <p className="text-red-500 text-center text-sm mb-4">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1">
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg mt-4 hover:bg-indigo-700 transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-indigo-600 hover:underline font-medium"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
