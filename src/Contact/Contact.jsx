import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <section className='contactSection  d-flex justify-content-center mt-5 mb-5 pb-5'>
        <div className='w-50 '>
            <h2 className='text-center contactname'>CONTACT ME</h2>
            <input type="text" className='form-control py-4 border-0 rounded-0 fs-4 myinput shadow-none ' placeholder='Name' />
            <input type="text" className='form-control py-4 border-0 border-top rounded-0 fs-4 shadow-none ' placeholder='EMAIL ADDRESS'/>
            <input type="text" className='form-control py-4 border-0 border-top rounded-0 fs-4 shadow-none ' placeholder='PHONE NUMBER'/>
            <textarea type="text" className='form-control py-5 border-0 border-top border-bottom rounded-0 fs-4 shadow-none ' placeholder='MESSAGE'/>
            <button className='btn mybtn text-white fw-bold px-4 py-3 mt-3'>Send</button>
        </div>
    </section>
  )
}
