import React from 'react'

export default function Paragraph({className = "",text = ""}) {
  return (
    <p
        className={`${className}`}
    >{text}</p>
  )
}
