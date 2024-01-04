import { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight,  } from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx'

const slides = [
    { url: 'https://images.unsplash.com/photo-1683009427540-c5bd6a32abf6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { url: 'https://images.unsplash.com/photo-1682685797736-dabb341dc7de?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { url: 'https://images.unsplash.com/photo-1682687220640-9d3b11ca30e5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { url: 'https://images.unsplash.com/photo-1682686578601-e7851641d52c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const inFirstSlide = currentIndex === 0;
    const newIndex = inFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const inLastSlide = currentIndex === slides.length - 1;
    const newIndex = inLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    // Auto advance the slides every 5 seconds (adjust as needed)
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="max-w-[1440px] h-[420px] w-full m-auto py-4 px-16 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      {/* left */}
      <div
        className="opacity-50 hover:opacity-80 absolute top-[50%] -translate-x-0 translate-y-[-50%] left-24 text-2xl rounded-full p-2 bg-white cursor-pointer"
        onClick={prevSlide}
      >
        <BsChevronCompactLeft size={30} />
      </div>

      {/* right */}
      <div
        className="opacity-50 hover: absolute top-[50%] -translate-x-0 translate-y-[-50%] right-24 text-2xl rounded-full p-2 bg-white cursor-pointer"
        onClick={nextSlide}
      >
        <BsChevronCompactRight size={30} />
      </div>

      <div className="flex items-center absolute bottom-4 left-0 right-0 justify-center">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer  ${
              slideIndex === currentIndex ? 'text-[#ff6636]' : 'text-white'
            }`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
