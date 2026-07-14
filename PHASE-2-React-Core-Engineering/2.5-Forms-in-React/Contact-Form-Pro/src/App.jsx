import {useState} from 'react';
import './App.css'

function App() {
  const [formValue, setFormValue] = useState({userName:"", email:"", subject:"", message:""});
  const [touched, setTouched] = useState({userName:false, email:false, subject:false, message:false});

function handleChange (event){
   setFormValue ({...formValue, [event.target.name]: event.target.value});
}

function handleBlur (event){
   setTouched ({...touched, [event.target.name]: true});
}

function formValidation (){
  const errors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(!formValue.userName){
    errors.userName = "وارد کردن نام کاربری، ضروری است.";
  }else if(formValue.userName.length < 3){
    errors.userName = "نام کاربری نباید کمتر از 3 کارکتر باشد."
  }

  if(!formValue.message){
    errors.message = "وارد کردن متن پیام ضروری است."
  }else if (formValue.message.length < 10){
    errors.message = "متن پیام باید بیشتر از 10 کارکتر باشد."
  }

  if(!formValue.subject){
    errors.subject = "برای موضوع حتما یکی از گزینه‌های لیست کشویی را انتخاب کنید."
  }

  if(!formValue.email){
    errors.email = "لطفا ایمیل خود را وارد کنید."
  }else if(!emailPattern.test(formValue.email)){
    errors.email = "ایمیل باید مطابق با فرمت تعیین شده باشد."
  }
  return errors;
}
const error = formValidation();
  return (
    <div className="container">
      <h2>Contact Form Pro</h2>
      <form className="formCountainer" action="">
        <div className="userNameCon" >
          <label htmlFor="userName">User Name:</label>
          <input name='userName' type="text" id="userName" className='userName' onChange={handleChange} onBlur={handleBlur} value={formValue.userName}/>
          {touched.userName && error.userName && <span className="error-msg">{error.userName}</span>}
        </div>
        <div className="emailCon">
          <label htmlFor="email">Your Email:</label>
          <input name='email' type="text" id="email" className='email' onChange={handleChange} onBlur={handleBlur} value={formValue.email}/>
          {touched.email && error.email && <span className="error-msg">{error.email}</span>}
        </div>
       <div className="subjectCon">
          <label htmlFor="subject">Message Subject:</label>
          <select 
           name="subject" 
            id="subject"
           value={formValue.subject} 
           onChange={handleChange} 
           onBlur={handleBlur}
          >
            <option value="">لطفاً یک موضوع انتخاب کنید</option>
            <option value="support">پشتیبانی فنی</option>
           <option value="sales">فروش و مالی</option>
           <option value="feedback">پیشنهادات و انتقادات</option>
         </select>
         {touched.subject && error.subject && <span className="error-msg">{error.subject}</span>}
        </div>
        <div className="messageCon">
          <label htmlFor="message">Message:</label>
          <textarea name='message' type="text" id="message" className='message' onChange={handleChange} onBlur={handleBlur} value={formValue.message}/>
          {touched.message && error.message && <span className="error-msg">{error.message}</span>}
        </div>
        <div className="submitCon">
        <label htmlFor="submitBtn">Press Submit To Send Data:</label>
        <button className='submitBtn' id="submitBtn">Submit Form</button>
        </div>
      </form>
    </div>
  )
}

export default App
