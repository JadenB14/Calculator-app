import React from 'react'

export default function Display( {nums , operation, multiples}) {
  return (

    <div>
        <p className='total'> { operation !== '' ? `${[...multiples].join('')}` : nums.length > 0 ? nums : 0 }</p>
    </div>

  )
}
