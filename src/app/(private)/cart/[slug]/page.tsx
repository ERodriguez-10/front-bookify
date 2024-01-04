import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default function Cart() {
  const session = true;

  return (
    <div>
      <div className="container mx-auto min-h-screen">
        <div className="py-12">
          <h1>Cart</h1>

          <div className="grid grid-cols-3 gap-16">
            <div className="col-span-2">
              <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">INV001</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div>
              <h3>Summary</h3>
              <div className="flex justify-between">
                <p>Delivery Charge</p>
                <p>$0</p>
              </div>
              <div className="flex justify-between pb-10">
                <p>Grand Total</p>
                <p>$0</p>
              </div>
              <Link
                href={session ? "/api/auth/signout" : "/api/auth/signin"}
                className="block rounded-xl bg-black px-5 py-3 text-center font-semibold text-white no-underline transition hover:bg-white/20"
              >
                {session ? "Buy" : "Login to checkout"}
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-gray-300 py-12">
          <div className="grid grid-cols-3">
            <div className="col-span-2">
              <h2>Continue shopping</h2>
              <p>
                Discover more books that are perfect for gift or a unique
                addition to your collection.
              </p>
            </div>

            <Button>Continue shopping</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
