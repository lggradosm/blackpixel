import Image from "next/image";

export default function GalleryItem({ item, index }) {
  return (
    <li
      key={index}
      className="relative cursor-zoom-in min-h-40 aspect-square bg-red-500 w-full overflow-hidden"
    >
      {
        item.type==="image"? ( <Image
          fill
          quality={100}
          className="w-full aspect-auto h-full !object-cover"
          src={item.url}
          alt="image"
        />):<video className="w-full aspect-auto !object-cover h-full bg-primary" autoPlay loop muted>
        <source
          src={item.url}
          type="video/mp4"
        />
      </video>
      }
     
    </li>
  );
}
