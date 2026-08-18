// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaRegCopyright } from "react-icons/fa";
import "./Copyright.css"
const Copyright = () => {
  return (
    <>
    
    <section className="copyRightWrapper fixed z-10 bottom-2 left-5 tracking-wide hidden sm:block"
       title="Custom Work ">
        <a href="https://mybabb.com" 
              className="copyRightAnchorTag">
         <div className="copyRightContainer flex flex-col px-8 py-4 items-center justify-center ">
        
                <span className="copyRightCool absolute left-4 top-[50%] transform -translate-y-1/2 ">
                  < FaRegCopyright  />
                </span>
                <span className="noLeftBorder inline-block font-Itim-Regular   ">
                       <span className='webDevFancyWords'>Brett&apos;s&nbsp;Web&nbsp;Development</span>  
                </span>
                  
          </div>   
        </a>
     </section>
    
    
    </>
  )
}

export default Copyright