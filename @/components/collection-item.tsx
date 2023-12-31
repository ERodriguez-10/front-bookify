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
    <div className="hover:rounded-sm hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
      <div className="rounded-sm p-4" style={{ backgroundColor: "#f2f2f2" }}>
        <Image
          src={thumbnail}
          width={250}
          height={250}
          alt="Picture"
          className="mx-auto"
        />
      </div>
      <p className="text-ellipsis px-4 py-3 text-lg font-bold">{title}</p>
      <p className="truncate px-4">{description}</p>
      <p className="px-4 pb-4">${price}</p>
    </div>
  );
}
