import { Checkbox } from "@/components/ui/checkbox";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import CollectionItem from "@/components/collection-item";

export default function Shop() {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col">
          <div className="py-12">
            <div className="grid grid-cols-4">
              <div className="col-span-1">
                <h2>Book Categories</h2>

                <div className="py-6">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms2" />
                    <label
                      htmlFor="terms2"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Category
                    </label>
                  </div>
                </div>

                <h2>Sort by</h2>

                <div className="pt-6">
                  <div className="flex items-center space-x-2">
                    <RadioGroup defaultValue="option-one">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-one" id="option-one" />
                        <Label htmlFor="option-one">Option One</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-two" id="option-two" />
                        <Label htmlFor="option-two">Option Two</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </div>

              <div className="col-span-3 ">
                <h2>Showing 1 - 9 of 15 Products</h2>

                <div className="grid grid-cols-3 gap-8 py-6">
                  <CollectionItem />
                  <CollectionItem />
                  <CollectionItem />
                  <CollectionItem />
                  <CollectionItem />
                  <CollectionItem />
                  <CollectionItem />
                  <CollectionItem />
                  <CollectionItem />
                </div>

                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
