import InputUrlCard from "@/components/InputUrlCard";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full flex flex-col justify-center items-center h-[30rem]">
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
      </main>
    </>
  );
}
