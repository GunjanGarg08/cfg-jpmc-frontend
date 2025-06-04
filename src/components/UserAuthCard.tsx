"use client";

type UserAuthCardProps = {
  title: string;
  subtitle: string;
  buttonText: string;
  showName?: boolean;
  showSwitchLink?: boolean;
  switchText?: string;
  switchHref?: string;
};

export default function UserAuthCard({
  title,
  subtitle,
  buttonText,
  showName = false,
  showSwitchLink = false,
  switchText,
  switchHref,
}: UserAuthCardProps) {
  return (
    <div className="w-full max-w-sm p-8 bg-white rounded-xl shadow-lg text-center space-y-6">
      {/* Icon */}
      <div className="flex justify-center">
        <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center">
          <img src="/user.svg" alt="User Icon" className="w-8 h-8" />
        </div>
      </div>

      {/* Headings */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>

      {/* Form */}
      <form className="space-y-4 text-left">
        {showName && (
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        )}
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <div className="text-right text-xs text-indigo-500 hover:underline cursor-pointer">
          Forgot password?
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
        >
          {buttonText}
        </button>
      </form>

      {/* Divider */}
      <div className="flex items-center gap-2 text-gray-400 text-sm">
        <hr className="flex-grow border-gray-300" />
        or sign in with
        <hr className="flex-grow border-gray-300" />
      </div>

      {/* Social Buttons */}
      <div className="space-y-2">
        <button className="w-full flex items-center justify-center border py-2 rounded-md bg-white hover:bg-gray-50 text-sm font-medium text-gray-800">
          <img src="/google.svg" alt="Google" className="w-5 h-5 mr-2" />
          Continue with Google
        </button>
        <button className="w-full flex items-center justify-center border py-2 rounded-md bg-white hover:bg-gray-50 text-sm font-medium text-gray-800">
          <img src="/facebook.svg" alt="Facebook" className="w-5 h-5 mr-2" />
          Continue with Facebook
        </button>
      </div>

      {/* Switch Link */}
      {showSwitchLink && (
        <p className="text-sm text-gray-500">
          {switchText}{" "}
          <a href={switchHref} className="text-indigo-600 font-medium hover:underline">
            {buttonText === "Sign In" ? "Sign up" : "Sign in"}
          </a>
        </p>
      )}
    </div>
  );
}
