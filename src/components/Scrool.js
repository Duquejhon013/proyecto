import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function App() {
  const slides = [
    {
      url: 'https://i.blogs.es/c68014/casa-3d/840_560.jpeg',
    },
    {
      url: 'https://www.bbva.com/wp-content/uploads/2021/04/casas-ecolo%CC%81gicas_apertura-hogar-sostenibilidad-certificado-.jpg',
    },
    {
      url: 'https://images.adsttc.com/media/images/623c/4fa0/3e4b/3145/3000/001b/newsletter/_d_ambrosio_07._copy.jpg?1648119692',
    },

    {
      url: 'https://fincaraiz.com.co/blog/wp-content/uploads/2022/08/casas-modernas-1-1920x1130.jpg',
    },
    {
      url: 'https://http2.mlstatic.com/D_NQ_NP_799920-MCO68894819588_042023-O.webp',
    },
    
  ];
  

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-[500px] h-[200px] w-full m-auto py-0 px-0 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-md bg-center bg-cover duration-500 relative'
      >
        {/* Cuadro de Venta */}
        <div className='absolute top-4 left-4 bg-red-700 text-black p-2 rounded-md'>
          Venta
        </div>
      </div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-white/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;