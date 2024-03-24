import { MapPin, MessageCircleQuestion, Star } from "lucide-react";
import { Button } from "./ui/button";

function Boxes() {
  return (
    <>
      <div className="bg-secondary text-primary flex flex-col justify-end sm:px-2 pb-4">
        <MapPin className="mx-auto mb-6 mt-2" strokeWidth={0.8} size={150} />
        <h1 className="text-6xl font-bold">Lokasi</h1>
        <p className="">
          Loit amet consectetur adipisicing elit. Voluptatum iste quia odit
          quasi id quae provident assumenda animi fugiat, voluptatem consectetur
          numquam excepturi facilis natus quis at corporis iure ali
        </p>
        <Button
          variant="outline"
          className="text-end text-zinc-800 mt-2 hover:underline"
        >
          Lihat Selengkapnya
        </Button>
      </div>
      <div className="bg-secondary text-primary flex flex-col justify-end sm:px-2 pb-4">
        <MessageCircleQuestion
          className="mx-auto mb-6 mt-2"
          strokeWidth={0.8}
          size={150}
        />

        <h1 className="text-6xl font-bold">Pelayanan</h1>
        <p className="">
          Loit amet consectetur adipisicing elit. Voluptatum iste quia odit
          quasi id quae provident assumenda animi fugiat, voluptatem consectetur
          numquam excepturi facilis natus quis at corporis iure ali
        </p>
        <Button
          variant="outline"
          className="text-end text-zinc-800 mt-2 hover:underline"
        >
          Lihat Selengkapnya
        </Button>
      </div>
      <div className="bg-secondary text-primary flex flex-col justify-end sm:px-2 pb-4">
        <Star className="mx-auto mb-6 mt-2" strokeWidth={0.8} size={150} />

        <h1 className="text-6xl font-bold">Masukan</h1>
        <p className="">
          Loit amet consectetur adipisicing elit. Voluptatum iste quia odit
          quasi id quae provident assumenda animi fugiat, voluptatem consectetur
          numquam excepturi facilis natus quis at corporis iure ali
        </p>
        <Button
          variant="outline"
          className="text-end text-zinc-800 mt-2 hover:underline"
        >
          Lihat Selengkapnya
        </Button>
      </div>
    </>
  );
}

export default Boxes;
