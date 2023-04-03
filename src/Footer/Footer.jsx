import React from 'react'
import './Footer.css'
export default function Footer() {
  return (

    <section className='footerSection  '>
<div className='mybg'>        <div className='container  '>
            <div className='row g-5 py-4'>
                <div className='col-md-4'>
                    <div className='item text-center'>
<h2 className='text-white py-3 fs-4 fw-bold'>LOCATION</h2>
<p className='text-white'>2215 John Daniel Drive
Clark, MO 65243</p>

                    </div>


                </div>

                <div className='col-md-3'>
                    <div className='item text-center'>
<h2 className='text-white py-3 fs-4 fw-bold'>AROUND THE WEB</h2>
<div className='d-flex  justify-content-center'>
    <div className='border border-2 rounded-circle mx-3 px-3 py-2 myicondiv'><i className="fa-brands fa-facebook-f  fs-5 myicon"></i></div>
    <div className='border border-2 rounded-circle mx-3 p-2 myicondiv '><i className="fa-brands fa-twitter  fs-5 myicon"></i></div>
    <div className='border border-2 rounded-circle mx-3 p-2 myicondiv'><i className="fa-brands fa-linkedin-in  fs-5 myicon"></i></div>
    <div className='border border-2 rounded-circle mx-3 p-2 myicondiv'><i className="fa-solid fa-basketball  fs-5 myicon"></i></div>
</div>

                    </div>


                </div>
                <div className='col-md-3'>
                    <div className='item text-center'>
                        <h2 className='text-white py-3 fs-4 fw-bold'>ABOUT FREELANCER</h2>
                        <p className='text-white fs-6 '>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>


                    </div>


                </div>
            </div>
        </div></div>
        <div className='copyrightbg py-3 text-center text-white '> Copyright © Your Website 2021</div>

    </section>

  )
}
