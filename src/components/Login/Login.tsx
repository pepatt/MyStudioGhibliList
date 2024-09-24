import React from 'react'
import { useState} from 'react'
import { Link } from 'react-router-dom'

function Login() {
    const [emailBool, setEmailBool] = useState<boolean | null>(null)
    const [passwordBool, setPasswordBool] = useState<boolean | null>(null)
    const [confirmPasswordBool, setConfirmPasswordBool] = useState<boolean | null>(null)


    const emailRegex: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    const passwordRegex: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/gm;

    function regexValidation(text: string, regex: RegExp) {
      let bool: boolean | null = regex.test(text);

      if(bool === null) {
        bool = regex.test(text);
      } else if (regex.test(text) === false && bool === false) {
        bool = false;
      } else if (regex.test(text) === true && bool === true) {
        bool = true;
      } else if (regex.test(text) === true) {
        bool = true;
      } else if (regex.test(text) === false) {
        bool = false;
      }
      return bool;
    }

    function handleFormSubmit(e: React.FormEvent<HTMLFormElement>):void {
        e.preventDefault();

        const form = e.currentTarget; // Get the current form element
        const email = (form.elements.namedItem("email") as HTMLInputElement).value;
        const password = (form.elements.namedItem("password") as HTMLInputElement).value;
        const confirmPassword = (form.elements.namedItem("confirmPassword") as HTMLInputElement).value;

        setEmailBool(regexValidation(email, emailRegex));
        setPasswordBool(regexValidation(password, passwordRegex));
        setConfirmPasswordBool(regexValidation(confirmPassword, passwordRegex));


        // const password = formData.get('password') as string;
        // const confirmPassword = formData.get('confirmPassword') as string;
        // const isValid: boolean = emailValidation(email)
        // setEmailBool(isValid);
        // setPasswordBool(passwordValidation(password));
        // setConfirmPasswordBool(confirmPasswordValidation(password, confirmPassword))
        return;
    }

    console.log("what email will be displayed:::::", emailBool);
    console.log("what pass will be displayed:::::", passwordBool);
    console.log("what confirmpass will be displayed:::::", confirmPasswordBool);

  return (
    <>
    <form onSubmit={handleFormSubmit} className="login" >
        <label htmlFor="email" className='login__label'>Email</label>
        <input name="email" id="email" type="text" className="login__input" placeholder='email'/>
        <label htmlFor="password" className='login__label'>Password</label>
        <input name='password' id="password" type="text" className="login__input" placeholder='password'/>
        <label htmlFor="confirmPassword" className='login__label'>Confirm Password</label>
        <input name='confirmPassword' id="confirmPassword" type="text" className="login__input" placeholder='confirm password'/>
        <input type="submit" className="login__submit" value='SUBMIT'/>
        <Link to = '/'>Ghibli</Link>
        {emailBool === true 
        ?<div>email: true</div>
        : emailBool === false
        ? <div>email: false</div>
        : <div>email: null</div>}

        {/* {passwordBool === true 
        ?<div>pass: true</div>
        : emailBool === false
        ? <div>pass: false</div>
        : <div>pass: null</div>}

        {confirmPasswordBool === true 
        ?<div>confirmPass: true</div>
        : emailBool === false
        ? <div>confirmPass: false</div>
        : <div>confirmPass: null</div>} */}
    </form>
    </>
  )
}

export default Login