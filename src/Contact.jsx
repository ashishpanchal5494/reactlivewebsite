import React, {  useState } from 'react'

function Contact() {

  const [data, setData] = useState({
    fullname : '',
    phone: '',
    email: '',
    msg: '',
  })

  
  const formSubmit = (e) => {
   e.preventDefault();
   alert('click')

   setData({
    fullname : '',
    phone : '',
    email : '',
    msg : '',
   })
  
  }


 const inputEvent = (event) => {
  console.log(event.target.value)
  console.log(event.target.name)

  const value = event.target.value
  const name = event.target.name


  setData(name, value)

 
    }
    

  return (
    <div>
      <div className='my-5'>
        <h1 className='text-center'> Contact US</h1>
      </div>
      <div className='container contact_div'>
        <div className='row'>
            <div className='col-md-6 col-10 mx-auto'>
                <form onSubmit={formSubmit}>
                <div className="mb-3">
  <label htmlFor ="exampleFormControlInput1" className="form-label">Full name</label>
  <input
  onChange={inputEvent}
   type="text" 
   value={data.fullname}
   className="form-control" 
   id="exampleFormControlInput1" 
   placeholder="Enter your full name"/>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Phone number</label>
  <input
  onChange={inputEvent}
  value={data.phone}
   type="number" 
   className="form-control" 
   id="exampleFormControlInput1" 
   placeholder="Phone number"/>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input
  onChange={inputEvent}
  value={data.email}
   type="email" 
   className="form-control" 
   id="exampleFormControlInput1" 
   placeholder="name@example.com"/>
</div>

<div className="mb-3">
  <label 
  htmlFor="exampleFormControlTextarea1" 
  className="form-label">Message</label>
  <textarea 
  onChange={inputEvent}
  value={data.msg}
  className="form-control" 
  id="exampleFormControlTextarea1" 
  rows="3"></textarea>

</div>
<div className='my-3'>
<button type="submit" className="btn btn-primary">Submit</button>
</div>

                </form>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Contact
