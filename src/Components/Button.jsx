import React from 'react'

export const Button = ({className, title, icon, classIcon, onClick, disabled}) => {
  return (
    <div className='relative '>
        <button
            className={`relative w-full p-2 rounded-xl justify-center items-center bg-neutral-200 mb-4 ${className}`}
            onClick={onClick}
            disabled={disabled}
        >{icon ? <FontAwesomeIcon icon={icon} className={`top-4 pr-1 ${classIcon}`} />:null} {' '} {title}</button>
    </div>
  )
}