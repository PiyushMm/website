import React from 'react'
import image from "../Images/3.png"
import { PiMedalFill } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { GrMapLocation } from "react-icons/gr";
import { MdSupportAgent } from "react-icons/md";


export default function About() {
  return (
    <div>
      {/* <div className='d-flex justify-content-center'>
          <div className='fs-1 p-2 bg-light mt-1 border border-3 rounded  '  >
        <p className='font-italic' style={{fontStyle:"italic",color:"blue"}}>About Us</p>
          </div>
         </div> */}
      <div className='' style={{ backgroundColor: "rgb(13, 23, 51)" }}>
        <div className='d-flex justify-content-around'>
          <div className='mt-5'>
            <h1 style={{ fontSize: "50px" }} className='m-0 p-0'  >Trusted By WorldWide</h1>
            <h1 style={{ fontSize: "50px" }}
              className='me-1 p-0'>Clients</h1>


            <span className=''>Lorem ipsum dolor sit amet, consectetur </span><br />
            <span>adipisicing elit. Sed architecto dolorum inventore </span>
            <div className='row mb-2'>
              <div className='col'>
                <div className='d-flex gap-2'>
                <PiMedalFill  className='fs-1 border border-primary mt-2 p-1 g-2' />
                <div className=' '>
                  <div className='fs-5'> First On Field</div>
                  <span className=''>Lorem ipsum dolor sit  </span><br />
                  <span>adipisicing elit. Sed architecto  </span>
                </div>
                </div> 
              </div>
              <div className='col'>
                <div className='d-flex gap-2'>
                <IoGameControllerOutline  className='fs-1 border border-primary mt-2 p-1 g-2' />
                <div className=' '>
                  <div className='fs-5'> Easy To Reach</div>
                  <span className=''>Lorem ipsum dolor sit  </span><br />
                  <span>adipisicing elit. Sed architecto  </span>
                </div>
                </div> 
              </div> 
            </div>

            <div className='row'>
              <div className='col'>
                <div className='d-flex gap-2'>
                <GrMapLocation   className='fs-1 border border-primary mt-2 p-1 g-2' />
                <div className=' '>
                  <div className='fs-5'> Worldwide Services</div>
                  <span className=''>Lorem ipsum dolor sit  </span><br />
                  <span>adipisicing elit. Sed architecto  </span>
                </div>
                </div> 
              </div>
              <div className='col'>
                <div className='d-flex gap-2'>
                <MdSupportAgent   className='fs-1  border border-primary  mt-2 p-1 g-2' />
                <div className=' '>
                  <div className='fs-5'> 24/7 Support</div>
                  <span className=''>Lorem ipsum dolor sit  </span><br />
                  <span>adipisicing elit. Sed architecto  </span>
                </div>
                </div> 
              </div> 
            </div>
          </div>


          <div className='d-flex justify-content-end'>
            <img className="d-flex justify-content-end me-5" style={{ height: "500px" }} src={image} alt='image' />
          </div>
        </div>

      </div>
      {/* <div className=''><Services/></div> */}
    </div>
  )
}
