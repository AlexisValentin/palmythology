import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

type CarrouselProps = {
  imageList: StoryblokSingleAssetType[];
};

interface StoryblokSingleAssetType {
  filename: string;
  alt: string;
}

const Carrousel: React.FC<CarrouselProps> = ({ imageList }): JSX.Element => {
  return (
    <Swiper
      className="w-1/2 shadow-2xl"
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination
    >
      {imageList.map((image: StoryblokSingleAssetType, idx: number) => (
        <SwiperSlide key={idx}>
          <img src={image.filename} alt={image.alt} width="800" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carrousel;
