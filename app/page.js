import Image from "next/image";
import Header from "@/components/Header";
import HomePage from "@/components/Home";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
    <div className="bg-[#150539]">
    <Header/>
    <HomePage />
    <Footer/>
    </div>
    
    
    </>
  );
}
