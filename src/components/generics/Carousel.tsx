"use client";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

type CarouselProps = {
	imageList: StoryblokSingleAssetType[];
};

interface StoryblokSingleAssetType {
	filename: string;
	alt: string;
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
		{imageList.map((image: StoryblokSingleAssetType, idx) => {
			const { filename, alt } = image;
			const isPriority = idx === 0;
			const loadingStrategy = isPriority ? "eager" : "lazy";

			return (
				<SwiperSlide key={alt}>
					<div className="relative aspect-square w-full">
						<Image
							src={filename}
							alt={alt}
							fill
							className="object-contain"
							loading={loadingStrategy}
							priority={isPriority}
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 1000px"
						/>
					</div>
				</SwiperSlide>
			);
		})}
	</Swiper>
);

export default Carousel;
