import React from 'react'
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div style={{width:'100%',height:'300px',marginTop:'100px'}} className='d-flex justify-content-center align-items-center flex-column bg-primary text-light'>
    <div className="footer d-flex align-item-center justify-content-evenly w-100">
      <div className="websites" style={{width:'350px'}}>
      <h4 className='mb-3'><i class="fa-solid fa-cart-shopping me-2"></i>{' '}E-CART</h4>
      <h6 className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem hic temporibus perferendis. Quia reiciendis amet quae beatae illum id eius!</h6>
      </div>
      <div className="links d-flex flex-column">
        <h4 className='mb-3 text-light'>Links</h4>
        <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home</Link>
        <Link to={'/cart'} style={{textDecoration:'none',color:'white'}}>Cart</Link>
        <Link to={'/wishlist'} style={{textDecoration:'none',color:'white'}}>wishlist</Link>
      </div>
      <div className="guides d-flex flex-column">
      <h4 className='mb-3 text-light'>Guides</h4>
        <Link to={'https://react.dev/'} style={{textDecoration:'none',color:'white'}}>React</Link>
        <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none',color:'white'}}>React-Bootstrap</Link>
        <Link to={'https://bootswatch.com'} style={{textDecoration:'none',color:'white'}}>Bootswatch</Link>
      </div>
      <div className="contacts">
        <h4 className='text-light mb-3'>Contacts</h4>
        <div className="d-flex">
          <input type="mail"  className='form-control text-black' placeholder='Enter your e-mail ID' required/>
          <button className='btn btn-dark ms-3 rounded border w-50 text-light'>Subscribe</button>
        </div>
        <div className="d-flex justify-content-evenly align-items-center mt-3">
        <Link to={'https://www.instagram.com/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-instagram fa-2x"></i></Link>
        <Link to={'https://www.twitter.com/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-twitter fa-2x"></i></Link>
        <Link to={'https://www.linkedin.com/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-linkedin fa-2x"></i></Link>
        <Link to={'https://www.facebook.com/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-facebook fa-2x"></i></Link>
        </div>
      </div>
    </div>
    <p className='mt-3 text-light'>Copyright © E-CART 2023. Build with React</p>
  </div>
  )
}

export default Footer