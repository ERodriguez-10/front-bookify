import Image from "next/image";
import { Button } from "@/components/ui/button";
import CollectionItem from "@/components/collection-item";

export default function Product() {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 py-12">
          <Image
            src={"https://picsum.photos/id/237/450/450"}
            width={450}
            height={450}
            alt="Picture"
            className="mx-auto"
          />
          <div>
            <h2>Product title</h2>
            <p>Category | In stock</p>
            <p>$2,099.00</p>
            <p>Description</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
              explicabo, est fugiat nesciunt iusto facere quia tempora
              exercitationem laudantium cumque aut, atque quam enim assumenda
              mollitia, laboriosam iste temporibus pariatur.
            </p>
            <Button
              className="w-full rounded-xl bg-black text-white"
              variant={"outline"}
            >
              Add to cart
            </Button>
          </div>
        </div>

        <div className="py-12">
          <h2>Related products</h2>
          <div className="grid grid-cols-3 gap-8 py-6">
            <CollectionItem />
            <CollectionItem />
            <CollectionItem />
          </div>
        </div>
      </div>
    </>
  );
}
