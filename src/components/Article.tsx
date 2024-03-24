import { article } from "@/data";
import Image from "next/image";

function Article() {
  return (
    <>
      <h1 className="absolute top-0 mx-auto text-5xl font-bold">Artikel</h1>
      {article.map(({ title, desc, image }, i) => {
        return (
          <button
            aria-label="Artikel"
            key={i}
            className="h-fit w-full border-2 pb-2 hover:border-primary"
          >
            <div className="relative w-full h-[12rem]">
              <Image
                src={image}
                fill={true}
                loading="lazy"
                className="opacity-70 w-full h-full z-[-1] object-cover"
                alt="article-image"
              />
            </div>
            <h1 className="text-4xl font-bold mt-2 px-2 text-left">{title}</h1>
            <p className="lg:text-sm px-2">{desc}</p>
          </button>
        );
      })}
    </>
  );
}

export default Article;
