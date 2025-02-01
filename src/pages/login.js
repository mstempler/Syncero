import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <>
           
            <div className="sign-up-page  ">
            <h1 className="text-center my-6">Welcome back</h1>
                <div className="register-page col-md-5 mx-auto">
                    <div className="row">
                    
                        <div className="col-md-12 mb-3">
                        <div className="form-group">
                            <label htmlFor="Email">Email</label>
                            <input type="email" className="form-control" id="Email"  />
                            </div>
                        </div>
                        <div className="col-md-12">
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password"  />
                            </div>
                        </div>
                        <div className="d-flex forget">
                        <div className="form-check col-md-6 mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label className="form-check-label" for="flexCheckDefault">
    Remember Me
  </label>
</div>
<div className="col-md-6 text-end mt-2">
    <Link to={'/'} className="forgot">Forgot password?</Link>
    </div>
    </div>
<div className="col-md-12 create-btn text-center">
    <a href="#" className="btn-create col-md-12">Log in</a>
    </div>
    <div class="or-section">
        <hr></hr>
        <h4>OR</h4>
        <hr></hr>
        </div>
        <p className="terms">By clicking Sign up with Facebook or Sign up with Google, you agree to the Terms of Use and Privacy Policy. We'll keep you logged in.</p>
                    <Link to={'/'} className="face col-md-12"><svg class="w2  " height="28" width="28" fill="none" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><path d="M26 14.073C26 7.406 20.627 2 14 2S2 7.406 2 14.073C2 20.098 6.388 25.093 12.125 26v-8.436H9.077v-3.491h3.048v-2.66c0-3.026 1.792-4.698 4.533-4.698 1.313 0 2.686.236 2.686.236v2.97h-1.513c-1.49 0-1.956.931-1.956 1.887v2.265h3.328l-.532 3.49h-2.796V26C21.612 25.095 26 20.1 26 14.073z" fill="#1977F3"></path></svg>Sign up with Facebook</Link>
                    <Link to={'/'} className="face col-md-12"><svg class="w2 " height="28" width="28" fill="none" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><path d="M25.52 14.272c0-.85-.076-1.669-.218-2.454H14v4.641h6.458a5.52 5.52 0 01-2.394 3.622v3.011h3.878c2.269-2.089 3.578-5.165 3.578-8.82z" fill="#4285F4" fill-rule="evenodd"></path><path d="M14 26.001c3.24 0 5.956-1.074 7.942-2.907l-3.879-3.01c-1.074.72-2.449 1.145-4.063 1.145-3.126 0-5.771-2.111-6.715-4.948H3.276v3.11A11.995 11.995 0 0014 26z" fill="#34A853" fill-rule="evenodd"></path><path d="M7.285 16.281a7.213 7.213 0 01-.376-2.28c0-.79.136-1.56.376-2.28V8.612H3.276A11.996 11.996 0 002 14.002c0 1.935.464 3.768 1.276 5.388l4.01-3.109z" fill="#FBBC05" fill-rule="evenodd"></path><path d="M14 6.773c1.761 0 3.343.605 4.587 1.794l3.442-3.442C19.95 3.19 17.234 2 13.999 2 9.31 2 5.252 4.69 3.277 8.61l4.01 3.11C8.228 8.884 10.873 6.773 14 6.773z" fill="#EA4335" fill-rule="evenodd"></path></svg>Sign up with Google</Link>
                    <Link to={'/'} className="face col-md-12"><svg class="w2 " height="28" width="28" fill="none" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><path d="M20.484 14.643a5.513 5.513 0 012.625-4.626 5.642 5.642 0 00-4.446-2.403c-1.87-.197-3.684 1.119-4.637 1.119-.972 0-2.44-1.1-4.02-1.067a5.921 5.921 0 00-4.983 3.038c-2.154 3.73-.547 9.212 1.516 12.227 1.033 1.477 2.24 3.126 3.819 3.067 1.545-.064 2.122-.985 3.987-.985 1.848 0 2.39.985 4 .948 1.658-.027 2.703-1.483 3.7-2.973a12.213 12.213 0 001.69-3.445 5.326 5.326 0 01-3.251-4.9z" fill="#000"></path><path d="M17.44 5.888A5.428 5.428 0 0018.683 2a5.522 5.522 0 00-3.573 1.849 5.164 5.164 0 00-1.274 3.744 4.566 4.566 0 003.606-1.705z" fill="#000"></path></svg>Sign up with Apple</Link>
                   </div>
                 
                </div>
                <h6 className="acc">Already have an account? <Link to={'/login'} className="log-btm">Log in.</Link></h6>
            </div>
        </>
    );
};

export default Login;