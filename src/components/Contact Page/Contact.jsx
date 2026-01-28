import React from 'react'

const Contact = () => {
  return (
    <div>
        
      {/* <!-- Contact section --> */}
      <section className="contact-section" id="contact">
        <h2 className="section-title">Contact Us</h2>
        <div className="section-content">
          <ul className="contact-info-list">
            <li className="contact-info">
              <i className="fa-solid fa-location-crosshairs"></i>
              <p> Mahendergarh,123034 Haryana</p>
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
