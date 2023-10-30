import React from 'react'

const Pruba_Formulario = ({n1,n2,n3,tipo,valor,change}) => {

    return (
      <div className='mb-5'>
        <label className='text-gray-700 uppercase font-bold block' htmlFor={n2}>{n1}</label>
  
        <input id={n2} type={tipo} placeholder={n3} className='border-2  border-slate-200 w-full p-2 mt-2 placeholder-gray-400 rounded-md ' value={valor} onChange={change} />
    </div>
    )
  }

export default Pruba_Formulario