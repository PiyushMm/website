
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Services from './Components/Services';
import About from './Components/About';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import { useEffect } from 'react';

function App() {
  

  useEffect(() => {
    setTimeout(() => {
      const modal = new window.bootstrap.Modal(document.getElementById('userModal'));
      modal.show();
    }, 5000)

  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted")
  }
  return (
    <div>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/about' element={<About />} />
          {/* <Route path='/contact' element={<Contact />} /> */}

        </Routes>
        <Footer />
      </BrowserRouter>


      <div className="modal fade" id="userModal" tabindex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header d-flex justify-content-between">

              <h5 className="modal-title text-dark" id="exampleModalLabel">Let's Connect Online</h5>
              <button className="btn-close" data-bs-dismiss="modal" aria-label="Close">
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-2">

                  <input
                    style={{ backgroundColor: "lightgray" }}
                    type="text"
                    className="form-control border-dark bg-light-secondary"
                    name="name"
                    id="name"
                    placeholder="First Name & Last Name"
                  />
                </div>
                <div className="mb-2">

                  <input
                    style={{ backgroundColor: "lightgray" }}
                    type="text"
                    className="form-control border-dark"
                    name="email"
                    id="email"
                    placeholder="Email-Id"
                  />
                </div>
                <div className="mb-2">

                  <input
                    style={{ backgroundColor: "lightgray" }}
                    type="text"
                    className="form-control border-dark"
                    name="phone"
                    id="phone"
                    placeholder="Mobile No."
                  />
                </div>
                <div className="mb-2">

                  <input
                    style={{ backgroundColor: "lightgray" }}
                    type="text"
                    className="form-control border-dark"
                    name="company"
                    id="company"
                    placeholder="Company Name"
                  />
                </div>
                <div className="mb-2">

                  <input
                    style={{ backgroundColor: "lightgray" }}
                    type="text"
                    className="form-control border-dark"
                    name="name"
                    id="name"
                    placeholder="First Name & Last Name"
                  />
                </div>

                <div className="mb-2">
                  <label htmlFor="employees" className="form-label text-dark">
                    No of Employees
                  </label>
                  <select className='form-control' id='employees'>
                    <option className='form-control'>1-10</option>
                    <option className='form-control'>11-50</option>
                    <option className='form-control'>51-200</option>
                    <option className='form-control'>201-500</option>
                    <option className='form-control'>501-1000</option>
                    <option className='form-control'>1000+</option>
                  </select>
                </div>
                <div className='mb-2'>
                  <input
                    style={{ backgroundColor: "lightgray" }}
                    type="text"
                    className="form-control border-dark"
                    name="requirements"
                    id="requirements"
                    placeholder="Your Requirements"
                  />
                </div>

                <div className='d-flex justify-content-around mb-2'>
                  <div>
                    <input type="radio" id="hrms" name="fav_language" value="hrms" />
                    <label className='text-dark mx-2 fw-bold' for="hrms">HRMS & Payroll</label>
                  </div>
                  <div>
                    <input type="radio" id="crm" name="fav_language" value="crm" />
                    <label className='text-dark mx-2 fw-bold' for="crm">CRM</label>
                  </div>
                  <div>

                    <input type="radio" id="erp" name="fav_language" value="erp" />
                    <label className='text-dark mx-2 fw-bold' for="erp">ERP</label>
                  </div>


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


  );
}

export default App;
