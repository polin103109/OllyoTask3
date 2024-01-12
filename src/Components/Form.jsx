import React,{useState}from 'react'
import "../Styles/Form.css"
function Form() {
    const [formData, setFormData] = useState({name: "",email: ""});
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Name: ${formData.name}, Email: ${formData.email}`
        );
    };
    
    
  return (
    <div className='formDiv'>
        <form onSubmit={handleSubmit}>
          <button className='closeButton'>Close</button> <br/>
        <h4> Win Exclusive Discount!</h4> <br/> 
      <input type="text" id="name" placeholder='Enter your name' name="name" value={formData.name} onChange={handleChange}/>
      <input type="email" id="email" placeholder='Enter your email' name="email" value={formData.email} onChange={handleChange}/>

      <button className='submitButton' type="submit">TRY YOUR LUCK!</button>
    </form>
    </div>
  )
}

export default Form;