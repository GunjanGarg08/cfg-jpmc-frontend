"use client";

export default function AdminAuthForm({ type }: { type: "login" | "signup" }) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
        {/* Left Card */}
        <div className="w-full md:w-1/2 p-8 sm:p-10 flex flex-col justify-center items-center bg-gray-50 text-center">
          <img
            src="/admin-illustration.svg"
            alt="Admin Illustration"
            className="w-40 h-40 mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Welcome Admin
          </h2>
          <p className="text-sm text-gray-500 max-w-xs">
            Secure access for internal admin operations. Use your credentials to
            sign in and manage the portal.
          </p>
        </div>

        {/* Right Card */}
        <div className="w-full md:w-1/2 p-8 sm:p-10 flex flex-col justify-center">
          <h2 className="text-2xl text-center font-bold text-gray-800 mb-2">
            {type === "login" ? "Admin Login" : "Admin Signup"}
          </h2>
          <p className="text-sm text-center text-gray-500 mb-6">
            {type === "login"
              ? "Access the admin panel securely"
              : "Create your admin credentials"}
          </p>

          <form className="space-y-4">
            {type === "signup" && (
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            )}
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
            >
              {type === "login" ? "Sign In" : "Sign Up"}
            </button>
          </form>

          <p className="text-sm text-center text-gray-500 mt-6">
            {type === "login"
              ? "Don't have an account?"
              : "Already have an account?"}{" "}
            <a
              href={type === "login" ? "/signup-admin" : "/login-admin"}
              className="text-indigo-600 hover:underline"
            >
              {type === "login" ? "Sign up" : "Sign in"}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}