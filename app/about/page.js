import Image from "next/image";
import { Metadata, ResolvingMetadata } from 'next';
import { prefix } from "../prefix.js";

export async function generateMetadata() {
  return {
    title: "About | Discover Support Today — Michelle Linscheid Therapy",
    description: ""
  }
}


export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-items-center min-h-screen p-10 py-5 md:p-20 gap-16">

      <center>
        <span className={"birthstone-bounce-regular text-6xl"}>About</span>
      </ center>
      <main className="flex flex-col md:flex-row gap-[32px] items-center sm:items-start mt-4">
        <div className="grid basis-1/2 justify-center grid-cols-24 grid-rows-24">
          <Image
            src={prefix + "/Sedona.webp"}
            alt="A person standing with a dog along a creek in a forest with red rock formations in the background under a blue sky."
            className={"col-start-2 row-start-1 col-end-24 row-end-21 object-cover aspect-square"}
            width={680}
            height={138}
            priority
          />
          <Image
            src="/Michelle+Linscheid+LCSW.webp"
            alt="Close-up portrait of a woman with long light brown hair, blue eyes, and fair skin, smiling at the camera in a well-lit room, wearing a black top, a gold necklace with a blue pendant, and a nose piercing."
            className={"col-start-6 row-start-8 col-end-19 row-end-22 object-cover aspect-17/20"}
            width={314*3}
            height={370*3}
            priority
          />
        </div>
        <div className="flex flex-col content-around frankruhl-regular basis-1/2 text-center leading-8">
          <span className="pb-3">
          Hi, I’m Michelle Linscheid, LCSW, and I am a mental health therapist in Arizona.
          </span>
          <span className="pb-3">
          Do you ever feel like your mind won’t slow down, or that memories from the past keep affecting your present? You’re not alone. I work with adults across Arizona, virtually,  who are navigating trauma, anxiety, and overwhelming life stress, and I offer a space where you can simply be yourself.
          </span>
          <span className="pb-3">
          Many of my clients come to therapy feeling stuck or exhausted from coping on their own — whether it’s with self-harm, substance use, intrusive thoughts, or disordered eating. Together, we’ll explore the ways you’ve learned to survive and gently build new strategies that support your healing and peace of mind.
          </span>
          <span className="pb-3">
          My approach is collaborative, compassionate, and body-aware. In our sessions, we’ll focus on understanding how your thoughts, emotions, and physical experiences connect. I use somatic therapy, blending talk therapy with mindfulness, as well as parts work to help you feel more present, grounded, and safe in your body. The goal isn’t to “stay positive” all the time, it’s to give you tools and insight so you can handle life’s challenges with clarity and confidence.
          </span>
          <span className="pb-3">
          You don’t have to go through this alone. Whether you’re looking for trauma therapy, parts work, somatic therapy, or a supportive space to reconnect with yourself, I’ll walk beside you as you heal and grow.
          </span>
          <span className="pb-3">
          Reach out today to schedule your free consultation — I’d be honored to support your journey.
          </span>
        </div>
      </main>
    </div>
  );
}
