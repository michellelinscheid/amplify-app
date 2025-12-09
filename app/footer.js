'use client';
import Image from "next/image";
import { useMediaQuery } from 'usehooks-ts'
import React, {useState, useEffect} from "react";
import { useBreakpointValue } from "@chakra-ui/react";


function Hours() {
  return (
    <div className="basis-1/4 shrink-0 flex-column m-4 text-center">
      <span className="font-bold">Hours</span><br />
      <nobr>Monday – Thursday,</nobr> <nobr>7am – 4pm</nobr><br />
      Friday, <nobr>7am – 9am</nobr><br />
      (by appointment only)
    </div>
  );
}

function Disclaimer() {
  return (
    <div className="m-auto text-center" style={{maxWidth: "1400px"}}>
      Michelle Linscheid Therapy is not a crisis service. 
      If this is a mental health crisis, please call or text 
      The National Suicide and Crisis Lifeline &#39;<a style={{textDecorationLine: "underline"}} href="rel:+988">988</a>&#39; 
      or if an emergency call &#39;<a style={{textDecorationLine: "underline"}} href="tel:+911">911</a>&#39;.
    </div>
  );
}

function Contact() {
  return (
    <div className="basis-1/8 flex-column text-center m-4">
      <a href="/contact" className="font-bold">Contact</a><br />
      <a href="tel:+6232947062"><nobr>(623) 294-7062</nobr></a><br />
      <a href="mailto:MichelleLTherapy@gmail.com">MichelleLTherapy@gmail.com</a>
    </div>
  );

}


export default function Footer() {
  // const [count, setCount] = useState(0);
  const isNarrow = useBreakpointValue({ base: true, md: false });
  const isMobile = useBreakpointValue({ base: true, sm: false });

  let layout = "row";
  if (isMobile) {
    layout = "col";
  } else {
    layout = "row";
  }

  // let classText = "flex " + flowText + " gap-[24px] items-start justify-around"

  // useEffect(() => {
  //   addEventListener("click", e => {
  //     console.log(e)
  //     setCount(count + 1);
  //   })
  //   console.log("Triggered")
  //   {/*const matches = useMediaQuery('(min-width: 900px)');*/}
  //   const alternate = document.defaultView.matchMedia("(width >= 900px)")
  //   flowText = alternate ? "flex-column" : "flex-row";
  //   classText = "flex " + flowText + " gap-[24px] items-start justify-around"
  //   console.log(flowText)
  // }, [count]);

// <footer className={`${frankruhl.variable} flex ${flowText} gap-[24px] items-start justify-around pb-8`}>
  if (isMobile) {
    return (    
      <footer >
        <div className={`frankruhl-regular flex flex-col gap-[24px] items-center justify-around pb-8 px-4`}>
        <Disclaimer />
        <Hours />
        <Contact />
        </div>
      </footer>
    );
  } else if (isNarrow) {
    return (    
      <footer >
        <div className={`frankruhl-regular flex flex-row gap-[12px] items-start justify-around pb-8 px-4`}>
        <Disclaimer />
        </div>
        <div className={`frankruhl-regular flex flex-row gap-[12px] items-start justify-around pb-8`}>
        <Hours />
        <Contact />
        </div>
      </footer>
    );
  } else {
    return (    
      <footer >
        <div className={`frankruhl-regular flex flex-row gap-[24px] items-start justify-around pb-8`}>
        <Hours />
        <Disclaimer />
        <Contact />
        </div>
      </footer>
    );
  }
}


// function Box(props) {
//   return (
//     <div className="" style={{background: props.color, height: "200px", width: "200px"}}>
//     </div>
//   );

// }


      {/*<Box color="red" />*/}
      {/*<Box color="aquamarine" />*/}
      {/*<Box color="cornsilk" />*/}


// <footer className="row-start-3 flex gap-[24px] flex-wrap justify-between">
//   <a
//     className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//     href=""
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     <Image
//       aria-hidden
//       src="/file.svg"
//       alt="File icon"
//       width={16}
//       height={16}
//     />
//     Learn
//   </a>
//   <a
//     className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//     href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     <Image
//       aria-hidden
//       src="/window.svg"
//       alt="Window icon"
//       width={16}
//       height={16}
//     />
//     Examples
//   </a>
//   <a
//     className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//     href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     <Image
//       aria-hidden
//       src="/globe.svg"
//       alt="Globe icon"
//       width={16}
//       height={16}
//     />
//     Go to nextjs.org →
//   </a>
// </footer>