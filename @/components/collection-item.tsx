import Image from "next/image";

interface IItem {
  thumbnail: string;
  title: string;
  description: string;
  price: string;
}

export default function CollectionItem({
  thumbnail,
  title,
  description,
  price,
}: IItem) {
  return (
    <div>
      <div className="rounded-xl p-4" style={{ backgroundColor: "#f2f2f2" }}>
        <Image
          src={thumbnail}
          width={250}
          height={250}
          alt="Picture"
          className="mx-auto"
        />
      </div>
      <p className="text-ellipsis py-3 text-lg font-bold">{title}</p>
      <p className="truncate">{description}</p>
      <p>${price}</p>
    </div>
  );
}
