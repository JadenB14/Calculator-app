import React from 'react'

export default function Display( {total , operation, multiples}) {

 

  return (
    <div>
        <p>{ operation !== '' ? `${operation} ${[...multiples].join('')}` : total.length > 0 ? total : 0 }</p>
    </div>
  )
}
