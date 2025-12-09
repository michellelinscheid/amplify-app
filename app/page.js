import Image from "next/image";
import { prefix } from "./prefix.js";
import { Frank_Ruhl_Libre } from "next/font/google";


const frankruhl = Frank_Ruhl_Libre({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-frankruhl",
});


export default function Home() {
  console.log(`prefix: ${prefix}`)
  return (
    <div className="font-sans flex flex-col items-center justify-items-start px-8 pb-20 max-h-fit">
      <main className="flex flex-col sm:flex-row gap-[32px] items-center content-center">
      <div className="sm:basis-2/3">
        <center className="flex flex-col gap-[32px] justify-items-center items-center m-8">
          <span className={"birthstone-bounce-regular text-8xl py-4"}>mental  health <br/> therapy</span>
          <br />
          <span className={"frankruhl-regular text-2xl text-stone-100 py-8"}>
            Here you will find a space, free of judgment, where you can show up just as you are and take the space you need.
          </ span>
        </ center>
      </ div>
      <div className="sm:basis-1/3 flex flex-shrink gap-[32px] items-center">
        <Image
          src={prefix + "/Cece.webp"}
          alt="Cece"
          className={"object-cover max-h-1/2"}
          style={{
            maxHeight: "500px", 
            aspectRatio: 1/2,
            // minHeight: "0px"
          }}
          width="1500"
          height="1125"
          priority
        />
      </ div>
      </main>
    </div>
  );
}
