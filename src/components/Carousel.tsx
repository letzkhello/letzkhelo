"use client";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Link from "next/link";

// export default function Carousel() {
//   const [getGame, setGame] = useState([]);
//   useEffect(() => {
//     getGameDetails();
//   }, []);

//   const getGameDetails = async () => {
//     const res = await axios.get("/api/getAllSports");
//     console.log(res.data);
//     checkFilter(res.data);
//   };
//   const checkFilter = (gameName: any) => {
//     const filterData = gameName.filter((game: any) => game.isFeatured == true);
//     setGame(filterData);
//     console.log(getGame, "prakas");
//     console.log(filterData, "saodiafdas");
//   };

//   return (
//     <>
//       <div className="carousel w-full h-[35vh]">
//         {getGame.map((game?: any, index?: any) => {
//           console.log("hii");
//           return (
//             <>
//               <div
//                 id={`slide` + index}
//                 className="carousel-item relative w-full h-full"
//               >
//                 <img
//                   src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/4529fd434a85c683.jpg?q=20"
//                   className="w-full "
//                 />

//                 <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//                   <Link
//                     href={`#slide` + eval("index - 1")}
//                     className="btn btn-circle"
//                   >
//                     ❮
//                   </Link>
//                   <Link
//                     href={`#slide` + eval(index + 1)}
//                     className="btn btn-circle"
//                   >
//                     ❯
//                   </Link>
//                 </div>
//                 <button className="btn btn-primary absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-3/4 mx-auto w-3/12 md:w-2/12">
//                   Register Now
//                 </button>
//               </div>
//             </>
//           );
//         })}
//       </div>
//     </>
//   );
// }













// import React, { useState, useEffect } from "react";

// const slideStyles = {
//   width: "100%",
//   height: "100%",
//   borderRadius: "10px",
//   backgroundSize: "cover",
//   backgroundPosition: "center",
// };

// const Carousel = ({ slides }: any) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Function to go to the next slide
//   const goToNext = () => {
//     const isLastSlide = currentIndex === slides.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   // Function to go to a specific slide
//   const goToSlide = (slideIndex: any) => {
//     setCurrentIndex(slideIndex);
//   };

//   // Automatically switch to the next slide every 2 seconds
//   useEffect(() => {
//     const intervalId = setInterval(goToNext, 2000);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, [currentIndex]);

//   const slideStylesWidthBackground = {
//     ...slideStyles,
//     backgroundImage: `url(${slides[currentIndex].url})`,
//   };

//   return (
//     <div className="relative h-[50vh]">
//       <div>
//         <div
//           onClick={goToNext}
//           className="absolute top-1/2 transform -translate-y-1/2 left-32 text-45 text-white z-10 cursor-pointer"
//         >
//           ❰
//         </div>
//         <div
//           onClick={goToNext}
//           className="absolute top-1/2 transform -translate-y-1/2 right-32 text-45 text-white z-10 cursor-pointer"
//         >
//           ❱
//         </div>
//       </div>
//       <div style={slideStylesWidthBackground}></div>
//       <div className="flex justify-center">
//         {slides?.map((slide: any, slideIndex: React.Key | null | undefined) => (
//           <div
//             className="m-0 mx-3 cursor-pointer text-20"
//             key={slideIndex}
//             onClick={() => goToSlide(slideIndex)}
//           >
//             ●
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;















import React, { useState, useEffect } from "react";

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  transition: "background-image 1s ease-in-out", // Add a transition for background-image
};

const Carousel = ({ slides }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex -1; 
    setCurrentIndex(newIndex);

    // const isLastSlide = currentIndex === slides.length - 1;
    // const newIndex = isLastSlide ? 0 : currentIndex - 1;
    // setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(goToNext, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  const currentSlide = slides[currentIndex];

  const slideStylesWithBackground = {
    ...slideStyles,
    background: `url(${currentSlide?.url}) center/cover`, // Use "background" to set the image and preserve transition
  };

  return (
    <div className="relative h-[35vh] lg:h-[50vh]">
      <div>
        <div
          onClick={goToPrevious}
          className="absolute top-1/2 transform -translate-y-1/2 left-32 text-45 text-white z-10 cursor-pointer"
        >
          ❰
        </div>
        <div
          onClick={goToNext}
          className="absolute top-1/2 transform -translate-y-1/2 right-32 text-45 text-white z-10 cursor-pointer"
        >
          ❱
        </div>
      </div>
      <div style={slideStylesWithBackground}></div>
      <div className="flex justify-center">
        {slides?.map((slide: any, slideIndex: React.Key | null | undefined) => (
          <div
            className={`m-0 mx-3 cursor-pointer text-20 ${
              slideIndex === currentIndex ? "text-blue-500" : "text-gray-300"
            }`}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

