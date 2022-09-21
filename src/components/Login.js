import React from "react";
import { useNavigate } from "react-router-dom";
import './styles.css';


export default function Login () {
  let navigate = useNavigate();

  return (
        <div class="wrapper fadeInDown">
          <div id="formContent">
            <div class="fadeIn first">
              <img src="https://thumbs.dreamstime.com/z/login-icon-button-vector-illustration-isolated-white-background-126997728.jpg" id="icon" alt="User Icon" />
            </div>
            <form>
              <input type="text" id="login" class="fadeIn second" placeholder="login"/>
              <input type="password" id="password" class="fadeIn third" placeholder="password"/>
              <input type="submit" class="fadeIn fourth" value="Log In" onClick={() => {
                    navigate("/home");
                  }}/>
            </form>
            <div id="formFooter">
              <a class="underlineHover" href="/">Forgot Password?</a>
            </div>
          </div>
        </div>
  );
}
