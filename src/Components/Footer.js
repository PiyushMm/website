import React from 'react'
import { Link } from 'react-router-dom'
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { AiOutlineLinkedin } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
export default function Footer() {
  return (

    <div className="container">
      <footer className="py-5">
        <div className="row">
          <div className="col-4 col-md-3 mb-3">
            <h5>Quick Links</h5>
            <ul className="nav flex-column">
              <Link className='text-decoration-none text-white' to={"/"}><li className='nav-item mb-2'>Home </li></Link>
              <Link className='text-decoration-none text-white' to={"/"}><li className='nav-item mb-2'>Community </li></Link>
              <Link className='text-decoration-none text-white' to={"/"}><li className='nav-item mb-2'>Support </li></Link>
              <Link className='text-decoration-none text-white' to={"/"}><li className='nav-item mb-2'>Company Info </li></Link>
              <Link className='text-decoration-none text-white' data-bs-toggle="modal" data-bs-target="#exampleModal" ><li className='nav-item mb-2'>Contact Us </li></Link>

            </ul>
            <div className="modal fade" id="exampleModal" tabindex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header d-flex justify-content-between">

                    <h5 className="modal-title text-dark" id="exampleModalLabel">Contact Us</h5>
                    <button  className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                     
                    </button>
                   
                  </div>
                  <div className="modal-body">
                  <form onSubmit={""}>
                <div className="mb-3 ">
                  <label htmlFor="name" className="form-label fw-bold text-dark">
                    Name :
                  </label>
                  <input
                    type="text"
                    className="form-control border-dark  "
                    // value={credentials.subject}
                    // onChange={handleChange}
                    name="name"
                    id="name"
                    placeholder="Enter name"
                  />
                </div>
                <div className="mb-3 ">
                  <label htmlFor="email" className="form-label fw-bold text-dark">
                    Email :
                  </label>
                  <input
                    type="email"
                    className="form-control border-dark  "
                    // value={credentials.subject}
                    // onChange={handleChange}
                    name="email"
                    id="email"
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="mb-3 ">
                  <label htmlFor="phone" className="form-label fw-bold text-dark">
                    Phone :
                  </label>
                  <input
                    type="text"
                    className="form-control border-dark  "
                    // value={credentials.subject}
                    // onChange={handleChange}
                    name="phone"
                    id="phone"
                    placeholder="Enter Phone Number"
                  />
                </div>
               
                <div className="d-flex justify-content-end">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>

                  </div>
                  
                </div>
              </div>
            </div>
          </div>


          <div className="col-4 col-md-3 mb-3">
            <h5>Contact Information</h5>
            <ul className="nav flex-column">
              <div className='d-flex gap-2'>
                <p className='text-white'>
                  <IoIosMail className='fs-5' />
                </p>
                <p>yogenterprisesolutions@gmail.com</p>
              </div>
              <div className='d-flex gap-2'>
                <p className=''>
                  <HiLocationMarker className='fs-5' />
                </p>
                <p>426,Apollo Tower M.G Road Indore, MP</p>
              </div>
              <div className='d-flex gap-2'>
                <p className=''>
                  <FaPhoneAlt />
                </p>
                <p>+91-6262862146</p>
              </div>
            </ul>
          </div>

          <div className="col-md-4 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label for="newsletter1" className="visually-hidden">Email address</label>
                <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                <button className="btn btn-primary" type="button">Subscribe</button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-1 my-1 border-top">
          <p>© 2024 Company, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <div className=''>
              <Link to="https://www.linkedin.com/company/yog-enterprise-solutions/" className='text-white fs-4' target="_blank" rel="noopener noreferrer">
                <AiOutlineLinkedin className='mx-2' />
              </Link>
              <Link className=' text-white fs-5'>
                <FaXTwitter className='mx-2' />
              </Link>
            </div>
          </ul>
        </div>
      </footer>
    </div>



  )
}





