import Image from "next/image"
import GalleryItem from "./gallery-item"
import GalleryFullScreen from "./gallery-fullscreen"

export default function GallerySection(){
  const images = [{url:"/images/ELEVEN_64UniversityPlace_03-copy-scaled.webp", type:"image"},
    {url: "/images/ELEVEN_Blackfriars_Panorama-scaled.webp",type:"image"},
    {url:"/images/ELEVEN_EXT01_Douro-Valley-scaled.webp", type:"image"},
    {url: "/images/ELEVEN_EXT12_Douro-Valley-scaled-e1716408090136.webp", type:"image"},
    {url: "/images/ELEVEN_Gasholders_Argent_01-scaled.webp",type:"image"},
    {url: "/images/ELEVEN_Gasholders_Argent_09-scaled.webp",type:"image"},
    {url: "/videos/ELEVEN_Cinemagraph_Landscape-Courtyard.mp4",type:"video"}
    ]
  return <section id="gallery" className="text-white px-4  md:px-8 py-8 h-fit overflow-hidden "> 
    <h3 className="animate-appearComponent font-bold text-6xl tracking-wide py-20">GALLERY</h3>
    <ul className=" grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4  md:gap-2">
      { 
        images.map((item,index)=>(<GalleryItem item={item} index={index} />))
      }
    </ul>
   </section>
}