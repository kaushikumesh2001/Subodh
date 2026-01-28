import React from 'react'

const Home = () => {
  return (
    <div>
         {/* <!-- Home section --> */}
      <section className="hero-section">
        <div className="section-content">
          <div className="hero-details">
            <h2 className="title">Hyundai R215L SMART X Plus Excavator</h2>
            <h3 className="subtitle">Reliable Mining Solutions
Engineered for Continuous Performance
              Power That Builds the Future,Engineered for Performance. Built for Tough Jobs.</h3>
            <p className="description">The Hyundai R215L SMART X PLUS is a heavy-duty 22-ton hydraulic excavator designed for quarrying, mining, and large-scale earthmoving applications. Powered by a reliable Cummins 6BTAA 5.9-litre engine producing 148 HP, it delivers strong digging force, stable operation, and smooth hydraulic response in tough working conditions. Built for durability, fuel efficiency, and consistent productivity, the Hyundai R215L excavator is a dependable mid-size solution for demanding excavation tasks from Hyundai Construction Equipment.</p>

            <div className="buttons">
              <a href="#contact" className="button Hire-now">For Booking</a>
              <a href="#contact" className="button contact-us">Contact me</a>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img src="Machine1.jpg" alt="Umesh " className="hero-image  " />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
