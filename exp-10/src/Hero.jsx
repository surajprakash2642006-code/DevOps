import React from 'react';
function Hero() {
  return (
    <section id="hero" className="text-center position-relative overflow-hidden p-5 d-flex flex-column align-items-center justify-content-center" style={{minHeight:'60vh'}}>
      <div className="position-relative" style={{zIndex: 1}}>
        <h1 className="fw-bold display-3 mb-3 animate__animated animate__fadeInDown" style={{color:'#fff', letterSpacing:'-2px'}}>
          Music for everyone.
        </h1>
        <p className="lead animate__animated animate__fadeInUp animate__delay-1s" style={{color:'#b3b3b3', fontSize:'1.5rem'}}>
          Millions of songs. No credit card needed.
        </p>
        <a href="#services" className="btn btn-lg mt-4 shadow animate__animated animate__pulse animate__infinite" style={{background:'#4CAF50', color:'#191414', fontWeight:700, borderRadius:'2rem', padding:'0.75rem 2.5rem', fontSize:'1.3rem'}}>Get Music Free</a>
      </div>
    </section>
  );
}
export default Hero;
