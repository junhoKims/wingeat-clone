import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import './slider.style.css';

import { FeatureImageType } from '@types';
import { IMAGE_ENDPOINT } from '@lib/config/endpoints';

SwiperCore.use([Autoplay, Pagination, Navigation]);

type Props = {
  images: FeatureImageType[];
};

const Feature = ({ images }: Props) => {
  return (
    <Swiper
      slidesPerView={1}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      observer={true}
      observeParents={true}
      loop
      pagination={{
        clickable: true,
      }}
    >
      {images.map(({ image, mobileImage }, key) => (
        <SwiperSlide key={key}>
          <Picture>
            <source media='(max-width:768px)' srcSet={`${IMAGE_ENDPOINT}/${mobileImage}`} />
            <img src={`${IMAGE_ENDPOINT}/${image}`} alt={`feature-banner-${key}`} />
          </Picture>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const Picture = styled.picture`
  & > * {
    width: 100%;
    max-width: 1680px;
    margin: 0 auto;
    cursor: pointer;
    user-drag: none;
    -webkit-user-drag: none;
  }
`;

export default Feature;
