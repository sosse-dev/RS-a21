import { Ambulance, ListCollapse, ShieldAlert, UserSearch } from "lucide-react";

function Button1() {
  return (
    <>
      <button className="h-[9rem] md:rounded-tl-md border-2 hover:border-slate-700 transition-colors flex flex-col justify-center pl-2">
        <h1 className="text-2xl flex items-center gap-x-2">
          Ambulan
          <Ambulance />
        </h1>
        <p className="text-left lg:text-sm">
          Lorolor sit amet consectetur adipisicing elit. Vel quidem rerum dolor
          minimtatem, volupta
        </p>
      </button>
      <button className="h-[9rem] md:rounded-tr-md border-2 hover:border-slate-700 transition-colors flex flex-col justify-center pl-2">
        <h1 className="text-2xl flex items-center gap-x-2">
          Temukan Dokter
          <UserSearch />
        </h1>
        <p className="text-left lg:text-sm">
          Loreming elit. Tempore neque eveniet ea delectus consequatur soluta.
          Et, cumque recusandae eius
        </p>
      </button>
      <button className="h-[9rem] md:rounded-bl-md border-2 hover:border-slate-700 transition-colors flex flex-col justify-center pl-2">
        <h1 className="text-2xl flex items-center gap-x-2">
          Panggilan Darurat
          <ShieldAlert />
        </h1>
        <p className="text-left lg:text-sm">
          Loreming elit. Tempore neque eveniet ea delectus consequatur soluta.
          Et, cumque recusandae eius
        </p>
      </button>
      <button className="h-[9rem] md:rounded-br-md border-2 hover:border-slate-700 transition-colors flex flex-col justify-center pl-2">
        <h1 className="text-2xl flex items-center gap-x-2">
          Lainnya
          <ListCollapse />
        </h1>
        <p className="text-left lg:text-sm">
          Loreming elit. Tempore neque eveniet ea delectus consequatur soluta.
          Et, cumque recusandae eius
        </p>
      </button>
    </>
  );
}

export default Button1;
