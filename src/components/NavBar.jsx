import React from 'react'
import logo from '../images/Screenshot 2024-05-27 001709 1.png'
import '../App.css'
import { Link } from 'react-router-dom'
export default function NavBar() {
  return (
    <div className=' d-flex align-items-center justify-content-between'>
         {/* <img src={logo} alt="" width='198'/>
         <ul className="d-flex align-items-center gap-3 list navbar-nav me-auto mb-2 mb-lg-0">
             <Link to='/'><li className='fw-bold'>Home</li></Link>
             <Link to='/about'><li className='fw-bold'>about us</li></Link>
             <Link to='/services'><li className='fw-bold'>services</li></Link>
             <Link to='/portfolio'><li className='fw-bold'>portfolio</li></Link>
             <Link to='/price'><li className='fw-bold'>prices</li></Link>
             <Link to='/privacy'><li className='fw-bold'>privacy & policy</li></Link>
             <Link to='/contact'><li className='fw-bold'>contact us</li></Link>
             <Link to='/shipping'><li className='fw-bold'>Sipping</li></Link>
         </ul> */}
         <nav class="navbar navbar-expand-lg w-100 navbar-light bg-white ">
  <div class="container-fluid d-flex justify-content-between">
    <a class="navbar-brand" href="#"><img src={logo} alt="" width='198'/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse grow" id="navbarSupportedContent">
    <ul className="d-flex ml-auto align-items-center gap-3 list navbar-nav me-auto mb-2 mb-lg-0">
             <Link to='/'><li className='fw-bold'>Home</li></Link>
             <Link to='/about'><li className='fw-bold'>about us</li></Link>
             <Link to='/services'><li className='fw-bold'>services</li></Link>
             <Link to='/portfolio'><li className='fw-bold'>portfolio</li></Link>
             <Link to='/price'><li className='fw-bold'>prices</li></Link>
             <Link to='/privacy'><li className='fw-bold'>privacy & policy</li></Link>
             <Link to='/contact'><li className='fw-bold'>contact us</li></Link>
             <Link to='/shipping'><li className='fw-bold'>Sipping</li></Link>
         </ul>

    </div>
  </div>
</nav>
    </div>
  )
}
