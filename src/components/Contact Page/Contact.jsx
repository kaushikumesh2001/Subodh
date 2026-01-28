import React from 'react'

const Contact = () => {
  return (
    <div>
        
      {/* <!-- Contact section --> */}
      <section className="contact-section" id="contact">

        <h2 className="section-title">Contact Us</h2>
        <div className="section-content">

          <ul className="contact-info-list">
          <h1 className='font-bold text-2xl text-blue-900'>Shiri Krishna Construction Company <br />
          Kanwi Narnaul (123001)
          </h1>
          <h1 className='font-bold text-blue-950'>
Machine currently located at Abu Road

          </h1>
            <li className="contact-info">
              <i className="fa-solid fa-location-crosshairs"></i>
              <p> Kanwi,Narnaul 123001 Haryana</p>
            </li>
            <li className="contact-info">
              <i className="fa-regular fa-envelope"></i>
              <p>subodhyadav8685@gmail.com</p>
            </li>
             <li className="contact-info">
              <i className="fa-regular fa-clock"></i>
              <p>Subodh Yadav, Bhoop Singh</p>
            </li>
            <li className="contact-info">
              <i className="fa-solid fa-phone"></i>
              <p>+91 8685827081 ,</p> <span> +91 9468459692</span>
            </li>
           
          
           
            
          </ul>
<img src="Subhu.jpeg" alt="Subodh Image" className="owner-image" />

         
        </div>
      </section>
    
    </div>
  )
}

export default Contact
