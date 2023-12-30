import "~/styles/globals.css";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

import BenefitItem from "@/components/benefit-item";
import ShopItem from "@/components/shop-item";
import CollectionItem from "@/components/collection-item";
import bookFetch from "~/utils/bookFetch";

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

export default async function HomePage() {
  const bookData: IFetchResponse = await bookFetch("3");

  console.log(bookData);

  return (
    <>
      <div className="container mx-auto">
        <div className="flex h-screen flex-col">
          <div className="mb-12 flex-grow rounded-xl bg-gray-300 p-16">
            {/* // TODO: Hero Image */}
          </div>
        </div>

        <div className="py-16">
          <div className="grid grid-cols-4 gap-8">
            <BenefitItem />
            <BenefitItem />
            <BenefitItem />
            <BenefitItem />
          </div>
        </div>

        <div className="py-12">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold">Shop by Categories</h2>
            <p className="text-lg">Show All</p>
          </div>

          <div className="grid grid-cols-3 gap-8 py-12">
            <ShopItem />
            <ShopItem />
            <ShopItem />
            <ShopItem />
            <ShopItem />
            <ShopItem />
          </div>
        </div>

        <div className="py-12">
          <h2 className="text-center text-2xl font-bold">New Collections</h2>

          <p className="py-12">Showing 1 - 3 of {bookData.totalDocs} Books</p>

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

          <div className="flex justify-center pt-12">
            <ChevronLeftIcon className="mx-6 w-5" />
            <p>Page 1 of 5</p>
            <ChevronRightIcon className="mx-6 w-5" />
          </div>
        </div>
      </div>
    </>
  );
}
