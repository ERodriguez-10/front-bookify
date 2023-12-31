import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type IItem = {
  title: string;
  thumbnail: StaticImageData;
};

export default function ShopItem({ title, thumbnail }: IItem) {
  return (
    <div className="flex flex-col justify-between rounded-sm bg-gradient-to-tr from-zinc-50 to-gray-300 p-4 hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
      <div className="my-auto h-max">
        <Image
          src={thumbnail}
          width={450}
          height={450}
          alt="Picture"
          className="mx-auto"
        />
      </div>

      <Link
        href={`/shop?query=${title.toLowerCase()}`}
        className="block w-full rounded-sm border-2 bg-white py-3 text-center text-xl transition-all hover:border-black"
      >
        {title}
      </Link>
    </div>
  );
}
