'use client';
import { useEffect, useState } from "react";

export function useScrollPositionTop(){
  const [isScrollTop, setIsScrollTop] = useState(true);
  const [active, setActive] = useState(false);
  useEffect(()=>{
    const handleScroll = () =>{
      if(window.scrollY === 0)
        setIsScrollTop(true)
      else{
        setIsScrollTop(false)
        setActive(true)
      }
    }
    
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll",handleScroll);
    }
  },[])

  return {isScrollTop,active}
}