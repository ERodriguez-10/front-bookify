import "~/styles/globals.css";

import { Lato } from "next/font/google";
import Link from "next/link";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata = {
  title: "CarShop",
  description: "Car shop",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = false;

  return (
    <html lang="en">
      <body className={`font-sans ${lato.className} bg-gray-50`}>
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-12">
            <Link href={"/"} className="text-2xl font-bold">
              CarShop
            </Link>

            <div>
              <Link
                href={"/"}
                className="border-2 border-white px-5 py-2 transition-all hover:border-black"
              >
                Home
              </Link>
              <Link
                href={"/shop"}
                className="mx-3 border-2 border-white px-5 py-2 transition-all hover:border-black"
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
          </div>
        </div>

        {children}

        <div className="mt-12 bg-black">
          <div className="container mx-auto flex items-center justify-between py-12 text-white">
            <Link href={"/"}>CarShop</Link>
            <p>2024 CarShop©. All rigth are reserved. Develop by @CodeGuez</p>
            <div className="flex">
              <GitHubLogoIcon className="mx-4" />
              <TwitterLogoIcon className="mx-4" />
              <LinkedInLogoIcon className="mx-4" />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
