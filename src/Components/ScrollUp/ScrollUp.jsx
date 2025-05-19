import React, { memo } from 'react'
import ScrollToTop from 'react-scroll-to-top'
import { BsFillArrowUpSquareFill } from "react-icons/bs";
function ScrollUp() {
  return (
    <>
        <ScrollToTop className='text-[#ff2020] text-5xl' smooth component={<BsFillArrowUpSquareFill />}/>
    </>
  )
}
export default memo(ScrollUp);
