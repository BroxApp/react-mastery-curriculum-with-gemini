import {useState, useEffect} from 'react';
import './App.css'

function App() {
  const [formValue, setFormValue] = useState({userName:"", email:"", subject:"", message:""});
  const [touched, setTouched] = useState({userName:false, email:false, subject:false, message:false});
  const [error, setError] = useState({userName:"", email:"", subject:"", message:""});

function handleChange (event){
   setFormValue ({...formValue, [event.target.name]: event.target.value});
}

function handleBlur (event){
   setTouched ({...touched, [event.target.name]: true});
}

  return (
    <div className="container">
      <h2>Contact Form Pro</h2>
      <form className="formCountainer" action="">
        <div className="userNameCon" >
          <label htmlFor="userName">User Name:</label>
          <input name='userName' type="text" id="userName" className='userName' onChange={handleChange} onBlur={handleBlur} value={formValue.userName}/>
        </div>
        <div className="emailCon">
          <label htmlFor="email">Your Email:</label>
          <input name='email' type="text" id="email" className='email' onChange={handleChange} onBlur={handleBlur} value={formValue.email}/>
        </div>
        <div className="subjectCon">
          <label htmlFor="subject">Message Subject:</label>
          <input name='subject' type="text" id="subject" className='subject' onChange={handleChange} onBlur={handleBlur} value={formValue.subject}/>
        </div>
        <div className="messageCon">
          <label htmlFor="message">Message:</label>
          <textarea name='message' type="text" id="message" className='message' onChange={handleChange} onBlur={handleBlur} value={formValue.message}/>
        </div>
        <div>
          <label htmlFor="submitBtn">Press Submit To Send Data:</label>
          <button className='submitBtn' id="submitBtn">Submit Form</button>
        </div>
      </form>
    </div>
  )
}

export default App
