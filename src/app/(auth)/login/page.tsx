"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function LoginPage({ searchParams }: any) {
  const { push } = useRouter();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const callbackUrl = searchParams.callbackUrl || "/";

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setError("");
    setLoading(true);
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: e.target.email.value,
        password: e.target.password.value,
        callbackUrl: callbackUrl,
      });

      if (!res?.error) {
        e.target.reset();
        setLoading(false);
        push(callbackUrl);
      } else {
        setLoading(false);
        if (res.status === 401) {
          setError("Email or Password is Incorrect");
        }
        console.log(res.error);
      }
    } catch (error) {
      setError("Email or Password is Incorrect");
      console.log(error);
    }
  };

  return (
    <div className="h-screen w-400 flex justify-center items-center flex-col">
      {error !== "" && (
        <div className="text-red-600 font-bold mb-3">{error}</div>
      )}

      <div className="bg-white shadow-md border border-gray-200 rounded-lg w-96 p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" onSubmit={(e) => handleSubmit(e)}>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Sign in to our platform
          </h3>
          <div>
            <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div className="flex items-start">
            <a
              href="#"
              className="text-sm text-blue-700 hover:underline ml-auto dark:text-blue-500"
            >
              Lost Password?
            </a>
          </div>
          <button
            disabled={loading}
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {loading ? "Loading..." : "Login to your account"}
          </button>
          <hr />
          <button
            type="button"
            onClick={() => signIn("google", { callbackUrl, redirect: false })}
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login With Google
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?{" "}
            <Link
              href="/register"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
