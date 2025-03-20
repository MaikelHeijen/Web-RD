import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import picture1 from "../public/Cropped_Main2.jpg";

import Footer1 from "@/components/footer";
import PicText from "@/components/PicText";

import { Montserrat, Inter } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] }); // Voor de naam
const inter = Inter({ subsets: ["latin"], weight: ["400"] }); // Voor de tekst

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
          className="absolute w-full h-full object-cover"
        />

        {/* Naam met volledige breedte achtergrond */}
        <div className={`${montserrat.className} absolute text-white font-bold text-4xl py-3 px-6`}>
          <h1 className="max-w-screen-xl ml-30">Romain Dohmen</h1>
        </div>

        {/* Overlay met content op de originele plaats */}
        <div className="absolute inset-0 flex flex-col items-start justify-center text-white p-6 ml-30">
          <div className="bg-white/20 backdrop-blur-md p-6 rounded-lg max-w-3xl">
            <h1 className={`${inter.className} text-5xl font-extrabold border-b-4 border-[#71c4ef] inline-block pb-2`}>
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