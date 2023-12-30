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
      <div className="rounded-sm bg-gray-200 p-4">
        <Image
          src={thumbnail}
          width={250}
          height={250}
          alt="Picture"
          className="mx-auto"
        />
      </div>
      <p>{title}</p>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
}
