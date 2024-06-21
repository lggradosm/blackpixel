import Link from "next/link";

export default function FooterSection(){
  return <footer className="flex justify-between items-end w-full bg-primary text-white px-4  py-2">
    <div>
    <h3 className="font-bold">BlackPixel</h3>
    <small className=" ">All content Copyright Black Pixel Visualization 2024</small>
    </div>
    <Link className="text-sm tracking-wide" href={"mailto:info@blackpixelviz.com"}>info@blackpixelviz.com</Link>
  </footer>
}