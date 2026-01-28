import React from 'react'

const Footer = () => {
  return (
    <div>
      

      {/* <!-- Footer section --> */}
      <footer className="footer-section">
        <div className="section-content">
          <p className="copyright-text">©ThankYou For visiting </p>

          <div className="social-link-list">
            <a href="#" className="social-link"><i className="fa-brands fa-facebook"></i></a>
            <a href="#" className="social-link"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" className="social-link"><i className="fa-brands fa-x-twitter"></i></a>
          </div>

          <p className="policy-text">
            <a href="#" className="policy-link">Subodh Yadav</a>
            <span className="separator">•</span>
            <a href="#" className="policy-link">8685827081</a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
