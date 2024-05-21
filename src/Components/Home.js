import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import image from "../Images/illustration-1.png"
import Services from './Services'

export default function Home() {
  return (

    <div>
      <div className='' style={{backgroundColor:"rgb(13, 23, 51)"}}>    
        <div className='d-flex justify-content-around'>
          <div className='mt-5'>
            <h1 style={{ fontSize: "50px" }} className='m-0 p-0'  >Providing The Best </h1>
            <h1 style={{ fontSize: "50px" }}
              className='me-1 p-0'>Services & IT</h1>
            <h1 className="m-0" style={{ fontSize: "50px" }}>Solutions</h1> 
         <span className=''>Lorem ipsum dolor sit amet, consectetur </span><br/>
         <span>adipisicing elit. Sed architecto dolorum inventore </span>
          </div>
          
          <div className='d-flex justify-content-end'>
            <img className="d-flex justify-content-end me-5" style={{ height: "500px" }} src={image} alt='image' />
          </div>
        </div>
        
      </div>
      <div className=''><Services/></div>
    </div>
  )
}
