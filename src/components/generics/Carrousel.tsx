import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { SwiperMainContainerStyled } from "./Carrousel.styled";

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
    <SwiperMainContainerStyled
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination
    >
      {imageList.map((image: StoryblokSingleAssetType, idx: number) => (
        <SwiperSlide key={idx}>
          <img src={image.filename} alt={image.alt} />
        </SwiperSlide>
      ))}
    </SwiperMainContainerStyled>
  );
};

export default Carrousel;
