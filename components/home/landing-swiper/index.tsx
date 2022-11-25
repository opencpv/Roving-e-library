import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Image from "next/image";
import useAssets from "../../../utils/customHooks/useAssets";
import LandingSwiperCard from "../../shared/landing-swiper-card";
interface LandingSwiperProps {
  books: Array<object>;
}

const LandingSwiper = ({ books }: LandingSwiperProps) => {
  const assets = useAssets();
  return (
    <section className="mt-6 mb-10">
      <Swiper
        spaceBetween={5}
        slidesPerView={2}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <LandingSwiperCard title={"Twenty leagues"} img={"my img"} />
        </SwiperSlide>
        <SwiperSlide>
          <LandingSwiperCard title={"Twenty leagues"} img={"my img"} />
        </SwiperSlide>
        <SwiperSlide>
          <LandingSwiperCard title={"Twenty leagues"} img={"my img"} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default LandingSwiper;
