import Image from "next/image";

function Tabs() {
  return (
    <>
      <div className="relative w-full h-[18rem] lg:h-full lg:w-[24rem] flex flex-col bg-opacity-10 text-primary justify-end pb-3 px-2 shrink-0 overflow-hidden">
        <Image
          src="/picture3.jpg"
          fill={true}
          priority={true}
          className="opacity-70 w-full h-full z-[-1]"
          alt="image-box1"
        />
        <h1 className="text-4xl px-2 py-1 font-bold bg-zinc-700">
          Respon Cepat
        </h1>
        <p className="lg:w-[23rem] px-2 py-1 bg-zinc-700">
          Loreectetur adipisicing elit. Libero, pariatur fuga eaque iste maxime
          aspernatur itaque voluptatibus quasi laboriosam consectetur ad
          quibusdam minus perferendis, qui dolor est
        </p>
      </div>
      <div className="relative grow h-full flex flex-col bg-opacity-10 justify-end pb-3 px-2 overflow-hidden text-primary">
        <Image
          src="/picture4.jpg"
          fill={true}
          priority={true}
          className="opacity-70 w-full h-full z-[-1]"
          alt="image-box2"
        />
        <h1 className="text-4xl lg:w-[23rem] px-2 py-1 font-bold bg-zinc-700">
          Pelayanan Baik
        </h1>
        <p className="lg:w-[23rem] bg-zinc-700 px-2 py-1">
          Loreectetur adipisicing elit. Libero, pariatur fuga eaque iste maxime
          aspernatur itaque voluptatibus quasi laboriosam consectetur ad
          quibusdam minus perferendis, qui dolor est
        </p>
      </div>
    </>
  );
}

export default Tabs;
