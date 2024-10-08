import InputUrlCard from "@/components/InputUrlCard";
import Navbar from "./Navbar";
import { CoffeeIcon } from "lucide-react";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full flex flex-col justify-center items-center h-[80vh]">
        <h1 className="scroll-m-20 text-3xl font-bold tracking-tight lg:text-5xl text-center lg:max-w-[40rem]">
          <span className="text-[#FACC15]">Trimm</span> is the free and fastest
          url shortening service
        </h1>
        <p className="leading-7 text-center lg:max-w-[50rem] mt-2 lg:text-[16px] text-[14px] max-w-[25rem]">
          Create short and secure URLs effortlessly with our rapid and reliable
          shortening tool. Our service converts long links into compact,
          easy-to-share URLs.
        </p>
        <InputUrlCard />
        <a
          href="https://ko-fi.com/electro69"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center px-4 py-2 bg-[#FACC15] font-medium rounded-md hover:bg-[#E2B814] text-black transition-colors duration-200"
        >
          <CoffeeIcon className="mr-2" size={20} />
          Support Us :)
        </a>
      </main>
    </>
  );
}
