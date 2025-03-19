import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import picture1 from "../public/Cropped_Main2.jpg";

import Footer1 from "@/components/footer";
import PicText from "@/components/PicText";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main
      className={`${geistSans.variable} ${geistMono.variable} font-sans bg-gray-100 relative`}
    >
      {/* Hero Section */}
      <div className="relative h-screen w-full">
        {/* Hero Background Image */}
        <Image
          src={picture1}
          alt="Hero Image"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Naam linksboven */}
        <div className="absolute top-6 left-12 text-white font-bold text-4xl ml-25">
          <h1>Romain Dohmen</h1>
        </div>

        {/* Overlay met content op de originele plaats */}
        <div className="absolute inset-0 flex flex-col items-start justify-center text-white p-6 ml-30">
          <div className="bg-white/20 backdrop-blur-md p-6 rounded-lg max-w-4xl">
            <h1 className="text-5xl font-bold border-b-4 border-[#71c4ef] inline-block pb-2">
              Advies voor Groei en Innovatie
            </h1>
            <p className="mt-4 text-2xl text-white">
              Wij helpen bedrijven groeien met strategisch advies, efficiënte processen en innovatieve oplossingen. 
              Ontdek hoe wij jouw organisatie naar het volgende niveau kunnen tillen.
            </p>
            <button className="mt-6 px-8 py-3 bg-white text-black rounded-md font-medium transition-all hover:text-white hover:bg-[#71c4ef] cursor-pointer">
              Neem contact op
            </button>
          </div>
        </div>
      </div>
      
      <PicText />
      <Footer1 />

    </main>
  );
}