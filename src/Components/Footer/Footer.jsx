import React from 'react'
import { BsBoxSeam } from "react-icons/bs";
import { TfiUnlock } from "react-icons/tfi";
import { FiRefreshCcw } from "react-icons/fi";

export default function Footer() {
    return (
        <>
            <div className=''>
                <div>
                    <div><BsBoxSeam /></div>
                </div>
                <div>
                    <div><TfiUnlock /></div>
                </div>
                <div>
                    <div><FiRefreshCcw /></div>
                </div>
            </div>
        </>
    )
}
