import "~/styles/globals.css";

import {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import BenefitItem from "@/components/benefit-item";
import ShopItem from "@/components/shop-item";
import CollectionItem from "@/components/collection-item";
import { bookFetch } from "~/utils/bookFetch";

import CarC from "../../public/car_C.png";
import CarD from "../../public/car_D.png";
import CarE from "../../public/car_E.png";
import CarF from "../../public/car_F.png";
import CarG from "../../public/car_G.png";
import CarI from "../../public/car_I.png";

import type { StaticImageData } from "next/image";
import Link from "next/link";

import { TruckIcon } from "@heroicons/react/24/outline";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { CreditCardIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

interface IBook {
  _id: string;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  code: string;
  stock: number;
  category: string;
  status: boolean;
  __v: number;
}

interface IFetchResponse {
  status: string;
  payload: IBook[];
  totalDocs: number;
  totalPages: number;
  prevPage: null | number;
  nextPage: number;
  page: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevLink: null | string;
  nextLink: string;
}

const categoriesCarHome = [
  { name: "Luxury", id: "LUX1", thumbnail: CarE },
  { name: "Jeep", id: "JEE2", thumbnail: CarI },
  { name: "Sports", id: "SPO3", thumbnail: CarG },
  { name: "SUVs", id: "SUV4", thumbnail: CarC },
  { name: "Coupes", id: "COU5", thumbnail: CarF },
  { name: "Sedans", id: "SED6", thumbnail: CarD },
];

interface ICategoryCar {
  name: string;
  id: string;
  thumbnail: StaticImageData;
}

export default async function HomePage() {
  const bookData: IFetchResponse = await bookFetch("3");

  return (
    <>
      <div className="container mx-auto">
        <div className="flex min-h-[calc(100vh-theme('spacing.32'))] flex-col">
          <div className="mb-12 flex-grow rounded-xl bg-gradient-to-r from-gray-200 to-slate-300 p-16">
            {/* // TODO: Hero Image */}
          </div>
        </div>

        <div className="py-12">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Shop by Categories</h2>
            <Link
              href={"/shop"}
              className=" border-2 border-white px-5 py-2 text-lg transition-all hover:border-black"
            >
              Show All
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-12">
            {categoriesCarHome.map((category: ICategoryCar) => {
              return (
                <ShopItem
                  key={category.id}
                  title={category.name}
                  thumbnail={category.thumbnail}
                />
              );
            })}
          </div>
        </div>

        <div className="my-12 flex-grow rounded-xl bg-gradient-to-r from-gray-200 to-slate-300 p-16">
          <h4 className="text-center text-3xl italic">
            "More than a simple car, we are tradition"
          </h4>
        </div>

        <div className="py-12">
          <h2 className="text-center text-2xl">New Collections</h2>

          <p className="py-8 font-bold">
            Showing 1 - 3 of {bookData.totalDocs} Cars
          </p>

          <div className="grid grid-cols-3 gap-8">
            {bookData.payload.map((book: IBook) => {
              return (
                <CollectionItem
                  key={book._id}
                  thumbnail={book.thumbnail}
                  title={book.title}
                  description={book.description}
                  price={book.price.toString()}
                />
              );
            })}
          </div>

          <div className="flex justify-center pt-12 align-middle">
            <Pagination>
              <PaginationContent>
                <PaginationPrevious href="#" />
                <PaginationLink href="#" isActive>
                  1
                </PaginationLink>
                <PaginationLink href="#">2</PaginationLink>
                <PaginationLink href="#">3</PaginationLink>
                <PaginationNext href="#" />
              </PaginationContent>
            </Pagination>
          </div>
        </div>

        <div className="py-12">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="pb-12 text-3xl">Deals of the Month</h3>
              <p className="pb-8 text-lg">
                Get ready for a shopping experience like never before with our
                Deals of the Month! Every purchase comes with exclusive perks
                and offers, making this month a celebration of savvy choices and
                amazing deals. Don't miss out!
              </p>
              <Link
                href={"/shop"}
                className="flex max-w-fit items-center rounded-sm border-2 border-white px-5 py-3 font-semibold no-underline transition-all hover:border-black"
              >
                <p>View Products</p> <ArrowRightIcon className="ms-2 w-4" />
              </Link>
            </div>

            <div className="flex-grow rounded-xl bg-gradient-to-r from-gray-200 to-slate-300 p-16"></div>
          </div>
        </div>

        <div className="py-12">
          <div className="grid grid-cols-4 gap-8">
            <BenefitItem
              title="Free Shipping"
              description="Free shipping for order above $45,000"
              icon={<TruckIcon className="w-12 pb-2" />}
            />
            <BenefitItem
              title="Money Guarantee"
              description="Within 30 days for an exchange"
              icon={<CurrencyDollarIcon className="w-12 pb-2" />}
            />
            <BenefitItem
              title="Online Support"
              description="24 hours a day, 7 days a week"
              icon={<UserIcon className="w-12 pb-2" />}
            />
            <BenefitItem
              title="Flexible Payment"
              description="Pay with multiple credit cards"
              icon={<CreditCardIcon className="w-12 pb-2" />}
            />
          </div>
        </div>
      </div>
    </>
  );
}
