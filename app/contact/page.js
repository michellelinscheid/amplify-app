// import Image from "next/image";

import ContactForm from "../email_form.js";

// import { Metadata, ResolvingMetadata } from 'next'

export async function generateMetadata() {
  return {
    title: "Contact | Get Started Today — Contact Us — Michelle Linscheid Therapy",
    description: ""
  }
}



export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-10 pt-10 gap-16">
    <center>
      <span className={"birthstone-bounce-regular text-6xl text-center"}>Contact</span>
    </ center>
    <main className="flex flex-col gap-[32px] items-center">
      <div className="text-center max-w-2/3 frankruhl-regular leading-8">

        Please reach out with any questions or to schedule a free 15 minute discovery call to see if we are the right fit.
        <br />
        I can also be reached at: <span>623-294-7062.</span>
      </div>
      <div className="text-center w-full frankruhl-regular">
      <ContactForm />
      </div>
      </main>
    </div>
  );
}

