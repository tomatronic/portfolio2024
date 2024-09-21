import React from 'react'
import Link from "next/link"
import Image from 'next/image'


function Presentation(props) {
  return (

        <Link href={props.link} className="flex grow flex-col items-center md:flex-row gap-60">
          <Image src={props.img} width={450} height={150} alt={props.title} priority={true} className="object-cover shadow-[0px_1px_8px_rgba(13,34,71,0.12),_0px_28px_96px_rgba(13,34,71,0.1)]"/>
            <div className="flex-1 flex-col justify-between px-10 py-4 leading-normal">
              <div className="text-purple-500 uppercase font-medium text-sm">{props.tag}</div>
              <div className="text-3xl font-semibold pt-4 text-balance tracking-[-0.015em] text-gray-800">{props.title}</div>
              <p className="max-w-lg my-4 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">{props.blurb}</p>
            </div>
        </Link>

  )
}
export default Presentation;

