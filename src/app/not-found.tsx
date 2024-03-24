import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

function NotFound() {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row items-center justify-center">
      <h1 className="text-8xl md:text-9xl">404</h1>
      <div className="">
        <h2 className="bg-secondary text-primary px-3 py-2 mb-2">
          Page not Found
        </h2>
        <Link href="/">
          <Button variant="outline">
            Home
            <ArrowUpRight size={15} />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
