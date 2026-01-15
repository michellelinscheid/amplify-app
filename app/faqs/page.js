import Image from "next/image";
import { Metadata, ResolvingMetadata } from 'next'
import { useBreakpointValue } from "@chakra-ui/react";
import { prefix } from "../prefix.js";


export async function generateMetadata() {
  return {
    title: "FAQs | Start Your Healing Today — Michelle Linscheid Therapy",
    description: ""
  }
}


export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-items-center min-h-screen p-20 pt-10 py-5 md:py-10 gap-16">
      <center>
        <span className={"birthstone-bounce-regular text-6xl"}>Frequently Asked Questions</span>
      </ center>
      <main className="flex flex-col md:flex-row gap-[32px] items-center sm:items-start justify-items-center leading-8">
        <div className="grid basis-full md:basis-4/7 frankruhl-regular">
          <h1 className="pb-8 text-2xl">
          How much is a therapy session?
          </h1>
          <p className="answer">
          A therapy session is $150. I have a limited amount of sliding scale spots available. 
          </p><p></p>
          <h1 className="question text-2xl">
          Do you accept health insurance?
          </h1>
          <p className="answer">
          Yes! I am in network with Aetna, BCBS, Cigna, Optum, Oscar, UMR, United Healthcare, and several smaller health insurance plans. Prior to your first appointment, I will confirm your benefits for therapy services.
          </p><p></p>
          <h1 className="question text-2xl">
          What is your availability?
          </h1>
          <p className="answer">
          My hours are Monday through Thursday, 7am to 4pm, and Friday 7am to 9am.
          </p><p></p>
          <h1 className="question text-2xl">
          Who do you work with?
          </h1>
          <p className="answer">
          I work with adults 18 and over from diverse backgrounds and life experiences. My practice is LGBTQ+ affirming, disability inclusive, and welcoming to people in polyamorous and other non-traditional relationships. I also support individuals who are deconstructing their faith or religion, as well as those who have had difficult or negative experiences in healthcare settings. My goal is to provide a safe, nonjudgmental space where every client feels seen, respected, and supported in their healing journey.
          </p><p></p>
          <h1 className="question text-2xl">
          What types of therapy do you use?
          </h1>
          <p className="answer">
          I work from a harm reduction, Health at Every Size (HAES), and social justice perspective. My approach is collaborative, compassionate, and grounded in respect for each client’s unique experiences. I am trained in multiple evidence-based therapies, including mindfulness, somatic therapy, parts work, relational therapy, trauma-focused therapy, and strengths-based approaches. Together, we’ll find the tools and strategies that support your healing, growth, and overall well-being.
          </p><p></p>
          <h1 className="question text-2xl">
          What makes you different from other therapists?
          </h1>
          <p className="answer">
          From the very beginning, I believe you and honor your story. I trust that you know the most about your lived experience and I see therapy as a collaborative process where we work together toward your healing journey and the future you want to create. My role as a trauma therapist is to provide a safe, supportive space where you can feel understood, validated, and empowered to take the next steps in your growth.
          </p>
        </div>
        <div className="basis-full md:basis-3/7 frankruhl-regular">
          <br />
          <Image
            src={prefix+"/CeceAsst.webp"}
            alt="A brown dog wearing glasses and a pink shirt, sitting on a rug indoors"
            className={"object-cover aspect-17/20 p-4"}
            width={150*3}
            height={200*3}
            priority
          />
          <div className="caption text-center p-8">
            Assistant therapist Cece is happy to join in any session for additional emotional support.
          </div>
        </div>
      </main>
    </div>
  );
}
