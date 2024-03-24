import Article from "@/components/Article";
import Boxes from "@/components/Boxes";
import { BreadcrumbDemo } from "@/components/Breadcrump";
import Button1 from "@/components/Buttons1";
import Footer from "@/components/Footer";
import { Form } from "@/components/Form";
import { Navbar } from "@/components/Navbar";
import { NavbarM } from "@/components/NavbarM";
import News from "@/components/News";
import Specialities from "@/components/Specialities";
import Tabs from "@/components/Tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AlertCircle,
  ArrowUpRight,
  Headset,
  MessageSquareShare,
  Search,
  Share2,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <nav className="w-full h-16 flex justify-end lg:hidden">
        <button className="grid place-items-center">
          <AlertCircle color="black" size={35} />
        </button>
        <NavbarM />
      </nav>
      <nav className="w-full justify-center items-center py-1 hidden lg:flex">
        <Navbar />
      </nav>
      <div className="px-7 py-1 bg-slate-100 flex justify-between">
        <BreadcrumbDemo />
        <div className="flex gap-x-2">
          <button aria-label="fb">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
            </svg>
          </button>
          <button aria-label="message">
            <MessageSquareShare />
          </button>
        </div>
      </div>
      <div className="relative w-full mx-auto min-h-[30rem] max-w-[70rem] h-[80vh] max-h-[60rem] flex flex-col justify-center pl-2">
        <h1 className="text-5xl font-semibold">RS A21</h1>
        <p className="w-[17rem] md:w-[19rem]">
          lor sit amet consectetur adipisicing elt labore saepe nihil
          repellendus commodi! Suscipit qui iure, quo, eligendi deleniti fugit
          omnis, dicta nihil earum{" "}
        </p>
        <div className="w-[15rem] sm:w-[19rem] h-fit flex items-center">
          <Input placeholder="Cari" className="w-full md:w-[80%] mt-4 mb-2" />
          <button
            aria-label="search-button"
            className="h-10 w-10 mt-2 border-y-2 border-r-2 hover:border-zinc-600 border-zinc-400 grid place-items-center"
          >
            <Search />
          </button>
        </div>
        <div className="flex gap-x-2">
          <Button className="w-fit">Hubungi Kami</Button>
          <Button variant="outline" className="w-fit">
            Masuk
            <ArrowUpRight />
          </Button>
        </div>
      </div>
      <div className="w-full mx-auto h-[50rem] md:h-[35rem] max-w-[100rem] md:px-2 md:gap-x-2 flex flex-col items-center justify-center lg:flex-row gap-y-4 text-secondary">
        <Tabs />
      </div>
      <div className="w-full mx-auto md:max-w-[50rem] h-fit grid grid-cols-1 md:grid-cols-2 md:gap-x-1 gap-y-1 py-12">
        <Button1 />
      </div>
      <div className="w-full max-w-[90rem] mx-auto h-fit lg:h-[30rem] grid lg:grid-cols-3 gap-1 text-secondary">
        <Boxes />
      </div>
      <div className="w-full md:h-[80rem] lg:h-screen max-w-[70rem] max-h-[50rem] mx-auto flex flex-col items-center md:pt-24 md:pb-14">
        <h1 className="h-fit text-4xl lg:text-5xl font-semibold">
          Fasilitas Dan Layanan
        </h1>
        <div className="w-[95%] h-[95%] grid md:grid-cols-2 lg:grid-cols-4 lg:gap-1 mt-4">
          <Specialities />
        </div>
        <Button className="mt-2">Lihat Selengkapnya</Button>
      </div>
      <div className="w-full h-screen min-h-[30rem] max-w-[100rem] max-h-[50rem] mx-auto grid place-items-center">
        <div className="w-[90%] h-fit lg:h-[90%] lg:border-4 flex flex-col gap-y-4 lg:flex-row-reverse lg:gap-x-2 items-center justify-center">
          <div className="h-fit">
            <h1 className="text-6xl font-bold mt-9">Kontak</h1>
            <p className="w-[19rem]">
              Loonsectetur adipisicing elit. Nemo ea id, cupiditate aperiam
              porro modi quos dolorum iure obcaecati quisquam. Blanditiis error
              rerum perferendis ducimus, libero similiq
            </p>
            <Button className="mt-2 flex">
              Kontak Kami
              <ArrowUpRight />
            </Button>
          </div>
          <div className="w-full h-fit lg:w-[23rem] lg:h-[23rem] shrink-0 grid place-items-center">
            <Headset size={230} />
          </div>
        </div>
      </div>
      <div className="relative w-full mx-auto max-w-[24rem] h-fit flex flex-col lg:flex-row lg:max-w-[80rem] gap-y-12 lg:gap-x-2 px-2 pt-24 pb-12">
        <News />
      </div>
      <div className="relative w-full mx-auto max-w-[24rem] lg:max-w-[80rem] h-fit flex flex-col items-center">
        <div className="w-full h-fit flex flex-col lg:flex-row gap-y-12 lg:gap-x-2 pt-12 pb-2">
          <Article />
        </div>
        <Button className="">Lihat Lainnya</Button>
      </div>
      <div className="w-full h-fit pb-16 pt-16 flex flex-col lg:flex-row items-center justify-center">
        <Form />
        <div className="w-[300px] md:w-[400px] h-[25rem] border-y-2 grid place-items-center">
          <Share2 size={300} />
        </div>
      </div>
      <Footer />
    </>
  );
}
