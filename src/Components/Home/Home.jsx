import { lazy, useContext, useState } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import AllProductsContext from '@/Context/Products'
import Header from '../Header/Header'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import ScrollUp from '../ScrollUp/ScrollUp'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa6";

export default function Home() {
  const contextData = useContext(AllProductsContext)  
  return (
    <div className="overflow-hidden">
    <NavBar/>
      <Header />
      <Carousel className="w-[60%] 2xl:w-full max-w-7xl mx-auto mt-20">
      <CarouselContent className="-ml-1">
        {contextData.items.map((item) => (
          <CarouselItem key={item.id} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img src={item.src} alt= 'time-zone' loading="lazy" className="w-full h-full object-cover" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
        <div className='relative mt-25'>
        <div className='absolute flex content-center items-center w-[55px] h-[55px] left-[40%] top-[27%] sm:w-[85px] sm:h-[85px] sm:top-[40%] sm:left-[45%] border border-amber-50 rounded-full cursor-pointer'><FaPlay className='text-4xl ml-2 sm:ml-6 text-white'/></div>
          <img src="./images/sectin_bg1.png.webp" loading="lazy" alt="time-zone" />
          <div className='bg-[#ff2020] absolute w-[40%] sm:w-[30%] bottom-0 '>
          <a href="#" className='flex p-2 justify-around items-center cursor-pointer sm:p-5 lg:p-15'>
            <span className='capitalize text-xl text-white font-bold'>next video</span>
            <FaArrowRightLong className='text-white text-2xl'/>
            </a>
          </div>
        </div>
        <Footer/>
        <ScrollUp />
      </div>
      )
}
