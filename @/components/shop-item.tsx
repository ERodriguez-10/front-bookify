import Image from "next/image";
import Link from "next/link";

export default function ShopItem() {
  return (
    <div className="rounded-sm bg-gray-200 p-4">
      <Image
        src={"https://picsum.photos/id/237/250/250"}
        width={250}
        height={250}
        alt="Picture"
        className="mx-auto"
      />
      <Link
        href={"/shop?query=drama"}
        className="mt-6 block w-full bg-white py-4 text-center text-xl"
      >
        Drama
      </Link>
    </div>
  );
}
