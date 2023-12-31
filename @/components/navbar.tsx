"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const session = false;

  const isShow = open ? "block" : "hidden";

  return (
    <>
      <div className="container mx-auto flex items-center justify-between py-6 md:py-12">
        <Link href={"/"} className="text-2xl font-bold">
          CarShop
        </Link>

        <div className="hidden md:block">
          <Link
            href={"/"}
            className="border-2 border-gray-50 px-5 py-2 transition-all hover:border-black"
          >
            Home
          </Link>
          <Link
            href={"/shop"}
            className="mx-3 border-2 border-gray-50 px-5 py-2 transition-all hover:border-black"
          >
            Shop
          </Link>
          <Link
            href={session ? "/api/auth/signout" : "/api/auth/signin"}
            className="border-2 border-black bg-white px-5 py-2  transition-all hover:bg-black hover:text-white"
          >
            {session ? "Sign out" : "Sign in"}
          </Link>
        </div>

        {open ? (
          <button onClick={() => setOpen(false)} className="md:hidden">
            <XMarkIcon className="w-8 transition-all" />
          </button>
        ) : (
          <button onClick={() => setOpen(true)} className="md:hidden">
            <Bars3Icon className="w-8 transition-all md:hidden" />
          </button>
        )}
      </div>

      <div className={isShow}>
        <div className="absolute  w-full bg-gray-50 shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] transition-all md:hidden">
          <div className="container mx-auto flex flex-col">
            <Link href={"/"} className="py-4 transition-all hover:border-black">
              Home
            </Link>
            <Link
              href={"/shop"}
              className="py-4 transition-all hover:border-black"
            >
              Shop
            </Link>
            <Link
              href={session ? "/api/auth/signout" : "/api/auth/signin"}
              className="py-4 transition-all hover:bg-black hover:text-white"
            >
              {session ? "Sign out" : "Sign in"}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
