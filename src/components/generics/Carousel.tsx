'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

type CarouselProps = {
  imageList: StoryblokSingleAssetType[]
}

interface StoryblokSingleAssetType {
  filename: string
  alt: string
}

const Carousel: React.FC<CarouselProps> = ({ imageList }) => (
  <Swiper
    className="shadow-2xl"
    modules={[Navigation, Pagination]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination
  >
    {imageList.map((image: StoryblokSingleAssetType) => {
      const { filename, alt } = image

      return (
        <SwiperSlide key={alt}>
          <img src={filename} alt={alt} />
        </SwiperSlide>
      )
    })}
  </Swiper>
)

export default Carousel
