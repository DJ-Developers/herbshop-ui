import React from 'react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const H2 = '[&_h2]:text-lg [&_h2]:font-medium'
const H3 = '[&_h3]:text-base [&_h3]:font-medium '
const UL = '[&_ul]:pl-10 [&_ul]:list-disc'
const OL = '[&_ol]:flex [&_ol_li]:first:min-w-[240px]'
const BR = '[&_br]:grid [&_br]:content-[""] [&_br]:mt-3'

export default function ContentPreview({ data }) {
  return (
    <div
      className={classNames(
        'text-sm font-light text-gray-900 leading-9 ',
        H2,
        H3,
        UL,
        OL,
        BR
      )}
      dangerouslySetInnerHTML={{ __html: data }}
    />
  )
}
