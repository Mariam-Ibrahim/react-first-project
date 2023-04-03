import React from 'react'
import './Intropage.css'
import imgOne from '../assets/avataaars.svg'

export default function Intropage() {
  return (
    <section className='interosection py-5'>
<div className='container d-flex justify-content-center align-items-center  py-5'>
    <div className='col-md-6  text-center py-5'>
        <img src={imgOne} alt=""  className='myimg'/>
        <h2 className=' myfont text-white'>START REACT</h2>
        <p className='text-white myfont2'>Graphic Artist - Web Designer - Illustrator</p>

    </div>
    </div>    
</section>
  )
}
