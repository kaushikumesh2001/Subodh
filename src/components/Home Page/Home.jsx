import React from 'react'

const Home = () => {
  return (
    <div>
         {/* <!-- Home section --> */}
      <section className="hero-section">
        <div className="section-content">
          <div className="hero-details">
            <h1 className="company-name">
  Shree Krishna Construction Company
</h1>

<p className="owner-line">
  Owned by Mr Subodh Yadav & Mr Bhoop Singh
</p>

            <h2 className="title">Hyundai R215L SMART X Plus Excavator</h2>
            <h3 className="subtitle">
  Reliable Mining Solutions <br />
  Engineered for Continuous Performance <br />
  Built for Tough Jobs
</h3>

            <p className="description">The Hyundai R215L SMART X PLUS is a heavy-duty 22-ton hydraulic excavator designed for quarrying, mining, and large-scale earthmoving applications. Powered by a reliable Cummins 6BTAA 5.9-litre engine producing 148 HP, it delivers strong digging force, stable operation, and smooth hydraulic response in tough working conditions. Built for durability, fuel efficiency, and consistent productivity, the Hyundai R215L excavator is a dependable mid-size solution for demanding excavation tasks from Hyundai Construction Equipment.</p>

            <div className="buttons">
              <a href="#contact" className="button Hire-now">For Booking</a>
              <a href="#contact" className="button contact-us">Contact me</a>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img src="Subodhmm.jpeg" alt="Umesh " className="hero-image  " />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
