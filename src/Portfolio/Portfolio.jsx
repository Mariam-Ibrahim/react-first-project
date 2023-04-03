import React from 'react'
import img1 from '../assets/cabin.png'
import img2 from '../assets/cake.png'
import img3 from '../assets/circus.png'
import img4 from '../assets/game.png'
import img5 from '../assets/safe.png'
import img6 from '../assets/submarine.png'
import './Portfolio.css'


export default function Portfolio() {
  return (
    <section className='potfolioSection  mt-5 mb-5 pb-5'>
                    <h2 className='portfolioname  text-center'>PORTFOLIO</h2>

        <div className='container  d-flex justify-content-center'>
            
            <div className=' container row g-5  '>
                <div className='col-md-4'>
                    <div className='item'>
                        <img src={img1} alt="" className='w-100 rounded' />
                    </div>
                </div>

                <div className='col-md-4'>
                    <div className='item'>
                        <img src={img2} alt="" className='w-100 rounded' />
                    </div>
                </div>

                <div className='col-md-4'>
                    <div className='item'>
                        <img src={img3} alt="" className='w-100 rounded' />
                    </div>
                </div>

                <div className='col-md-4'>
                    <div className='item'>
                        <img src={img4} alt="" className='w-100 rounded' />
                    </div>
                </div>

                <div className='col-md-4'>
                    <div className='item'>
                        <img src={img5} alt="" className='w-100 rounded' />
                    </div>
                </div>

                <div className='col-md-4'>
                    <div className='item'>
                        <img src={img6} alt="" className='w-100 rounded' />
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}
