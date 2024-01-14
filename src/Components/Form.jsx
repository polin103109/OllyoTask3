import React,{useState}from 'react'
import "../Styles/Form.css"
import SpinWheel from './Spinwheel';
function Form() {
  const [formErrors, setFormErrors] = useState({ name: "", email: "" });
  const [formData, setFormData] = useState({name: "",email: ""});
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        let isValid = true;

    if (formData.name.trim() === "") {
      setFormErrors((prevFormErrors) => ({ ...prevFormErrors, name: "Name is required" }));
      isValid = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormErrors((prevFormErrors) => ({ ...prevFormErrors, email: "Invalid email address" }));
      isValid = false;
    }

    if (isValid) {
     
      alert(`Name: ${formData.name}, Email: ${formData.email}`);
    }
    };
    
    
  return (
    <div className='formDiv'>
       <SpinWheel/>
        <form onSubmit={handleSubmit}>
          <button className='closeButton'>Close</button> <br/>
        <h4> Win Exclusive Discount!</h4> <br/> 
      <input type="text" id="name" placeholder='Enter your name' name="name" value={formData.name} onChange={handleChange}/>
      {formErrors.name && <p className="error">{formErrors.name}</p>}

      <input type="email" id="email" placeholder='Enter your email' name="email" value={formData.email} onChange={handleChange}/>
      {formErrors.email && <p className="error">{formErrors.email}</p>}
      <button className='submitButton' type="submit">TRY YOUR LUCK!</button>
    </form>
    </div>
  )
}

export default Form;