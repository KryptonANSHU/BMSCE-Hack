import React, { useEffect, useState } from "react";
import { ImageData } from "./Imagedata";
import { BgImage } from "./Imagedata";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const styles = {
  slideImage: "w-full h-full bg-cover"
}
const textHeadings = ["Nutrition Assessment", "Nutrition Diagnosis", "Nutrition Intervention", "Monitoring/ Evaluation"]
const textDescriptions = ["We assess all the basic nutrients and there quantity in your daily food item.", "The nutrients are now judged against and analysed that are they on the healthy side.", "If there is any form of unhealthy then we suggest proper and nutritious diet for the person.", "These are further evaluated and monitored for the best weight management and healthy lifestyle."]


const images = ["../../images/Monitoring.png", "../../images/Intervention.png", "../../images/Diagnosis.png", "../../images/Monitoring.png"]
const bg_images = ["../../images/cursor.png","../../images/cursor.png","../../images/cursor.png","../../images/cursor.png",]

export default function Working() {

  const [currentDiv, setCurrentDiv] = useState(0);

  return (
    <div className="max-w-7xl mt-20 text-center">
      <div className="md:mt-20 flex flex-col mb-16 text-white font-manrope">

        {/* <h1 className="m-2 text-sky-400 text-lg md:text-xl tracking-wide font-thin">Discover More</h1> */}
        <h1 className="font-bold text-3xl md:text-5xl text-orange-600">
          How does it work?
        </h1>

        <div className="grid grid-cols-2 h-full">
          <div className="hidden md:flex max-w-2xl col-span-1 ml-4 p-16 flex-col items-start justify-center">
            {
              ImageData.map((image, i) => {
                return (
                  <button
                    key={i}
                    className={"flex flex-row mb-4 px-4 py-4" + (i === currentDiv ? " bg-[#00C2FF]/20 rounded-xl scale-105 ease-in duration-300" : "")}
                    onClick={() => {
                      setCurrentDiv(i);
                    }}
                    key={i}
                  >
                    <div
                      className={
                        "min-w-max min-h-max mr-6 items-center flex flex-row justify-center"
                      }
                    >
                      <img src={image} className="w-[55px] h-[35px] lg:w-[110px] lg:h-[70px]" />
                    </div>
                    <div className="flex flex-col justify-center text-left">
                      <span className="lg:text-xl">
                        {textHeadings[i]}
                      </span>
                      <span className={"text-xs lg:text-sm text-gray-400 lg:flex " + (i === currentDiv ? "" : "hidden")}>
                        {textDescriptions[i]}
                      </span>
                    </div>
                  </button>
                )
              })
            }
          </div>

          <div className="col-span-2 md:col-span-1 flex flex-col items-center justify-center p-4 md:p-16">
            <div className="w-full">
              <Swiper
                spaceBetween={30}
                onSlideChange={(swiper) => setCurrentDiv(swiper.activeIndex)}
                className="mySwiper w-full"
              >
                <SwiperDummyController index={currentDiv} />
                <SwiperSlide>
                  <img src={BgImage[0]} className={styles.slideImage} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={BgImage[1]} className={styles.slideImage} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={BgImage[2]} className={styles.slideImage} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={BgImage[3]} className={styles.slideImage} />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div className="h-[25vh] md:hidden col-span-2 flex items-center justify-center p-4 w-full">
            <div className="max-w-sm flex flex-col w-full bg-[#00C2FF]/20 px-6 py-4 rounded-xl gap-4">
              <Swiper
                spaceBetween={30}
                modules={[Autoplay]}
                autoplay
                onSlideChange={(swiper) => {
                  // console.log(swiper.activeIndex)
                  setCurrentDiv(swiper.activeIndex)
                }}
                className="mySwiper w-full"
              >
                <SwiperDummyController index={currentDiv} />
                {images.map((image, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <div
                        className={
                          "min-w-max min-h-max flex flex-row justify-center items-center mb-4"
                        }
                        
                      >
                        <img src={image} width={80} height={48} />
                      </div>
                      <div className="text-lg uppercase">
                        {textHeadings[i]}
                      </div>
                      <div className="text-sm text-gray-400">
                        {textDescriptions[i]}
                      </div>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const SwiperDummyController = ({ index }) => {
  const swiper = useSwiper();

  useEffect(() => {
    swiper.slideTo(index, 300, false);
  }, [index]);

  return (
    <></>
  )
}
