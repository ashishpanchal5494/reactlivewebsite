import React from 'react'

function About() {
  return (
    <div>
     <section id='header' style={{display: 'flex', alignItems: 'center'}}>
       <div className='container-fluid nav_bg'>
        <div className="row">
          <div className='col-10 mx-auto'>
            <div className="row">

            
            <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1'>
                <h1>Welcome to about <strong className="brand-name">Vishwakarma Water</strong></h1>
                <h2 className='my-3'>We are the team of talented construction company</h2>
                <div className='my-3'>
                    <a href='' className='btn-get-started'>Get started</a>
                </div>
            </div>
            <div className='col-lg-6 order-1 order-2 header-img'>
                <img src='https://i0.wp.com/engineeringhint.com/wp-content/uploads/2016/12/LIST-OF-CONSTRUCTION-COMPANIES-IN-HYDERABAD.jpg?fit=700%2C400' className='img-fluid animated' alt='home img'/>
            </div>
            </div>
         </div>
      </div>
    </div>
       </section>
    </div>
  )
}

export default About
