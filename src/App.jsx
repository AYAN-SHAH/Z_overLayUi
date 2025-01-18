import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
const LeadDashboard = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: false,  draggable: false, });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const images = [
    "https://placehold.co/600x400/DDD/31343C?text=Slide+1",
    "https://placehold.co/600x400/DDD/31343C?text=Slide+2",
    "https://placehold.co/600x400/CCC/31343C?text=Slide+3",
  ];

  useEffect(() => {
    if (!emblaApi) return;

    // This will make the carousel automatically move every 5 seconds
    const intervalId = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000); // change to your preferred interval time

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    // Sync the selected index on each slide change
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  const renderProgressBars = () => {
    return images.map((_, index) => (
      <div
        key={index}
        className={`w-10 h-1 mx-[1px] bg-gray-300  transition-all duration-300 ${
          index === selectedIndex ? "bg-purple-600" : "bg-opacity-50"
        }`}
      ></div>
    ));
  };
  return (
    <div className="min-h-screen bg-gray-100 md:bg--200 flex items-center flex-col w-full relative py-2">
      {/* First Section */}
      <div className="bg-gradient-to-t from-purple-400 sm:from-violet- to-violet-200 text-gray-800 pb-10 md:pb-20 pt-6 sm:pt-4   md:pt-6 px-3 md:px-6 sm:px-8 text-center w-[94%] relative md:w-[87%] lg:w-[86%] rounded-3xl h-[300px] sm:[h-340px] md:h-[440px] lg:h-[500px]">
        <h1 className="text-lg sm:text-xl md:text-3xl lg:text-[2.5rem] font-semibold leading-snug  sm:leading-tight md:leading-none">
          Convert Leads into Success
          <br />
          Maximizing leads was never easier!
        </h1>
        <p className="text-lg mt-2 lg:text-xl font-medium hidden md:block">
          One stop solution to gear up your company’s capabilities.
        </p>
      </div>

      {/* Overlapping Dashboard Section */}
      <div className="overflow-hidden absolute top-[calc(11%)] sm:top-[calc(9%)] md:top-[calc(12%)] lg:top-[calc(13%)] w-[86vw] sm:w-[80vw] md:w-[76vw] max-w-[1000px] mx-auto left-1/2 transform -translate-x-1/2 z-10">
        <div
          className="overflow-hidden bg-white/50 shadow-lg rounded-3xl p-1 sm:p-2 md:p-3 lg:p-4 w-full h-[280px] sm:h-[330px] md:h-[410px] lg:h-[500px] embla"
          ref={emblaRef}
          style={{
            pointerEvents: 'none', // Prevent any pointer interactions
          }}
        >
          <div className="embla__container flex h-full">
            {images.map((src, index) => (
              <div
                key={index}
                className={`embla__slide w-full h-full flex-shrink-0 transition-opacity duration-1000 ease-in-out ${
                  index === selectedIndex
                    ? "opacity-100"
                    : "opacity-0"
                }`}
              >
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Progress Bar Section */}
        <div className="flex justify-center mt-4 space-x-">
          {renderProgressBars()}
        </div>
      </div>
      {/* Second Section */}
      <div className="bg-purple-900 text-white pt-24 sm:pt-28 pb-10 mt-8 sm:mt-16 lg:pt-40 md:mt-24 lg:mt-24 px-4 sm:px-8 lg:px-12 text-center w-full flex flex-col justify-center items-center">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold lg:text-3xl">
          Less Complexity, More Productivity
        </h2>
        <p className="text-sm sm:text-lg md:text-xl md:mt-1 px-2 sm:px-6 lg:mt-1">
          We provide multi-tier features to assist you in boosting your leads
          and client dealings.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-10 lg:gap-12  mt-8 lg:mt-16 px-0 sm:px-0 lg:px-16">
          {[
            {
              image: "https://via.placeholder.com/100",
              title: "Nonstop Leads Monitoring",
              description:
                "Power up your leads with one click. Sync and connect instantly.",
            },
            {
              image: "https://via.placeholder.com/100",
              title: "Know your Clients' Profits",
              description:
                "Track trading activities and provide insights to retain them.",
            },
            {
              image: "https://via.placeholder.com/100",
              title: "Regulate Flow of Funds",
              description:
                "Manage funds to ensure smooth withdrawals and transfers.",
            },
            {
              image: "https://via.placeholder.com/100",
              title: "Take Control on Partners",
              description:
                "Analyze partner performance and reward them accordingly.",
            },
            {
              image: "https://via.placeholder.com/100",
              title: "Integrated Multi-Service",
              description:
                "Offer multiple integrated services under one platform.",
            },
            {
              image: "https://via.placeholder.com/100",
              title: "Manage Tasks Seamlessly", 
              description:
                "Streamline task organization for productivity and timely completion.",
            },
          ].map((card, index) => (
            <div
              key={index}
              className=" bg-opacity-60 text-white flex flex-col justify- items-center md:px-6   rounded-lg h-auto md:min-h-[190px] flex-grow"
            >
              <img
                src="https://placehold.co/800@3x.png"
                alt={card.title}
                className="w-16 h-16  mx-auto mb-[3px] md:mb-2"
              />
              <h3 className="text-xs  sm:text-base md:text-lg lg:text-xl font-semibold px-1 leading-none">{card.title}</h3>
              <p className="text-sm sm:text-sm md:text-base  lg:px-0  md:mt-0 sm:mt-[0px] text-center hidden md:block sm:px-6 md:px-12 leading-none lg:text-base">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeadDashboard;
