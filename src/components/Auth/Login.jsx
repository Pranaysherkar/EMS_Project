import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    setEmail("");
    setpassword("");
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="h-1/3 w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 border-4 rounded-xl border-sky-600">
        <form
          onSubmit={(e) => submitHandler(e)}
          className="h-full w-full flex flex-col gap-5 items-center justify-center"
        >
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="outline-none bg-transparent border-4 border-sky-400 px-6 sm:px-10 md:px-14 font-medium text-lg md:text-xl py-3 sm:py-4 rounded-xl placeholder:text-gray-50"
            type="email"
            placeholder="Enter your email"
          />
          <input
            required
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className="outline-none bg-transparent border-4 border-sky-400 px-6 sm:px-10 md:px-14 font-medium text-lg md:text-xl py-3 sm:py-4 rounded-xl placeholder:text-gray-50"
            type="password"
            placeholder="Enter your password"
          />
          <button className="border-4 border-sky-600 px-6 sm:px-10 md:px-14 py-3 sm:py-4 rounded-xl text-lg md:text-xl font-medium text-gray-50 bg-sky-600">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
