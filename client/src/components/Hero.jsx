import React from 'react';

const Hero = () => {
  const slides = [

    'https://i.pinimg.com/1200x/56/2d/1b/562d1b1f863b92a2fbf5d3532a23826f.jpg',
    'https://i.pinimg.com/736x/1e/2d/98/1e2d9898914f6dd31dcf9f8d971da62e.jpg',
    'https://i.pinimg.com/1200x/81/54/3f/81543f77dbbc1857020b5f7fde7e6471.jpg',
    'https://i.pinimg.com/736x/eb/d6/a0/ebd6a0b6284f1368fdde670e05cf7c7b.jpg',
    'https://i.pinimg.com/736x/48/33/67/4833672fc32a837342a3b5b1b366a88b.jpg',
  ];
  return (
    <>
      <div className="carousel w-ful mt-4 mb-4">
        {
          slides.map((slide, index) => {
            return (
              <div id={`slide${index + 1}`} className="carousel-item relative w-full">
                <img
                  src={slide}
                  className="w-full h-64 md:h-96 object-contain object-center bg-yellow-50"
                />

                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide4" className="btn btn-circle bg-yellow-100 text-black border-none shadow-md">❮</a>
                  <a href="#slide2" className="btn btn-circle bg-yellow-100 text-black border-none shadow-md">❯</a>
                </div>
              </div>
            )
          })
        }

      </div>
    </>
  );
}

export default Hero;
