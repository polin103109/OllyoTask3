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
    <div>
        <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>

      <button type="submit">TRY YOUR LUCK!</button>
    </form>
    </div>
  )
}

export default Form;