import { Banner, CustomSlider } from '@/components';
import { bannerData } from '@/mock';

import { useState } from 'react';
import Slider from 'react-slick';

import { Image } from '@nextui-org/react';

interface IProductImages {
  mainImage: string;
  images: [];
}

const ProductImages = (props: IProductImages) => {
  const { mainImage, images } = props;
  const [selectedImage, setSelectedImage] = useState(mainImage);

  const handleImageChange = (image: string) => {
    setSelectedImage(image);
  };

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    slidesToShow: images?.length <= 4 ? images?.length : 4,
    speed: 500,
    arrows: false,
    swipeToSlide: true,
    draggable: true,
    focusOnSelect: true,
  };

  return (
    <div className="flex flex-col">
      <div className="rounded   sm:block max-h-[500px] w-full hidden ">
        <Image
          width={400}
          height={800}
          classNames={{
            wrapper: 'min-w-full h-full overflow-hidden',
          }}
          className="rounded-lg w-full h-full  object-cover"
          src={selectedImage || mainImage}
          alt="product main image"
        />
      </div>
      <div className="relative hidden sm:block">
        <Slider {...settings}>
          {images?.map(({ image }) => (
            <div
              key={image}
              onClick={() => handleImageChange(image)}
              className={`w-56 max-h-24 cursor-pointer slider-item ${selectedImage === image ? 'slick-active' : ''}`}
            >
              <Image
                width={400}
                height={400}
                classNames={{
                  wrapper: 'min-w-full h-full overflow-hidden',
                }}
                className="rounded h-full w-full object-center object-cover"
                src={image}
                alt="product images"
              />
            </div>
          ))}
        </Slider>
      </div>
      <CustomSlider
        lang={'uz'}
        arrows={false}
        autoPlay={false}
        component={Banner}
        sliderData={images}
        sliderClass="banner_slider"
        wrapperClass="w-full sm:hidden max-h-[500px] rounded-lg overflow-hidden"
        items={{ monitor: 1, desktop: 1, tablet: 1, mobile: 1 }}
      />
    </div>
  );
};

export default ProductImages;
