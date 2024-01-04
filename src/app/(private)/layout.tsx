import "~/styles/globals.css";

import { Lato } from "next/font/google";
import Link from "next/link";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Navbar from "@/components/navbar";

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
  return (
    <html lang="en">
      <body className={`font-sans ${lato.className} bg-gray-50`}>
        <Navbar />

        {children}

        <div className="mt-12 bg-black">
          <div className="container mx-auto items-center justify-between py-12 text-white lg:flex">
            <Link href={"/"}>CarShop</Link>
            <p className="py-8">
              2024 CarShop©. All rigth are reserved. Develop by @CodeGuez
            </p>
            <div className="flex">
              <GitHubLogoIcon className="me-4 lg:mx-4" />
              <TwitterLogoIcon className="mx-4" />
              <LinkedInLogoIcon className="mx-4" />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
