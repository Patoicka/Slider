
import React, { useState } from 'react'
import Tese from './assets/images/Logo_tese.jpg'
import { Modal1erParcial } from './Components/Modal1erParcial'

export const Contabilidad = () => {

  const [activeModal, setactiveModal] = useState(false)

  return (
    <>
      <div className='bg-neutral-300 h-screen'>

        <div className='flex pt-20 px-96 justify-end'>
          <img className='w-32' src={Tese} />
        </div>

        <div className=''>
          <div className='pb-8'>
            <h1 className='text-3xl font-semibold text-center uppercase pb-1'> TECNOLOGICO DE ESTUDIOS SUPERIORES </h1>
            <h1 className='text-3xl font-semibold text-center uppercase'> DE ECATEPEC </h1>
          </div>
          <h1 className='text-2xl font-semibold text-center uppercase py-6'> 3er Semestre Contabilidad Financiera </h1>
          <h1 className='text-2xl font-semibold text-center uppercase py-6'> Proyecto Primer Parcial </h1>
          <h1 className='text-2xl font-semibold text-center uppercase py-6'> Integrantes del equipo </h1>
          <h1 className='text-lg font-semibold text-center uppercase py-6 pl-10'> 1. Salazar Garcia Diana Paola </h1>
          <h1 className='text-2xl font-semibold text-center uppercase py-6'> Profa. Dulce A. Florez Nuñez </h1>
        </div>

        <div className='flex justify-around py-10'>
          <button onClick={()=>setactiveModal(!activeModal)} className='p-4 rounded-lg border border-neutral-400 bg-neutral-200'>
            <h1 className='text-xl'> 1ER PARCIAL </h1>
          </button>
          <button className='p-4 rounded-lg border border-neutral-400 bg-neutral-200'>
            <h1 className='text-xl'> 2DO PARCIAL </h1>
          </button>
          <button className='p-4 rounded-lg border border-neutral-400 bg-neutral-200'>
            <h1 className='text-xl'> 3ER PARCIAL </h1>
          </button>
        </div>
      </div>

      {activeModal ?
        <Modal1erParcial
          title={'INGRESA LA SIGUIENTE INFORMACIÓN'}
          show={activeModal}
          onCancel={()=> setactiveModal(false)}
        />
        : null}
    </>
  )
}
