'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

type CarrouselProps = {
  imageList: StoryblokSingleAssetType[]
}

interface StoryblokSingleAssetType {
  filename: string
  alt: string
}

const Carrousel: React.FC<CarrouselProps> = ({ imageList }) => {
  return (
    <Swiper
      className="shadow-2xl"
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
    </Swiper>
  )
}

export default Carrousel
