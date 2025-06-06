import React from 'react'

export default function Logo() {
  return (
    <>
      <img src={`${import.meta.env.BASE_URL}images/logo.png.webp`} alt="" className='dark:bg-white p-3 rounded-2xl' />
    </>
  )
}
