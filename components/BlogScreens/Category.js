import Link from 'next/link'
import React from 'react'
import { cx } from '../../utils'

const Category = ({link="#", name, active, ...props}) => {
  return (
    <Link href={link} className={cx("inline-block py-2 px-10 m-2  rounded-full  font-semibold border-2 border-solid border-white hover:scale-105 transition-all ease duration-200", 
    props.className,
    active ? 'bg-[#9b637e] text-white' : 'bg-white text-black')}>
        #{name}
    </Link>
  )
}

export default Category
