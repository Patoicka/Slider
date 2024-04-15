import React from 'react'
import { Button } from './Button'

export const Modal = ({ title, children, onSuccess, onCancel, className = "", disabledSuccess = false, hideButtons = false, classNameTitle = '' }) => {
    return (
        <>
            <div className="fixed inset-0 bg-shark-800 bg-opacity-30 backdrop-blur-sm z-10 flex justify-center items-center overflow-auto">
                <div className={`flex w-1/2 rounded-lg border-2 border-black justify-center bg-neutral-400 ${className}`}>
                    <div className='w-full px-2 relative'>
                        <button
                            onClick={onCancel}
                            type="button" class="absolute text-black bg-transparent hover:text-bigStone-700 rounded-lg text-sm w-8 h-8 top-0 right-0 flex justify-center items-center mx-2 my-2" data-modal-hide="static-modal">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                        <h2 className={`text-2xl mb-4 text-black font-bold mulishBold pt-10 text-center ${classNameTitle}`}>{title}</h2>
                        {children}
                        <div className='footer flex justify-between pt-6 '>
                           {/*  <Button
                                title={"Aceptar"}
                                className={`text-black w-32 border border-black`}
                                onClick={onSuccess}
                            // icon={faSave}
                            /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}