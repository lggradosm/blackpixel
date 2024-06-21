'use client'
import Link from "next/link";
import { useScrollPositionTop } from "@/hooks/useScrollPositionTop";
import ServiceSection from "../ServicesSection/service-section";
export default function Navbar() {
  const {isScrollTop,active} = useScrollPositionTop()

  const animationColorHeader = () =>{
    if(active){
      if(isScrollTop)
        return "animate-background-nav-background-reverse"
      return "animate-background-nav-background"
    }
    return ""
  }

  return (
    <header className={`fixed z-20 w-full h-20 flex items-center  ${animationColorHeader()}`}>
      <nav className=" w-full h-full flex justify-between  items-center px-4  text-white">
        <Link className="text-2xl font-bold" href="/">BlackPixel</Link>
        <div className="flex h-full items-center gap-4">
          <ul className="h-full text-white hidden lg:flex items-center mr-10">
            <li className="h-full flex gap-4">
              <Link href="/#gallery" className="flex items-center h-full hover:text-primary duration-200 font-bold">
                Gallery
              </Link>
              <ServiceSection/>
            </li>
          </ul>


          <div className="flex lg:hidden h-14 cursor-pointer    items-center  p-2 ">
            <span
              className="relative w-8 block h-[2px] bg-white 
        before:content-[''] before:block before:w-8 before:h-[2px] before:bg-white before:absolute before:-top-2
        after:content-[''] after:block after:w-8 after:h-[2px] after:bg-white after:absolute after:top-2"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
