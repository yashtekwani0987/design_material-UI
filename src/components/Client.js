import React from 'react'
import { clients } from '../constants'
import style from '../Style'

const Client = () => {
  return (
    <section className={`${style.flexCenter} my-4`}>
      <div className={`${style.flexCenter} flex-wrap w-full `} >
         {clients.map((client)=>(
          <div key={client.id} className={`${style.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px] `} >
            <img src={client.logo} alt="client" className='sm:w-[192px] w-[100px] object-contain' />
          </div>
         ))}
      </div>
    </section>
  )
}

export default Client