import { useContext, useState } from "react"
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
import './Home.css'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import ScrollUp from '../ScrollUp/ScrollUp'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa6";

export default function Home() {
  const contextData = useContext(AllProductsContext)  
  return (
    <>
    <NavBar/>
      <Header />
      <Carousel className="w-full max-w-7xl mx-auto mt-20">
      <CarouselContent className="-ml-1">
        {contextData.items.map((item) => (
          <CarouselItem key={item.id} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img src={item.src} alt={item.description} className="w-full h-full object-cover" />
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
        <div className='absolute w-[85px] h-[85px] top-[40%] left-[45%] border border-amber-50 rounded-full cursor-pointer'><FaPlay className='text-4xl ml-6 mt-5.5 text-white'/></div>
          <img src="/images/sectin_bg1.png.webp" alt="" />
          <div className='bg-[#ff2020] absolute w-[30%] bottom-0 '>
          <a href="" className='flex justify-around items-center cursor-pointer p-15'>
            <span className='capitalize text-2xl text-white font-bold'>next video</span>
            <FaArrowRightLong className='text-white text-2xl'/>
            </a>
          </div>
        </div>
        <Footer/>
        <ScrollUp />
      </>
      )
}
