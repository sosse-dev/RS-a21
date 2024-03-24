import { specialities } from "@/data";
import { PowerOffIcon } from "lucide-react";

function Specialities() {
  return (
    <>
      {specialities.map((speciality, i) => {
        return (
          <div key={i} className="border-2 flex px-4 items-center gap-x-2">
            <PowerOffIcon className="hidden md:block" />
            <PowerOffIcon className="lg:hidden" size={15} />
            <h1 className="py-4 md:text-xl">{speciality}</h1>
          </div>
        );
      })}
    </>
  );
}

export default Specialities;
