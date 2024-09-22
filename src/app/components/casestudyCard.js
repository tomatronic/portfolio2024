'use client'

import React, { useRef } from 'react'
import Link from "next/link"
import Image from 'next/image'

function Presentation({ isReversed, ...props }) {
  const ref = useRef(null);


  return (
    <div ref={ref} className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} relative`}>
      <div className="flex-1 justify-center relative">
        <Image src={props.img} width={750} height={250} alt={props.title} priority={true} />
      </div>
      
      <div className="flex-1 flex-col justify-between px-10 py-4 leading-normal">
        <div className="text-purple-500 uppercase font-medium text-sm">{props.tag}</div>
        <div className="text-3xl font-semibold pt-4 text-balance tracking-[-0.015em] text-gray-800">{props.title}</div>
        <p className="max-w-lg my-4 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">{props.blurb}</p>
        <Link href={props.link}>              
          <button className="rounded-md bg-gradient-to-tr from-slate-800 to-slate-700 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
            Read case study
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Presentation;