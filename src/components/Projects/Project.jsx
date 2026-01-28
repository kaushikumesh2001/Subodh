import React from 'react'

const Project = () => {
  return (
    <div>
      
       <section className="projects-section" id="projects">
        <div className="section-content">
          <div className="projects-image-wrapper">
            <img src="new.jpeg" alt="Certificates" className="projects-image" />
          </div>
          <div className="projects-details">
            <h2 className="section-title">Maintenance And Security</h2>
        <li>
            <h1 className="text font-bold">Our operations follow strict maintenance and security protocols to ensure smooth, uninterrupted performance. Regular inspections, timely servicing, and well-defined safety measures help maintain equipment reliability while protecting assets, personnel, and ongoing work.
                 </h1>
        </li> 
           <li>
            <h1 className="text font-bold ">Strong security measures are in place to safeguard machinery, materials, and work sites. Controlled access, continuous monitoring, and safety compliance ensure a secure and protected working environment.
            </h1>
        </li>
         <li>
            <h1 className="text font-bold ">Routine maintenance and robust security practices work together to ensure reliable operations and a safe work environment. This integrated approach minimizes risks, prevents unexpected failures, and supports consistent project execution.
        </h1>
        </li>
                  </div>
        </div>
      </section>
      <hr />
    </div>
  )
}

export default Project
