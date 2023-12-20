import React from 'react'

export default function ColorPreview({ colors, limit = 3 }) {
  const showColor = colors.slice(0, limit)
  const moreColor = colors.length - limit
  return (
    <div className='flex items-center'>
      {showColor.map((color, index) => (
        <span
          key={color + index}
          className='w-4 h-4 rounded-full border-2 border-white shadow-inner -ml-1.5'
          style={{ backgroundColor: color }}
        />
      ))}
      {colors.length > limit && <p className='text-sm'>{`+${moreColor}`}</p>}
    </div>
  )
}
