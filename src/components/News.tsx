import { news } from "@/data";
import Image from "next/image";

function News() {
  return (
    <>
      {news.map(({ title, desc, image }, i) => {
        return (
          <div key={i} className="w-full h-fit">
            <div className="relative w-full h-[12rem]">
              <Image
                src={image}
                fill={true}
                loading="lazy"
                className="opacity-70 w-full h-full z-[-1] object-cover"
                alt="informarion-iamge"
              />
            </div>
            <h1 className="text-4xl font-bold mt-2">{title}</h1>
            <p className="lg:text-sm">{desc}</p>
          </div>
        );
      })}
    </>
  );
}

export default News;
