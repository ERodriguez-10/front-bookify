import { FcLock, FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-t from-slate-900 to-slate-700">
      <div className="box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12) min-w-[450px] rounded-2xl bg-white text-black">
        <h1 className="flex justify-center pt-8 text-center align-middle text-4xl font-bold">
          <FcLock className="me-2" />
          Auth
        </h1>
        <p className="mb-6 mt-3 text-center text-gray-600">Welcome back</p>

        <form
          id="login-form"
          className="flex flex-col px-8"
          action="/login"
          method="POST"
        >
          <label htmlFor="user_email" className="mt-4 font-bold">
            Email
          </label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            placeholder="johndoe@example.com"
            className="mt-2 rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-200"
            required
          />

          <label htmlFor="user_password" className="mt-4 font-bold">
            Password
          </label>
          <input
            type="password"
            id="user_password"
            name="user_password"
            placeholder="********"
            className="mt-2 rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-200"
            required
          />

          <button
            type="submit"
            className="mt-6 rounded-lg bg-black px-4 py-2 text-white transition-all duration-300 hover:bg-emerald-600"
          >
            Login
          </button>
        </form>

        <div className="mt-6 flex items-center justify-center">
          <hr className="w-1/3" />
          <p className="mx-4 text-gray-600">Or login with</p>
          <hr className="w-1/3" />
        </div>

        <div className="mt-6 flex items-center justify-center">
          <Link href="/auth/provider">
            <Button className="me-2" variant={"outline"} size={"lg"}>
              <FcGoogle className="me-3 h-6 w-6" />
              Google
            </Button>
          </Link>
          <Link href="/auth/provider">
            <Button variant={"outline"} size={"lg"}>
              <FaGithub className="me-3 h-6 w-6" />
              Github
            </Button>
          </Link>
        </div>

        <Link
          href="/auth/register"
          className="mb-8 mt-6 block text-center text-gray-600 hover:underline"
        >
          Don't have an account?
        </Link>
      </div>
    </div>
  );
}
