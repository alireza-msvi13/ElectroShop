import React from 'react'

export default function TopSectionTitle({ title }: { title: string }) {
  return (
    <h3 className=" font-morabba relative border-b-2 pb-3 mb-6 text-xl before:absolute before:w-40 before:h-[2px] before:right-0 before:top-10 before:bg-main">{title}</h3>
  )
}
