"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
export default function SwiperSection() {
  const videos = [
    "./videos/ELEVEN_Cinemagraph_Landscape-Courtyard.mp4",
    "./videos/ELEVEN_Corridor_Persephone_2.mp4",
    "./videos/ELEVEN_LadyGarden_Persephone-1.mp4",
  ];
  return (
    <section className="h-screen flex items-center overflow-hidden">
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        effect={"fade"}
        modules={[Autoplay, EffectFade, Pagination]}
        className="mySwiper"
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index} className="h-screen w-screen bg-red-500">
            <video className="w-full h-full bg-primary object-cover" autoPlay loop muted>
              <source
                src={video}
                type="video/mp4"
              />
            </video>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="animate-opacity-background-swiper absolute bg-gradient-to-r flex items-center from-black via-transparent to-transparent z-10 w-screen h-screen top-0 left-0">
        <div className="text-white mx-4 xl:mx-32">
          <h2 className="animate-appearComponent opacity-0 text-6xl leading-[4rem] font-bold text-wrap">
            More than an image, <br /> a quality{" "}
            <span className="bg-gradient-to-r duration-700 from-[#cc2b5e] to-[#753a88]  text-transparent bg-clip-text">
              experience.
            </span>
          </h2>
          <p className="animation-delay-200 opacity-0 animate-appearComponent  font-light my-10 w-[400px] tracking-wide text-sm text-neutral-200">
            The best architectural visualization. We help you boost the sales of
            your projects.
          </p>
          <button className="animation-delay-300 animate-appearComponent  opacity-0  p-3 px-8 font-bold hover:bg-gradient-to-r duration-700 hover:from-primary hover:to-secondary hover:text-white bg-white rounded-full text-black">
            Pricing
          </button>
        </div>
      </div>
    </section>
  );
}
