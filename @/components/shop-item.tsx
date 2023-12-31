import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type IItem = {
  title: string;
  thumbnail: StaticImageData;
};

export default function ShopItem({ title, thumbnail }: IItem) {
  return (
    <div
      className="flex flex-col justify-between rounded-sm p-4"
      style={{ backgroundColor: "#f2f2f2" }}
    >
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
